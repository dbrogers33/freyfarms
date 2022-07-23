import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import mapboxgl from "mapbox-gl"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useStaticQuery, graphql } from "gatsby"
import GeoJSON from "geojson"
import gjv from "geojson-validation"
import distance from "@turf/distance"

import "mapbox-gl/dist/mapbox-gl.css"
import { siteMetadata } from "../../../gatsby-config"

import "./map.css"

export const Map = ({ center, zoom }) => {
  const { mapbox_api_key } = siteMetadata

  const map_node = useRef(null)
  const map_ref = useRef(null)

  const plane_img = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "map-marker.png" }) {
        childImageSharp {
          fluid(maxWidth: 20) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allAirtable {
        edges {
          node {
            data {
              City
              Latidtude
              Longitude
              Phone
              State
              Store_Name
              Street_Address
              Zip
              type
              Is_hidden
              Slug
            }
          }
        }
      }
    }
  `)




  useEffect(() => {
    if (!mapbox_api_key) {
      console.error(
        "Mapbox `mapbox_api_key` is required in gatsby-config.js siteMetadata"
      )
    }

    if (!(typeof window !== "undefined" && window)) {
      console.error("No window")
      return null
    }

    // --------- MAPS LOCATIONS AND ADDS TO SIDEBAR -------------
  function buildLocationList(data) {
    data.features.forEach(function (store, i) {
      /**
       * Create a shortcut for `store.properties`,
       * which will be used several times below.
      **/
      var prop = store.properties;

      /* Add a new listing section to the sidebar. */
      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = "listing-" + prop.id;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';

      /* Add the link to the individual listing created above. */
      var link = listing.appendChild(document.createElement('a'));
      link.href = "/locations/" + prop.slug;
      link.className = 'title';
      link.id = "link-" + prop.id;
      link.innerHTML = prop.address;

      /* Add details to the individual listing. */
      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.city + ", " + prop.state;
      if (prop.phone) {
        details.innerHTML += ' · ' + prop.phone;
      }
      if (prop.distance) {
        var roundedDistance = Math.round(prop.distance*100)/100;
        details.innerHTML += '<p><strong>' + roundedDistance + ' miles away</strong></p>';
      }

      /**
           * Listen to the element and when it is clicked, do four things:
           * 1. Update the `currentFeature` to the store associated with the clicked link
           * 2. Fly to the point
           * 3. Close all other popups and display popup for clicked store
           * 4. Highlight listing in sidebar (and remove highlight for all other listings)
          **/
         link.addEventListener('click', function(e){
          for (var i=0; i < data.features.length; i++) {
            if (this.id === "link-" + data.features[i].properties.id) {
              var clickedListing = data.features[i];
              flyToStore(clickedListing);
              createPopUp(clickedListing);
            }
          }
          var activeItem = document.getElementsByClassName('active');
          if (activeItem[0]) {
            activeItem[0].classList.remove('active');
          }
          this.parentNode.classList.add('active');
        });
      });
    }

    /**
     * Use Mapbox GL JS's `flyTo` to move the camera smoothly
     * a given center point.
    **/
    function flyToStore(currentFeature) {
      map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15
        });
    }

    /**
     * Create a Mapbox GL JS `Popup`.
    **/
    function createPopUp(currentFeature) {
      var popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();

      var popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
          '<h4>' + currentFeature.properties.address + '</h4>')
        .addTo(map);
    }

    // --------- TOKEN MUST BE SET IN GATSBY-CONFIG SITEMETA -------------
    mapboxgl.accessToken = mapbox_api_key

    const map = new mapboxgl.Map({
      container: map_node.current,
      style: `mapbox://styles/denhamrogers33/cka46op5t13kc1jl9bhaf7her`,
      center: center,
      zoom: zoom,
    })
    map_ref.current = map
    map_ref.current = map

    map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

    // --------- LIMITS SEARCH RESULTS TO U.S.A. -------------
    // var geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   // limit results to Australia
    //   countries: 'us',
    //   mapboxgl: mapboxgl
    // });

    // document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: true, // Use the geocoder's default marker style
      countries: 'us' // Set the bounding box coordinates
    });
    
    map.addControl(geocoder, 'top-left');

    map.on("load", () => {
    



      // --------- ADDS GET CURRENT LOCATION BUTTON -------------
      var geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      });
      // Add the control to the map.
      map.addControl(geolocate);
      // Set an event listener that fires
      // when a geolocate event occurs.
      geolocate.on('geolocate', function () {
      });


      // --------- NEW WAY OF DOING THINGS -------------
      let geolocations = {}
      geolocations.type = "FeatureCollection";

      // --------- TRANSFORMING DATA FROM AIRTABLE TO CONVERT INTO GEOJSON -------------
      let locations = plane_img.allAirtable.edges
        .map((location, key) => {
          if (location.node.data.Latidtude && location.node.data.Longitude) {
            return {
              latitude: Number(location.node.data.Latidtude),
              longitude: Number(location.node.data.Longitude),
              city: location.node.data.City,
              state: location.node.data.State,
              address: location.node.data.Street_Address,
              name: location.node.data.Store_Name,
              zip: location.node.data.Zip,
              phone: location.node.data.Phone,
              slug: location.node.data.Slug,
              id: key
            }
          } else {
            return null
          }
        })
        .filter(location => location)

      let productMarkers = GeoJSON.parse(locations, { Point: ['latitude', 'longitude'], include: ['city', 'state', 'address', 'name', 'zip', 'phone', 'id', 'slug'] });




      map.loadImage(plane_img.image.childImageSharp.fluid.base64, function (
        error,
        image
      ) {
        if (error) throw error
        map.addImage("plane", image)

        map.addSource("planes-data", {
        	type: "geojson",
        	data: productMarkers,
        })

        // map.addLayer({
        //   id: "planes-flying",
        //   type: "symbol",
        //   source: "planes-data",
        //   layout: {
        //     "icon-image": "plane",
        //     "icon-size": 2,
        //     "icon-allow-overlap": true,
        //   },
        // })

        

        // map.addSource("point", {
        //   type: "geojson",
        //   data: {
        //     type: "FeatureCollection",
        //     features: [
        //       {
        //         type: "Feature",
        //         geometry: {
        //           type: "Point",
        //           coordinates: [0, 0],
        //         },
        //       },
        //     ],
        //   },
        // })
        // map.addLayer({
        //   id: "points",
        //   type: "symbol",
        //   source: "point",
        //   layout: {
        //     "icon-image": "cat",
        //     "icon-size": 0.25,
        //   },
        // })
      })

      const trace = gjv.isFeatureCollection(productMarkers, true)


      // --------- ADDS LOCATION LISTINGS TO SIDEBAR -------------
	  buildLocationList(productMarkers);
	  addMarkers();

      geocoder.on('result', function (ev) {
        var searchResult = ev.result.geometry;
        // Code for the next step will go here
        var options = { units: 'miles' };
        productMarkers.features.forEach(function (store) {
          Object.defineProperty(store.properties, 'distance', {
            value: distance(searchResult, store.geometry, options),
            writable: true,
            enumerable: true,
            configurable: true
          });
        });

        productMarkers.features.sort(function(a, b) {
          if (a.properties.distance > b.properties.distance) {
            return 1;
          }
          if (a.properties.distance < b.properties.distance) {
            return -1;
          }
          return 0; // a must be equal to b
        });

        /**
           * Rebuild the listings:
           * Remove the existing listings and build the location
           * list again using the newly sorted stores.
          */
         var listings = document.getElementById('listings');
         while (listings.firstChild) {
           listings.removeChild(listings.firstChild);
         }
         buildLocationList(productMarkers);

         /** Highlight the listing for the closest store. */
         var activeListing = document.getElementById('listing-' + productMarkers.features[0].properties.id);
         activeListing.classList.add('active');

         /**
          * Adjust the map camera:
          * Get a bbox that contains both the geocoder result and
          * the closest store. Fit the bounds to that bbox.
         */
         var bbox = getBbox(productMarkers, 0, searchResult);
         map.fitBounds(bbox, {
           padding: 100
         });
      });


        /**
       * Using the coordinates (lng, lat) for
       * (1) the search result and
       * (2) the closest store
       * construct a bbox that will contain both points
      */
     function getBbox(sortedStores, storeIdentifier, searchResult) {
      var lats = [sortedStores.features[storeIdentifier].geometry.coordinates[1], searchResult.coordinates[1]]
      var lons = [sortedStores.features[storeIdentifier].geometry.coordinates[0], searchResult.coordinates[0]]
      var sortedLons = lons.sort(function(a,b){
          if (a > b) { return 1; }
          if (a.distance < b.distance) { return -1; }
          return 0;
        });
      var sortedLats = lats.sort(function(a,b){
          if (a > b) { return 1; }
          if (a.distance < b.distance) { return -1; }
          return 0;
        });
      return [
        [sortedLons[0], sortedLats[0]],
        [sortedLons[1], sortedLats[1]]
      ];
	}

	/**
       * Add a marker to the map for every store listing.
      **/
	 function addMarkers() {
        /* For each feature in the GeoJSON object above: */
        productMarkers.features.forEach(function(marker) {
          /* Create a div element for the marker. */
          var el = document.createElement('div');
          /* Assign a unique `id` to the marker. */
          el.id = "marker-" + marker.properties.id;
          /* Assign the `marker` class to each marker for styling. */
          el.className = 'marker';

          /**
           * Create a marker using the div element
           * defined above and add it to the map.
          **/
          new mapboxgl.Marker(el, {offset: [0, -23]})
          .setLngLat(marker.geometry.coordinates)
          .addTo(map);

          /**
           * Listen to the element and when it is clicked, do three things:
           * 1. Fly to the point
           * 2. Close all other popups and display popup for clicked store
           * 3. Highlight listing in sidebar (and remove highlight for all other listings)
          **/
          el.addEventListener('click', function(e){
            flyToStore(marker);
            createPopUp(marker);
            var activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + marker.properties.id);
            listing.classList.add('active');
          });
        });
	  }
	  /**
       * Use Mapbox GL JS's `flyTo` to move the camera smoothly
       * a given center point.
      **/
	 function flyToStore(currentFeature) {
        map.flyTo({
            center: currentFeature.geometry.coordinates,
            zoom: 15
          });
	  }
	   /**
       * Create a Mapbox GL JS `Popup`.
      **/
	 function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();

        var popup = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
            '<h4>' + currentFeature.properties.address + '</h4>')
          .addTo(map);
      }


    })

    return () => {
      map.remove()
    }
  })

  return (
    <div
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      {/* <div id="geocoder" className="geocoder"></div> */}
      <div className="mapWrapper">
        <div className='sidebar pad2'>
          <div class='sidebar'>
            <div class='heading'>
              <h1 className="header">Our locations</h1>
            </div>
            <div id='listings' class='listings'></div>
          </div>
        </div>
        <div className="map pad2" id="map" ref={map_node}></div>
      </div>
    </div>
  )
}

Map.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
}

Map.defaultProps = {
  center: [133.7751, -25.2744],
  zoom: 4,
}

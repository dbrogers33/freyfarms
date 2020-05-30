import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import mapboxgl from "mapbox-gl"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import { useStaticQuery, graphql } from "gatsby"
import GeoJSON from "geojson"
import gjv from "geojson-validation"

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
            }
          }
        }
      }
    }
  `)
  console.log("plane_img ", plane_img)
  console.log("plane_img ", plane_img.image.childImageSharp.fluid.base64)

  
  // --------- MAPS LOCATIONS AND ADDS TO SIDEBAR -------------
  function buildLocationList(data) {
    data.features.forEach(function(store, i){
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
      link.href = '#';
      link.className = 'title';
      link.id = "link-" + prop.id;
      link.innerHTML = prop.address;
  
      /* Add details to the individual listing. */
      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.city;
      if (prop.phone) {
        details.innerHTML += ' · ' + prop.phone;
      }
    });
  }

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
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      // limit results to Australia
      countries: 'us',
      mapboxgl: mapboxgl
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

    map.on("load", () => {
      console.log("map onload")

      

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
        console.log('A geolocate event has occurred.')
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
              id: key
            }
          } else {
            return null
          }
        })
        .filter(location => location)

      let productMarkers = GeoJSON.parse(locations, { Point: ['latitude', 'longitude'], include: ['city', 'state', 'address', 'name', 'zip', 'phone', 'id'] });

      console.log(productMarkers)


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

        map.addLayer({
          id: "planes-flying",
          type: "symbol",
          source: "planes-data",
          layout: {
            "icon-image": "plane",
            "icon-size": 2,
            "icon-allow-overlap": true,
          },
        })




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
      console.log(trace)

      // --------- ADDS LOCATION LISTINGS TO SIDEBAR -------------
      buildLocationList(productMarkers);

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
      <div id="geocoder" className="geocoder"></div>
      <div className="mapWrapper">
        <div className='sidebar pad2'>
          <div class='sidebar'>
            <div class='heading'>
              <h1>Our locations</h1>
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

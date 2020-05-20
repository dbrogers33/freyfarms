import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import mapboxgl from "mapbox-gl"
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
              lat
              lon
              title
              description
              type
              features_type
              Is_hidden
            }
          }
        }
      }
    }
  `)
  console.log("plane_img ", plane_img)
  console.log("plane_img ", plane_img.image.childImageSharp.fluid.base64)

  // console.log(plane_img.allAirtable.edges)

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

    // Token must be set before constructing map
    mapboxgl.accessToken = mapbox_api_key

    const map = new mapboxgl.Map({
      container: map_node.current,
      style: `mapbox://styles/denhamrogers33/cka46op5t13kc1jl9bhaf7her`,
      center: center,
      zoom: zoom,
    })
    map_ref.current = map
    map_ref.current = map

    map.addControl(new mapboxgl.NavigationControl(), "bottom-left")

    map.on("load", () => {
      console.log("map onload")

      // Initialize the geolocate control.
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
      geolocate.on('geolocate', function() {
        console.log('A geolocate event has occurred.')
      });


      // --------- NEW WAY OF DOING THINGS -------------
      let geolocations = {}
      geolocations.type = "FeatureCollection";
      
      // storing graphql data from airtable
      let locations = plane_img.allAirtable.edges
      .map(location => {
        if (location.node.data.lat && location.node.data.lon) {
          return {
            latitude: Number(location.node.data.lon),
            longitude: Number(location.node.data.lat),
          }
        } else {
          return null
        }
      })
      .filter(location => location)
      // console.log("locations ", locations)

     let productMarkers = GeoJSON.parse(locations, {Point: ['latitude', 'longitude']});

      console.log(JSON.stringify(productMarkers))


      map.loadImage(plane_img.image.childImageSharp.fluid.base64, function(
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
    

    })

    return () => {
      map.remove()
    }
  })

  return (
    <div
      style={{
        background: `#343332`,
        marginBottom: `1.45rem`,
      }}
    >
      <div className="mapbox" ref={map_node}></div>
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

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  // actions.setWebpackConfig({
  //   node: { fs: "empty" },
  // })

  const config = {
    node: { fs: "empty" },
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  }

  // when building HTML, window is not defined, so Leaflet causes the build to blow up
  if (stage === "build-html") {
    config.module = {
      rules: [
        {
          test: /mapbox-gl/,
          use: loaders.null(),
        },
      ],
    }
  }

  actions.setWebpackConfig(config)
}

// Creating pages for each location out of airtable
exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions
  return new Promise(async resolve => {

    const result = await graphql(`
        {
        allAirtable {
          edges {
            node {
              recordId
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

    const products = await graphql(`
    {
      allContentfulBeverage {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
    `)
    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
    result.data.allAirtable.edges.forEach(({ node }) => {
      createPage({
        path: `/locations/${node.data.Slug}`,
        component: path.resolve(`./src/templates/location.js`),
        context: {
          recordId: node.recordId,
        },
      })
    });

    // For each path, create page and choose a template.
    // values in context Object are available in that page's query
    products.data.allContentfulBeverage.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.slug}/`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          slug: node.slug,
        },
      })
    });
    resolve()
  })
}
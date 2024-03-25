import React from "react"
import { graphql } from "gatsby"

// Needed for Store Locator
// import { Map } from '../components/map'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Our Products | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Find Sarah's Homegrown Products near you.." heroImage={data.hero.childImageSharp.fluid} />

    <Container>
        {/* <Map center={[-88.641331, 38.337483]} zoom={5}/> */}
    </Container>

  </Layout>

  
)


export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/location.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

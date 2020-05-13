import React from "react"
import styled from "styled-components";

// Needed for Store Locator
import { render } from 'react-dom'
import { Map }from '../components/map'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contianer from "../components/container"

import Hero from "../components/hero"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Our Products | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Find Sarah's Homegrown Products near you.." heroImage={data.hero.childImageSharp.fluid} />

    <Contianer>
        <Map center={[39.0742, 21.8243]} zoom={2}/>
    </Contianer>

  </Layout>

  
)


export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/products-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage

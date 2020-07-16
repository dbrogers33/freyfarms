import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Hero from "../components/hero"
import P from "../components/typography/p"
import { Link } from "gatsby";

import SideBySide from '../components/side-by-side-map'

export default ({ data }) => {

  return (
    <Layout>
      <Hero headline="Product page test" heroImage={data.hero.childImageSharp.fluid} />
      <SideBySide
        headerThree="Get Farm Fresh at..."
        headerTwo="Product Page TEst Flavorrrr"
      >
        <P>All Frey Farms <Link to="/products">products</Link> come fresh from the farm. You can find some of our items at</P>
      </SideBySide>
    </Layout>
  )
}

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/single-locations.png" }) { 
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}`
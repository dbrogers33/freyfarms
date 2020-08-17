import React from "react"
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Container from "../components/container"
import ValueSlider from "../components/reviews"

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Our Story | Frey Farms"
      description="Founded in 1992 by Sarah Frey, Frey Farms is a family business headquartered near Orchardville, Illinois. Sarah started the business as a simple produce delivery route that quickly grew, and her brothers soon came home to help her."
    />
    <Hero headline="Custom Bubbler Beverage Program" heroImage={data.hero.childImageSharp.fluid} />
    
    <Container>
        <P textAlign="center">We offer custom bubbler beverage solutions for our foodservice partners. Private label programs available.</P>
    </Container>

  </Layout>
)



export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/story-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  family: file(relativePath: { eq: "family.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  background: file(relativePath: { eq: "sarah-our-story.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  map: file(relativePath: { eq: "map.png" }) {
    childImageSharp {
      fluid(maxWidth: 850, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage

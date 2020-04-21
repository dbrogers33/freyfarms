import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import About from "../components/side-by-side-small"
import SideBySide from "../components/side-by-side"
import ValueSlider from "../components/reviews"
import Container from "../components/container"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Our Story" />
    <Hero headline="family farm future." heroImage={data.hero.childImageSharp.fluid} />
    <About
      headerThree="Our Farms"
      headerTwo="Who We Are"
      paragraph="Founded in 1992 by Sarah Frey, Frey Farms is a family business headquartered near Orchardville, Illinois. Sarah started the business as a simple produce delivery route that quickly grew, and her brothers soon came home to help her. Today, Frey Farms grow crops in seven states and distributes fresh beverages nationally. We are grounded in our family values and believe in creating opportunities for those living and working in rural communities. The Frey family is committed to farming with sustainable practices and in preserving natural resources for generations to come."
      src={data.family.childImageSharp.fluid}
      alt="Sarah Frey sitting in a pumpkin field"
    />
    
    <Values>
 
      <ValueWrapper>
        <ValueSlider />
      </ValueWrapper>

      <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          objectPosition='50% 100%'
          style={{ position: "absolute" }}
      />
    </Values>

    <SideBySide
      headerThree="Our Story"
      headerTwo="Sharing our love of the farm with you"
      paragraph="It is our vision to bring our love of the farm to all families. Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best. We hope you can kick back, relax and share in our love for delicious fruits and vegetables, Sarah’s Homegrown™ agua frescas, and Tsamma® watermelon juice."
      src={data.map.childImageSharp.fluid}
      alt="Sarah Frey sitting in a pumpkin field"
    />
  </Layout>
)

const Values = styled.div`
  position: relative;
  height: 80vh;
  @media (max-width: 899px) {
    margin-top: 28em;
    height: 60vh;
  }
`
const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`
const ValueWrapper = styled.div`  
  position: absolute;
  width: 70%;
  left: 50%;
  @media (max-width: 899px) {
    transform: translateX(-50%);
    top: -25em;
  }
  @media (min-width: 900px) {
      width: 90%;
      left: 40%;
      top: 10%;
      max-width: 600px;
    }
    @media (min-width: 1200px) {
      left: 55%;
    }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/story-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  family: file(relativePath: { eq: "family.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  background: file(relativePath: { eq: "sarah-our-story.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  map: file(relativePath: { eq: "map.png" }) {
    childImageSharp {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default IndexPage

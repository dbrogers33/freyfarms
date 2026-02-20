import React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Hero from "../../components/hero"
import SideBySide from "../../components/side-by-side"
import Button from "../../components/button"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Broccoli | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Broccoli" heroImage={data.hero.childImageSharp.fluid} />
    
    <Products>
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Broccoli"
        paragraph="Raw, steamed, or sautéed, our Florida grown broccoli is a nutrient powerhouse with versatile uses for any kitchen. With a wide range growing season, Frey is able to provide broccoli throughout the spring and fall seasons. We have a harvest, cooling, and shipping system that ensures quality freshness from our fields to your homes."
        src={data.sweetCorn.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      </SideBySide>
    </ProductWrapper>
    
    </Products>

  </Layout>

  
)

const Products = styled.div`
  
`

const ProductWrapper = styled.section`
  @media (min-width: 900px) {
    margin: 3em;
    box-shadow: 10px 4px 34px rgba(0, 0, 0, 0.15);
    & > .wrapper {
    
    }
  }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/broccoli-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  produce: file(relativePath: { eq: "products/produce.png" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  beverages: file(relativePath: { eq: "products/beverages.png" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  sweetCorn: file(relativePath: { eq: "products/broccoli.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
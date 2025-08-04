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
      title="Sweet Corn | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Sweet Corn" heroImage={data.hero.childImageSharp.fluid} />
    
    <Products>
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Bi-Color Sweet Corn"
        paragraph="We grow bi-color sweet corn in in Florida May through November. Bi-color corn has more flavor complexity due to the combination of colors. The sweetness and quality of our corn is directly related to the optimal timing of planting, harvesting and shipping, while maintaining a cool temperature. Frey ensures our corn moves quickly from the fields to our hydrocooler, and with very little time or heat exposure to retail distribution centers."
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
const ExternalLink = styled.a`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    color: #0F5800;
    font-weight: 800;
    font-size: 18px;
    margin: .1em 0;
    text-decoration: none;
    & :hover {
      text-decoration: underline;
    }
    @media (min-width: 800px) {
        font-size: 20px;
    }
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
  hero: file(relativePath: { eq: "hero-images/sweet-corn.JPG" }) {
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
  sweetCorn: file(relativePath: { eq: "products/sweet-corn.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
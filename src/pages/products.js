import React from "react"
import styled from "styled-components";

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import SideBySide from "../components/side-by-side"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Our Products | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="sharing our love of the farm with you." heroImage={data.hero.childImageSharp.fluid} />
    
    <Products>
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerThree="Sarah's Homegrown"
        headerTwo="Produce"
        paragraph="From the very beginning, Frey Farms was focused on growing the best fruit and vegetables to distribute across the country. After 25 years in business, The Frey family still bases its business on produce, serving the nation’s largest retailers."
        src={data.produce.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      />
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide
        headerThree="Sarah's Homegrown"
        headerTwo="Beverages"
        paragraph="Sarah's Homegrown™ is an innovative line of fresh beverages, sourced from the farm. Available in agua frescas, teas, and lemonades, Sarah's Homegrown™ bottles up farm fresh goodness. Our delicious flavors include Strawberry Lemonade, Mango, Watermelon, Lime Mint, and Pineapple Coconut."
        src={data.beverages.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      />
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerThree="Tsamma"
        headerTwo="Watermelon Juice"
        paragraph="Watermelon has been a source of natural, refreshing hydration for thousands of years. At Frey Farms we are committed to the growth and science of watermelon,
        and to the best practices to create leading watermelon products. Each bottle of Tsamma® has the taste of a juicy watermelon and is packed with immune boosting nutrients. Citrulline is naturally found in watermelon and improves blood flow, allowing your body to absorb nutrients and hydrate faster."
        src={data.tsamma.childImageSharp.fluid}
        alt="Sarah's Homegrown Produce'"
      >
      <ExternalLink href="http://tsammajuice.com" target="_blank">Visit TsammaJuice.com</ExternalLink>
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
  hero: file(relativePath: { eq: "hero-images/products-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  produce: file(relativePath: { eq: "products/produce.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  beverages: file(relativePath: { eq: "products/beverages.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  tsamma: file(relativePath: { eq: "products/tsamma.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage

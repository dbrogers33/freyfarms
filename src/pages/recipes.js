import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

// Layout components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SideBySide from "../components/side-by-side-new"
import Button from "../components/button"

// Typography
import H2 from "../components/typography/h2"
import P from "../components/typography/p"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Recipes | Frey Farms | Sarah's Homegrown and Tsamma Juice"
      description="Whether it is one of our farm grown pumpkins, watermelons, or one of our beverages juiced from our produce, we want you to enjoy the very best."
    />
    <Hero headline="Recipes" heroImage={data.hero.childImageSharp.fluid} />
    
    <Products>
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo={<H2>Buckskin Soup</H2>}
        paragraph={<P>A traditional Native American soup made with Frey Farms watermelon rind, corn, beans, and squash. This hearty soup is perfect for chilly days and is a great way to use up leftover watermelon rind.</P>}
        src={data.seedlessAndSeeded.childImageSharp.fluid}
        alt="Seedless and Seeded Watermelons'"
      >
        <Button
          link="/recipes/buckskin-soup"
          buttonLabel="View Recipe"
        />
      </SideBySide>
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Yellow Meat"
        paragraph="The growing season and regions for yellow meat melons are the same as our red seeded and seedless. Yellow meat melons have a crisp and juicy texture, same as red flesh. The obvious difference is the yellow flesh but the flavor also tends to be a little sweeter, often described with a honey-like sweetness. Yellow watermelons contain beta carotene while red melons contain lycopene."
        src={data.yellowMelons.childImageSharp.fluid}
        alt="Yellow Meat Watermelons"
      >
      </SideBySide>
    </ProductWrapper>
    
    <ProductWrapper>
      <SideBySide reverse="row-reverse"
        headerTwo="Melon Babies"
        paragraph="We introduced Melon Babies ® in 2002 as a convenient alternative to larger, seedless and seeded melons. Packed with sweet flavor, great for snacking, travel and smaller households."
        src={data.melonBabies.childImageSharp.fluid}
        alt="Melon Babies"
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
  hero: file(relativePath: { eq: "hero-images/recipe-hero.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
  seedlessAndSeeded: file(relativePath: { eq: "products/seedless-and-seeded.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  yellowMelons: file(relativePath: { eq: "products/yellow-melons.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  melonBabies: file(relativePath: { eq: "products/melon-babies.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 750, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage
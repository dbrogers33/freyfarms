import React from "react"
import styled from "styled-components";
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import P from '../components/typography/p'

import Hero from "../components/hero"
import SideBySide from "../components/side-by-side-new"
import Button from "../components/button"

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
        paragraph={`<h3>Ingredients</h3>
<ul>
  <li>One medium to large buckskin pumpkin</li>
  <li>1 tbsp olive oil</li>
  <li>4 cups chicken broth</li>
  <li>½ cup heavy cream</li>
  <li>2 tbsp butter</li>
  <li>Salt &amp; pepper to taste</li>
  <li>¼ tsp cumin</li>
  <li>Dollop of sour cream for topping</li>
</ul>

<h3>Directions</h3>
<ol>
  <li>Preheat oven to 350° F.</li>
  <li>Wash buckskin pumpkin and cut into fourths.</li>
  <li>Remove all seeds and stringy flesh.</li>
  <li>Spray or brush with oil of choice (olive, avocado, coconut, etc.).</li>
  <li>Place pumpkin quarters face down on a baking sheet and bake for 60–70 minutes.
    <ul>
      <li>Use a toothpick or fork to test skin tenderness.</li>
    </ul>
  </li>
  <li>Remove meat from the skin.</li>
  <li>Purée in a food processor and set aside.</li>
  <li>Melt butter in a large pot over medium-high heat.</li>
  <li>Add chicken broth, cumin, salt, and pepper. Mix well.</li>
  <li>Stir in pumpkin purée and heavy cream. Reduce heat to medium-low. Simmer, uncovered, for ~30 minutes, stirring occasionally.</li>
  <li>Ladle soup into bowls and garnish with a dollop of sour cream.</li>
</ol>
`}
        src={data.seedlessAndSeeded.childImageSharp.fluid}
        alt="Seedless and Seeded Watermelons'"
      >
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
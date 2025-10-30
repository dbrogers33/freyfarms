import React from "react"
import styled from "styled-components";
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import H2 from "../../components/typography/h2"
import P from "../../components/typography/p"

import Hero from "../../components/hero"
import Container from "../../components/container"

const IndexPage  = ({ data }) => (
  <Layout>
    <SEO 
      title="Buckskin Soup Recipe | Frey Farms"
      description="A delicious recipe for Buckskin Soup made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Buckskin Soup" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
      <H2>Ingredients</H2>
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

        <H2>Directions</H2>
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
      </Article>
    </Container>

  </Layout>
)

const Article = styled.div`
  padding: 2em 0;
`
const StyledLink = styled.a`
  display: inline;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: black;
  }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/news-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

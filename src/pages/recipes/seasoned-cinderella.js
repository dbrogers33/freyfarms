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
      title="Seasoned Cinderella Recipe | Frey Farms"
      description="A delicious recipe for Seasoned Cinderella made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Seasoned Cinderella" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
       <H2>Ingredients</H2>
  <ul>
    <li>1 small Cinderella pumpkin</li>
    <li>2 Tbsp butter (melted)</li>
    <li>½ tsp salt</li>
    <li>½ tsp pepper</li>
    <li>1 Tbsp paprika</li>
    <li>1 tsp cumin</li>
    <li>½ of 1 onion (preferably Vidalia or yellow)</li>
    <li>1 clove of garlic</li>
    <li>Herb of choice for garnish (sage recommended)</li>
  </ul>

  <H2>Directions</H2>
    <ol>
        <li>Wash the Cinderella pumpkin and remove all seeds and stringy flesh.</li>
        <li>Cut pumpkin into small cubes, approximately 1–2 inches in size.</li>
        <li>Dice ½ of an onion and 1 clove of garlic. Sauté in a medium-sized pan over medium heat until browned and caramelized.</li>
        <li>Toss pumpkin cubes in melted butter.</li>
        <li>In a small bowl, combine salt, pepper, paprika, and cumin. Mix with a fork or whisk, then add to the pumpkin cubes.</li>
        <li>Toss together the onions, garlic, and seasoned pumpkin cubes until evenly coated.</li>
        <li>Garnish with your choice of fresh herbs (sage recommended). Serve and enjoy!</li>
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

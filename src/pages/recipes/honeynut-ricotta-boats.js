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
      title="Honeynut Ricotta Boats Recipe | Frey Farms"
      description="A delicious recipe for Honeynut Ricotta Boats made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Honeynut Ricotta Boats" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
       <H2>Ingredients</H2>
  <ul>
    <li>4 Honeynut squash</li>
    <li>2 cups ricotta cheese</li>
    <li>2 tsp paprika</li>
    <li>2 tsp garlic powder</li>
    <li>2 tsp onion powder</li>
    <li>2 Tbsp green onions (thinly sliced)</li>
    <li>Walnuts (chopped) for garnish</li>
    <li>½ tsp cinnamon</li>
    <li>1 Tbsp olive oil or oil of your choice</li>
    <li>Salt and pepper to taste</li>
  </ul>

  <H2>Directions</H2>
 <ol>
    <li>Preheat oven to 425° F.</li>
    <li>Wash Honeynut squash and slice in half.</li>
    <li>Remove all seeds and stringy flesh from the bowl of the squash.</li>
    <li>Brush or spray oil of choice onto the flesh side of the squash and lightly dust with cinnamon.</li>
    <li>Place the eight squash halves face side down on a baking sheet; bake for approximately 20 minutes.</li>
    <li>Combine ricotta cheese, paprika, garlic powder, onion powder, and green onions in a bowl.</li>
    <li>Add salt and pepper to taste if desired.</li>
    <li>Remove squash from oven, flip, and fill each with the ricotta mixture.</li>
    <li>Place back in the oven for 5–10 minutes until cheese mixture is warmed through.</li>
    <li>Top with walnuts, serve, and enjoy!</li>
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
  hero: file(relativePath: { eq: "hero-images/recipes/feta-boat.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

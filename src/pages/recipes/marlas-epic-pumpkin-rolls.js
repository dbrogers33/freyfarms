import React from "react"
import styled from "styled-components";
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import H2 from "../../components/typography/h2"
import H3 from "../../components/typography/h3"
import P from "../../components/typography/p"

import Hero from "../../components/hero"
import Container from "../../components/container"

const IndexPage  = ({ data }) => (
  <Layout>
    <SEO 
      title="Marla's Epic Pumpkin Rolls Recipe | Frey Farms"
      description="A delicious recipe for Marla's Epic Pumpkin Rolls made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Marla's Epic Pumpkin Rolls" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
       <H2>Ingredients</H2>
    <H3>Bread</H3>
     <ul>
        <li>1 package yeast</li>
        <li>1 ½ cups warm water</li>
        <li>1/3 cup sugar</li>
        <li>1 tsp salt</li>
        <li>½ cup milk</li>
        <li>1 egg</li>
        <li>5 ½ – 6 cups bread flour</li>
        <li>¼ cup butter (softened)</li>
        <li>1 cup pumpkin puree</li>
    </ul>

    <H3>Filling</H3>
     <ul>
        <li>½ cup softened butter</li>
        <li>1 cup pumpkin puree</li>
        <li>1 cup sugar</li>
        <li>2 Tbsp pumpkin pie spices or cinnamon</li>
    </ul>

    <H3>Icing</H3>
     <ul>
        <li>1 lb powdered sugar</li>
        <li>1 tsp vanilla extract</li>
        <li>3 Tbsp water</li>
    </ul>


  <H2>Directions</H2>
  <H3>Bread</H3>
    <ol>
        <li>Combine yeast, water, sugar, salt, milk, and egg. Mix well.</li>
        <li>Add bread flour, butter, and pumpkin puree.</li>
        <li>Add more flour if needed, but no more than 1 cup.</li>
        <li>Knead on a floured board, then let rise for about 1 hour.</li>
        <li>Roll out into a ¼-inch thick rectangle.</li>
    </ol>

    <H3>Filling</H3>
    <ol>
        <li>Add 1 cup pumpkin puree to 1 cup sugar.</li>
        <li>Add pumpkin pie spice or cinnamon.</li>
        <li>Mix well.</li>
    </ol>

    <H3>Icing</H3>
    <ol>
        <li>Combine powdered sugar, vanilla, and water.</li>
        <li>Mix well until no lumps remain.</li>
        <li>Slowly continue to add water until icing reaches desired consistency.</li>
    </ol>

     <H3>Baking</H3>
    <ol>
        <li>Preheat oven to 350° F.</li>
        <li>Spread ½ cup melted butter on rolled-out dough.</li>
        <li>Spread pumpkin mixture over buttered dough.</li>
        <li>Roll tightly, then cut into 1 ½-inch thick slices and place into a 9-inch round, greased pan.</li>
        <li>Cover with plastic wrap and allow them to rise for 30 minutes.</li>
        <li>Bake for 25 minutes or until golden brown.</li>
        <li>Ice rolls as soon as they come out of the oven.</li>
        <li>Allow to sit and cool for 5–10 minutes before serving.</li>
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
  hero: file(relativePath: { eq: "hero-images/recipes/pumpkin-rolls.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

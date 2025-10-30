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
      title="Fairytale Stuffing Recipe | Frey Farms"
      description="A delicious recipe for Fairytale Stuffing made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Fairytale Stuffing" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
       <H2>Ingredients</H2>
  <ul>
    <li>1 Cinderella pumpkin</li>
    <li>Olive oil (or oil of choice)</li>
    <li>&frac34; cup water</li>
    <li>&frac34; cup chicken broth</li>
    <li>&frac14; cup butter</li>
    <li>1 box StoveTop stuffing mix</li>
  </ul>

  <H2>Directions</H2>
  <ol>
    <li>Preheat oven to 350&deg; F.</li>
    <li>Wash the Cinderella pumpkin and remove all seeds and stringy flesh.</li>
    <li>Cut pumpkin into small pieces (about quarter- to nickel-sized).</li>
    <li>Brush or spray pumpkin pieces with oil of choice (olive, avocado, coconut, etc.).</li>
    <li>Bake the pumpkin pieces for 30&ndash;45 minutes, until fork-tender.</li>
    <li>Prepare the StoveTop stuffing according to package directions, but substitute the liquid with <strong>&frac34; cup water + &frac34; cup chicken broth</strong> (total 1&frac12; cups).</li>
    <li>Fluff the cooked stuffing with a fork, then gently fold in the roasted pumpkin pieces.</li>
    <li>Serve and enjoy!</li>
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

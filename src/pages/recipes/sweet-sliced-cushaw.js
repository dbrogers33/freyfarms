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
      title="Sweet Sliced Cushaw Recipe | Frey Farms"
      description="A delicious recipe for Sweet Sliced Cushaw made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Sweet Sliced Cushaw" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
       <H2>Ingredients</H2>
  <ul>
    <li>1 medium-sized cushaw</li>
    <li>2 Tbsp butter (melted)</li>
    <li>¾ cup brown sugar</li>
    <li>2 tsp cinnamon</li>
  </ul>

  <H2>Directions</H2>
<ol>
    <li>Preheat oven to 400° F.</li>
    <li>Wash the cushaw squash thoroughly.</li>
    <li>Cut the neck of the squash into two pieces, then cut the bell of the squash in half and remove all seeds and stringy flesh.</li>
    <li>Slice the squash into uniform slices of your desired thickness and place them on a baking sheet.</li>
    <li>Combine brown sugar and cinnamon in a bowl and set aside.</li>
    <li>Melt butter, then brush onto the cushaw slices.</li>
    <li>Sprinkle the brown sugar and cinnamon mixture evenly over the slices.</li>
    <li>Bake for 50–60 minutes or until fork-tender and lightly caramelized.</li>
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

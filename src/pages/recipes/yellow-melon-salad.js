import React from "react"
import styled from "styled-components";
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import H2 from "../../components/typography/h2"
import P from "../../components/typography/p"

import Hero from "../../components/hero"
import Container from "../../components/container"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Yellow Melon Salad Recipe | Frey Farms"
      description="A fresh and simple Yellow Melon Salad with cubed yellow watermelon, Persian cucumbers, feta, basil, and mint."
    />
    <Hero headline="Yellow Melon Salad" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
        <H2>Ingredients</H2>
        <ul>
          <li>Cubed yellow watermelon</li>
          <li>Sliced Persian cucumbers</li>
          <li>Crumbled feta</li>
          <li>Fresh basil and mint</li>
        </ul>

        <H2>Instructions</H2>
        <ol>
          <li>Toss together the yellow watermelon, sliced Persian cucumbers, crumbled feta, and fresh basil and mint.</li>
          <li>Serve immediately and enjoy.</li>
        </ol>
      </Article>
    </Container>
  </Layout>
)

const Article = styled.div`
  padding: 2em 0;
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "recipes/yellow-melon-salad/melon-salad-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

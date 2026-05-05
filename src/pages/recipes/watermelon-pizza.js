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
      title="Watermelon Pizza Recipe | Frey Farms"
      description="A fun and refreshing Watermelon Pizza topped with small, diced watermelon."
    />
    <Hero headline="Watermelon Pizza" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
        <H2>Instructions</H2>
        <ol>
          <li>Add small, diced watermelon to pizza.</li>
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
  hero: file(relativePath: { eq: "recipes/watermelon-pizza/watermelon-pizza-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

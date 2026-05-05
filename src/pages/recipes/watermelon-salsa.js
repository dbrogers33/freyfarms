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
      title="Watermelon Salsa Recipe | Frey Farms"
      description="A refreshing Watermelon Salsa with diced watermelon, cherry tomatoes, sweet onion, basil, olive oil, and balsamic vinegar."
    />
    <Hero headline="Watermelon Salsa" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
        <H2>Ingredients</H2>
        <ul>
          <li>2 cups diced watermelon</li>
          <li>1 cup cherry tomatoes, quartered</li>
          <li>1/4 small sweet onion, chopped</li>
          <li>2 tablespoons chopped basil</li>
          <li>1 teaspoon olive oil</li>
          <li>1 teaspoon balsamic vinegar</li>
          <li>1/8 teaspoon salt</li>
        </ul>

        <H2>Instructions</H2>
        <ol>
          <li>Grab your favorite large mixing bowl and add all of the ingredients together.</li>
          <li>Cover and refrigerate until you are ready to serve and enjoy.</li>
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
  hero: file(relativePath: { eq: "recipes/watermelon-salsa/watermelon-salsa-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

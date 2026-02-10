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
      title="Watermelon Feta & Sweet Corn Salad Recipe | Frey Farms"
      description="A refreshing recipe for Watermelon Feta & Sweet Corn Salad made with fresh ingredients from Frey Farms."
    />
    <Hero headline="Watermelon Feta & Sweet Corn Salad" heroImage={data.hero.childImageSharp.fluid} />

    <Container width="900px">
      <Article>
        <P><strong>Serves:</strong> 6-8</P>
        <P><strong>Prep time:</strong> 10 minutes</P>
        <P><strong>Cook time:</strong> 15 minutes</P>
        <P><strong>Total time:</strong> 25 minutes</P>

        <H2>Ingredients</H2>
        <ul>
          <li>6 cups cubed Sarah’s Homegrown watermelon</li>
          <li>2 ears of Sarah’s Homegrown sweet corn</li>
          <li>4 oz crumbled feta cheese</li>
          <li>1/2 red onion, sliced</li>
          <li>3 sprigs of mint, torn</li>
          <li>1/4 cup lime juice</li>
          <li>1 clove of garlic, grated</li>
          <li>2 tbsp olive oil</li>
          <li>Salt</li>
        </ul>

        <H2>Instructions</H2>
        <ol>
          <li>On a medium grill, cook the corn, turning often, until it reaches desired color. Let cool.</li>
          <li>Once cool, slice the corn off the cob.</li>
          <li>In a large bowl, add the watermelon, corn, red onion, feta, and mint and toss together.</li>
          <li>In a small bowl, whisk together the lime juice, garlic, olive oil, and salt.</li>
          <li>Pour the lime juice mixture over the watermelon salad and toss to coat.</li>
          <li>Serve cold with more mint as a garnish if desired.</li>
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
  hero: file(relativePath: { eq: "hero-images/recipes/watermelon-feta.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage

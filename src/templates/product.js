import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";

import Layout from "../components/layout"
import Hero from "../components/hero"
import P from "../components/typography/p"
import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Container from '../components/container'

export default ({ data }) => {
  const ingredients = data.contentfulBeverage.ingredients.join(", ")
  return (
    <Layout>
      <Hero headline={data.contentfulBeverage.flavor} heroImage={data.contentfulBeverage.heroImage.localFile.childImageSharp.fluid} />

      <Container width="900px">

        <Section>
          <H3 textAlign="center">Taste the Best</H3>
          <H2 textAlign="center">{data.contentfulBeverage.headline.headline}</H2>
          <P textAlign="center">{data.contentfulBeverage.description.description}</P>
          <StyledLink to="/locations/">Where to Buy</StyledLink>
        </Section>

        <Section>
          <FlexBox>
            <Img fixed={data.sustainable.childImageSharp.fixed} />
            <Img fixed={data.gmo.childImageSharp.fixed} />
            <Img fixed={data.natural.childImageSharp.fixed} />
          </FlexBox>
        </Section>

        <Section>
          <H3 textAlign="center">Nutrition</H3>
          <FlexBox>
            <div>
              <H2 textAlign="center">Calories</H2>
              <Stat>{data.contentfulBeverage.calories}</Stat>
            </div>
            <div>
              <H2 textAlign="center">Carbs</H2>
              <Stat>{data.contentfulBeverage.carbs}g</Stat>
            </div>
            <div>
              <H2 textAlign="center">Sugars</H2>
              <Stat>{data.contentfulBeverage.sugar}g</Stat>
            </div>
          </FlexBox>
        </Section>

        <Section>
          <H3 textAlign="center">Ingredients</H3>
          <H2 textAlign="center">
            {ingredients}
          </H2>
        </Section>

      </Container>
    </Layout>
  )
}

const Section = styled.section`
  margin: 5em 0;
`

const StyledLink = styled(Link)`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    color: #0F5800;
    font-weight: 800;
    font-size: 18px;
    margin: .1em;
    text-decoration: none;
    text-align: center;
    display: block;
    & :hover {
      text-decoration: underline;
    }
    @media (min-width: 800px) {
        font-size: 20px;
    }
`

const FlexBox = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

const Stat = styled.p`
  font-family: 'Brandon Grotesque Regular';
  color: #707070;
  font-size: 80px;
  text-align: center;
  margin: .1em 0;
`

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    sustainable: file(relativePath: { eq: "icons/sustainable.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    gmo: file(relativePath: { eq: "icons/Non-GMO.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    natural: file(relativePath: { eq: "icons/All-Natural.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    hero: file(relativePath: { eq: "hero-images/single-locations.png" }) { 
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contentfulBeverage(slug: { eq: $slug }) {
      flavor
      carbs
      calories
      sugar
      ingredients
      description {
        description
      }
      headline {
        headline
      }
      ingredients
      slug
      heroImage {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`


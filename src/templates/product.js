import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from "styled-components";
import SEO from "../components/seo"

import Layout from "../components/layout"
import Hero from "../components/hero"
import P from "../components/typography/p"
import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import Img from "gatsby-image/withIEPolyfill"

import Container from '../components/container'

export default ({ data, pageContext }) => {

  const { next, prev } = pageContext

  console.log(next)

  const ingredients = data.contentfulBeverage.ingredients.join(", ")
  return (
    <Layout>

      <SEO
        title={data.contentfulBeverage.flavor + ' | Sarah\'s Homegrown | Frey Farms'}
        description={data.contentfulBeverage.description}
      />

      <Hero headline={data.contentfulBeverage.flavor} heroImage={data.contentfulBeverage.heroImage.localFile.childImageSharp.fluid} />

      <Container width="900px">

        <Section>
          <H3 textAlign="center">Taste the Best</H3>
          <H2 textAlign="center">{data.contentfulBeverage.headline.headline}</H2>
          {/* <P textAlign="center">{data.contentfulBeverage.description.description}</P> */}
          <LinkWrapper>
            <StyledLink to="/custom-bubbler-beverage-program/">Custom Bubbler Beverage Program</StyledLink>
          </LinkWrapper>
        </Section>

        <Section>
          <FlexBoxTwo>
            <Img fixed={data.sustainable.childImageSharp.fixed} />
            <Img fixed={data.gmo.childImageSharp.fixed} />
            <Img fixed={data.natural.childImageSharp.fixed} />
          </FlexBoxTwo>
        </Section>

        <Section>
          <H3 textAlign="center">Nutrition</H3>
          <Disclaimer>*Per 12oz Bottle</Disclaimer>
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

      <div>
        <FlexBox>
          {prev &&
            <FlexItem>
              <Link to={"/products/beverages/" + prev.slug}>
                <Absolute>
                  <H2 color="#fff">{prev.flavor}</H2>
                </Absolute>
                <Image
                  fluid={prev.heroImage.localFile.childImageSharp.fluid}
                  objectPosition='50% 50%'
                />
              </Link>
            </FlexItem>
          }
          {next &&
            <FlexItem>
              <Link to={"/products/beverages/" + next.slug}>
                <Absolute>
                  <H2 color="#fff">{next.flavor}</H2>
                </Absolute>
                <Image
                  fluid={next.heroImage.localFile.childImageSharp.fluid}
                  objectPosition='50% 50%'
                />
              </Link>
            </FlexItem>
          }
        </FlexBox>
      </div>

    </Layout>
  )
}

const Image = styled(Img)`
  height: 25em;
  position: absolute;
  transition: .2s ease;
  &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0,0,0,0.48923319327731096) 2%, rgba(255,255,255,0) 39%, rgba(255,255,255,0) 78%, rgba(0,0,0,0.23713235294117652) 100%);
  }
  &:hover {
    opacity: .6;
  }
`
const FlexItem = styled.div`
  position: relative;
  background: black;
  @media (min-width: 500px) {
    width: 50%;
  }
  
`

const Absolute = styled.div`
    position: absolute;
    color: white;
    bottom: 1em;
    margin-left: 1em;
    z-index: 10;
    @media (min-width: 800px) {
        bottom: 2em;
        margin-left: 3em;
        width: 40%;
    }
`

const Section = styled.section`
  margin: 5em 0;
`
const Disclaimer = styled.p`
    font-family: 'Brandon Grotesque Regular';
    font-size: 18px;
    text-align: center;
    font-display: auto;
    margin-top: .1em;
    color: #828282;
`
const LinkWrapper = styled.div`
  width: auto;
  text-align: center;
`

const StyledLink = styled(Link)`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    color: #0F5800;
    font-weight: 800;
    font-size: 18px;
    margin: .1em 1em;
    text-decoration: none;
    text-align: center;
    display: inline-block;
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
const FlexBoxTwo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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


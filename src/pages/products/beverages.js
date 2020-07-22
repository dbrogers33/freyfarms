import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";

import Layout from "../../components/layout"
import Hero from "../../components/hero"
import P from "../../components/typography/p"
import H2 from "../../components/typography/h2"
import H3 from "../../components/typography/h3"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Container from '../../components/container'
import { node } from 'prop-types';

export default ({ data }) => {
    const beverages = data.allContentfulBeverage.edges
    return (
        <Layout>
            <Hero headline="All the flavors" heroImage={data.hero.childImageSharp.fluid} />

            <Container>
                <Section>
                    <Grid>
                        {beverages.map((beverage, key) => (
                            <StyledLink to={'/products/beverages/' + beverage.node.slug}>
                                <BeverageItem key={key}>
                                    <Img fluid={beverage.node.studioImage.localFile.childImageSharp.fluid} />
                                    <Label>{beverage.node.flavor}</Label>
                                </BeverageItem>
                            </StyledLink>
                        ))}
                    </Grid>
                </Section>
            </Container>

        </Layout>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1em;
    row-gap: 1em;
    justify-items: stretch;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
const StyledLink = styled(Link)`
  & > p {
      color: green;
  }
`

const BeverageItem = styled.div`
    border: 1px solid #E5E5E5;
    transition: .2s ease;
    &:hover {
        color: #095129;
        cursor: pointer;
    }
`

const Section = styled.section`
    margin: 3em 0;
`

const Label = styled.p`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    padding: .25em .1em;
`

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "hero-images/single-locations.png" }) { 
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    allContentfulBeverage {
        edges {
          node {
            slug
            flavor
            studioImage {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
          }
        }
      }
  }
`


import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";

import Layout from "../../components/layout"
import Hero from "../../components/hero"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Container from '../../components/container'

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
    grid-auto-rows: 1fr; 
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    transition: .2s ease;
    p {
        color: #095129;
        text-decoration: none;
        margin: .5em;
    }
    &:hover {
        color: green;
        text-decoration: underline;
    }
`

const BeverageItem = styled.div`
    border: 1px solid #E5E5E5;
    &:hover {
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


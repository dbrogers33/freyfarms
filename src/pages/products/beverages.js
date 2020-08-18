import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components";
import SEO from "../../components/seo"

import Layout from "../../components/layout"
import Hero from "../../components/hero"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import H2 from "../../components/typography/h2"

import Container from '../../components/container'

export default ({ data }) => {
    const beverages = data.allContentfulBeverage.edges
    return (
        <Layout>
            <SEO
            title="Sarah's Homegrown Flavors | Frey Farms"
            description="Taste the refreshing flavors of Sarah's Homegrown aqua frescas, teas, and lemonade. Made with real fresh ingredients that come straight from our farms."
            />

            <Hero headline="Fresh from the Farm Beverages" heroImage={data.hero.childImageSharp.fluid} />

            <Container>
                <Section>
                    <H2>Aqua Frescas</H2>
                    <Category>
                        <Grid>
                            {beverages.filter(beverage => beverage.node.category === "Aqua Fresca").map((fresca) => (
                                <StyledLink to={'/products/beverages/' + fresca.node.slug}>
                                    <BeverageItem>
                                        <Img fluid={fresca.node.hoverImage.localFile.childImageSharp.fluid} />
                                        <Img className="coverimage" style={{ width: '100%', height: 'auto', position: 'absolute', top:'0' }} fluid={fresca.node.studioImage.localFile.childImageSharp.fluid} />
                                        <Label>{fresca.node.flavor}</Label>
                                    </BeverageItem>
                                </StyledLink>
                            ))}
                        </Grid>
                    </Category>

                    <Category>
                    <H2>Teas</H2>
                        <Grid>
                            {beverages.filter(beverage => beverage.node.category === "Teas").map((tea) => (
                                <StyledLink to={'/products/beverages/' + tea.node.slug}>
                                    <BeverageItem>
                                        <Img fluid={tea.node.hoverImage.localFile.childImageSharp.fluid} />
                                        <Img className="coverimage" style={{ width: '100%', height: 'auto', position: 'absolute', top:'0' }} fluid={tea.node.studioImage.localFile.childImageSharp.fluid} />
                                        <Label>{tea.node.flavor}</Label>
                                    </BeverageItem>
                                </StyledLink>
                            ))}
                        </Grid>
                    </Category>

                    <Category>
                    <H2>Lemonades</H2>
                        <Grid>
                            {beverages.filter(beverage => beverage.node.category === "Lemonades").map((lemonade) => (
                                <StyledLink to={'/products/beverages/' + lemonade.node.slug}>
                                    <BeverageItem>
                                        <Img fluid={lemonade.node.hoverImage.localFile.childImageSharp.fluid} />
                                        <Img className="coverimage" style={{ width: '100%', height: 'auto', position: 'absolute', top:'0' }} fluid={lemonade.node.studioImage.localFile.childImageSharp.fluid} />
                                        <Label>{lemonade.node.flavor}</Label>
                                    </BeverageItem>
                                </StyledLink>
                            ))}
                        </Grid>
                    </Category>
                </Section>
            </Container>

        </Layout>
    )
}


const Category = styled.div`
    margin: 2em 0;
`

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
    position: relative;
    
    p {
        color: #095129;
        text-decoration: none;
        margin: .5em;
    }
    &:hover {
        color: green;
        text-decoration: underline;
        .coverimage {
            opacity: 0;
            transition: .4s ease;
        }
    }
`

const BeverageItem = styled.div`
    border: 1px solid #E5E5E5;
    position: inline-block;
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
    hero: file(relativePath: { eq: "hero-images/beverages.png" }) { 
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
            category
            studioImage {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
            hoverImage {
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


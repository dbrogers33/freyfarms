import React from 'react'
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'

import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import P from '../components/typography/p'
import Img from "gatsby-image/withIEPolyfill"
import Container from "../components/container"

export default () => (
    <StaticQuery
      query={graphql`
        query {
            background: file(relativePath: { eq: "book-cover.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                }
            }
            amazon: file(relativePath: { eq: "book-preorder-logos/amazon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 150, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                }
            }
            walmart: file(relativePath: { eq: "book-preorder-logos/walmart.png" }) {
                childImageSharp {
                    fluid(maxWidth: 150, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                }
            }
            barnes: file(relativePath: { eq: "book-preorder-logos/barnes-and-noble.png" }) {
                childImageSharp {
                    fluid(maxWidth: 150, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                }
            }
            penguin: file(relativePath: { eq: "book-preorder-logos/penguin-random-house.png" }) {
                childImageSharp {
                    fluid(maxWidth: 150, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                }
            }
        }
      `}
      render={data => (
        <Container>
            <Wrapper>
                <FlexItem>
                <Image
                    fluid={data.background.childImageSharp.fluid}
                    alt="Cover of The Growing Season by Sarah Frey"
                />
                </FlexItem>
                <FlexItem>
                    <Copy>
                        <H3>Sarah's Book</H3>
                        <H2>Sharing our love of the farm with you.</H2>
                        <P>The youngest of 21 children, Sarah Frey grew up on a struggling farm in Southern Illinois. At 15, she started her own fresh produce delivery business out of an old pickup truck. Two years later she took over the family farm and started doing business with the largest grocery retailers in the country. Frey’s story is one of never giving up, negotiating with some of the biggest businesses in the nation and building a company which serves consumers with fresh, healthy products. Frey Farms is the nation’s leading producer of pumpkins,earning Frey the nickname “America’s Pumpkin Queen.”</P>

                    <PreOrderLinks>
                        <PreOrder href="https://www.walmart.com/ip/The-Growing-Season-How-I-Saved-an-American-Farm-and-Built-a-New-Life-9780593129395/375289573" target="_blank">
                            <Img
                                fluid={data.walmart.childImageSharp.fluid}
                            />
                        </PreOrder>
                        <PreOrder href="https://www.amazon.com/Growing-Season-Saved-American-Farm/dp/0593129393" target="_blank">
                            <Img
                                fluid={data.amazon.childImageSharp.fluid}
                            />
                        </PreOrder>
                        <PreOrder href="https://www.barnesandnoble.com/w/the-growing-season-sarah-frey/1133865222" target="_blank">
                            <Img
                                fluid={data.barnes.childImageSharp.fluid}
                            />
                        </PreOrder>
                        <PreOrder href="https://www.penguinrandomhouse.com/books/610559/the-growing-season-by-sarah-frey/" target="_blank">
                            <Img
                                fluid={data.penguin.childImageSharp.fluid}
                            />
                        </PreOrder>
                    </PreOrderLinks>

                    <ExternalButton href="https://thegrowingseason.green">Learn More</ExternalButton>
                    </Copy>
                </FlexItem>
               
            </Wrapper>
        </Container>

      )}
    />
  )


const Wrapper = styled.div`
    position: relative;
    margin: 4em 0;
    @media (min-width: 900px) {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
`
const Copy = styled.div`
    width: 90%;
    margin: 0 auto;
    @media (max-width: 900px) {
        margin: 2em auto;
    }
`
const Image = styled(Img)`

`
const FlexItem = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: calc(100% / 2);
    }
`
const PreOrderLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2em;
`

const PreOrder = styled.a`
    margin: .5em;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    opacity: 60%;
    transition: ease .2s;
    width: calc(100% / 2);
        & :hover {
        opacity: 100%;
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
    }
    
`
const ExternalButton = styled.a`
    border-radius: 5px;
    background: #095129;
    padding: 1em 2.25em;
    color: white;
    display: inline-block;
    font-family: 'Brandon Grotesque';
    text-transform: uppercase;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: .1em;
    text-align: ${props => props.textAlign};
    transition: .15s ease;
    font-weight: 500;
    &:hover {
        background: #292825;
        box-shadow: 0px 4px 7px rgba(33,32,30, .27);
        margin: -.1em 0 .1em 0;
    }
`


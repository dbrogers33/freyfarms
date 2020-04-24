import React from 'react'
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'

import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import P from '../components/typography/p'
import Img from "gatsby-image/withIEPolyfill"
import Container from "../components/container"
import Button from "../components/button"

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
                        <P>Sarah Frey has been described by the New York Times as “the Pumpkin Queen of America”. She sells more pumpkins than any other producer in the United States. Her family business, Frey Farms, plants thousands of acres of fruits and vegetables in Florida, Georgia, Missouri, Arkansas, Illinois, Indiana, and West Virginia. With a mission to end food waste in the fresh produce industry, the family makes natural food products and beverages from imperfect or “ugly fruit”. Inspired by her humble beginnings and early life on the farm, she continues to create opportunities for those living and working in rural communities. Frey lives in Southern Illinois and is raising her two sons, William and Luke, on the same family farm where she grew up.</P>
                        
                    
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

                    <Button as="a" href="https://thegrowingseason.green" buttonLabel="Learn More" />
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
    width: calc(100% / 2)
;    & :hover {
        opacity: 100%;
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
    }
    
`


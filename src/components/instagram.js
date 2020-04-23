import React from 'react'
import styled from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'

import H2 from '../components/typography/h2'
import Container from '../components/container'
import Img from "gatsby-image/withIEPolyfill"
import P from "../components/typography/p"

const Instagram = () => {
    const data = useStaticQuery(graphql`
        query {
            allInstaNode(limit: 8, filter: {mediaType: {eq: "GraphImage"}}) {
                edges {
                    node {
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                }
            }
        }
    `)

    const posts = data.allInstaNode.edges;

    return (
        <Container>
            <H2 textAlign="center">Follow Us @freyfarms</H2>
            <Grid>
            {posts.map((post, key) => (
                <div key={key}>
                    <a as="a" href="https://instagram.com/freyfarms" target="_blank" rel="noopener noreferrer">
                        <Card>
                            <Absolute>
                                <CenterText>
                                    <P color="#fff" textAlign="center">View on Instagram</P>
                                </CenterText>
                            </Absolute>
                            <Image
                                fluid={post.node.localFile.childImageSharp.fluid}
                                objectPosition='50% 100%'
                                alt="instagram image from @FreyFarms"
                            />
                        </Card>
                    </a>
                </div>
            ))}
            </Grid>
            
        </Container>
    )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    margin: 2em 0 5em 0;
    grid-auto-rows: 1fr;
    @media (min-width: 900px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`
const Card = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
`
const CenterText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
`
const Absolute = styled.div`
    position: absolute;
    z-index: 2;
    color: white;
    width: 100%;
    height: 100%;
    transition: ease .3s;
    background: rgba(0,0,0,0.6);
    opacity: 0;
    & :hover {
        opacity: 100%;
    }
`
const Image = styled(Img)`
    position: absolute;
    height: 100%;
`

export default Instagram
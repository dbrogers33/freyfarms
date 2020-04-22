import React from 'react'
import styled from "styled-components";
import { useStaticQuery, graphql } from 'gatsby'

import H2 from '../components/typography/h2'
import Container from '../components/container'
import HoverCard from '../components/hover-card'

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
            <H2 textAlign="center">Instagram</H2>
            <Grid>
            {posts.map((post, key) => (
                <div key={key}>
                    <HoverCard image={post.node.localFile.childImageSharp.fluid} />
                </div>
            ))}
            </Grid>
            
        </Container>
    )
}
const Grid = styled.div`
    display: grid;
    height: 500px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

export default Instagram
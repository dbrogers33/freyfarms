import React from 'react'
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'

import H2 from '../components/typography/h2'
import H3 from '../components/typography/h3'
import P from '../components/typography/p'
import Img from "gatsby-image/withIEPolyfill"


export default ({ headerThree, headerTwo, paragraph, alt, src, children }) => (
    <StaticQuery
      query={graphql`
        query {
            background: file(relativePath: { eq: "fruit-bg.png" }) {
                childImageSharp {
                  fluid(maxWidth: 1500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
      `}
      render={data => (

            <Wrapper>
                <ContainerFlex>
                <FlexItem>
                <Image
                    fluid={src}
                    alt={alt}
                />
                </FlexItem>
                <FlexItem>
                    <Copy>
                        <H3>{headerThree}</H3>
                        <H2>{headerTwo}</H2>
                        <P>{paragraph}</P>
                        {children}
                    </Copy>
                </FlexItem>
                </ContainerFlex>
                <BackgroundImage
                    fluid={data.background.childImageSharp.fluid}
                    objectPosition='50% 50%'
                    style={{ position: "absolute" }}
                />
            </Wrapper>

      )}
    />
  )


const Wrapper = styled.div`
    position: relative;
    padding: 4em 0;
`

const ContainerFlex = styled.div`
    margin: 0 auto;
    width: 90%;
    max-width: 90%;
    position: relative;
    @media (min-width: 900px) {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
`

const Copy = styled.div`
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    @media (max-width: 900px) {
        margin: 2em auto;
    }
`

const Image = styled(Img)`

`
const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`
const FlexItem = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: calc(100% / 2);
    }
`


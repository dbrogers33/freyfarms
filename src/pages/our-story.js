import React from "react"
import styled from "styled-components";
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import About from "../components/side-by-side-small"
import ValueSlider from "../components/reviews"

import H2 from "../components/typography/h2"
import H3 from "../components/typography/h3"
import P from "../components/typography/p"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO 
      title="Our Story | Frey Farms"
      description="Founded in 1992 by Sarah Frey, Frey Farms is a family business headquartered near Orchardville, Illinois. Sarah started the business as a simple produce delivery route that quickly grew, and her brothers soon came home to help her."
    />
    <Hero headline="family farm future." heroImage={data.hero.childImageSharp.fluid} />
    <About
      headerThree="Our Farms"
      headerTwo="Who We Are"
      paragraph="Founded in 1992 by Sarah Frey, Frey Farms is a family business headquartered near Orchardville, Illinois. Sarah started the business as a simple produce delivery route that quickly grew, and her brothers soon came home to help her. Today, Frey Farms grow crops in seven states and distributes fresh beverages nationally. We are grounded in our family values and believe in creating opportunities for those living and working in rural communities. The Frey family is committed to farming with sustainable practices and in preserving natural resources for generations to come."
      src={data.family.childImageSharp.fluid}
      alt="Sarah Frey sitting in a pumpkin field"
    />
    
    <Values>
 
      <ValueWrapper>
        <ValueSlider />
      </ValueWrapper>

      <BackgroundImage
          fluid={data.background.childImageSharp.fluid}
          objectPosition='50% 100%'
          style={{ position: "absolute" }}
      />
    </Values>

    <Map>
      <Wrapper className="wrapper">
            <FlexItem>
                <Copy>
                    <H3>Our Story</H3>
                    <H2>Sharing our love of the farm with you</H2>
                    <P>Today, we have farms and facilities across the U.S. and distribution partners who help us to get all of our produce and beverages straight from the farm, to you.</P>
                </Copy>
            </FlexItem>
            <FlexItem>
                <Image
                    fluid={data.map.childImageSharp.fluid}
                    alt="Map of Frey Farms distribution chain"
                />
            </FlexItem>
        </Wrapper>
    </Map>  
  </Layout>
)

const Wrapper = styled.div`
    position: relative;
    @media (min-width: 900px) {
        display: flex;
        align-items: center;
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
const FlexItem = styled.div`
    width: 100%;
    @media (min-width: 900px) {
        width: calc(100% / 2);
    }
`
const Map = styled.div`
  margin-top: 3em;
`
const Values = styled.div`
  position: relative;
  height: 80vh;
  @media (max-width: 899px) {
    margin-top: 25em;
    height: 40vh;
  }
`
const BackgroundImage = styled(Img)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
`
const ValueWrapper = styled.div`  
  position: absolute;
  width: 70%;
  left: 50%;
  @media (max-width: 899px) {
    transform: translateX(-50%);
    top: -20em;
  }
  @media (min-width: 900px) {
      width: 50%;
      left: 43%;
      top: 10%;
      max-width: 600px;
    }
    @media (min-width: 1200px) {
      left: 55%;
    }
`

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero-images/story-hero.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  family: file(relativePath: { eq: "family.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  background: file(relativePath: { eq: "sarah-our-story.png" }) {
    childImageSharp {
      fluid(maxWidth: 1500) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  map: file(relativePath: { eq: "map.png" }) {
    childImageSharp {
      fluid(maxWidth: 900) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default IndexPage

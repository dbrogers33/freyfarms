import React from 'react'
import styled from "styled-components";
import Headliner from "../components/typography/h1"
import Img from "gatsby-image/withIEPolyfill"

const HeroSection = ({ heroImage, headline, children }) => {
  return (
    <Hero>
      <Image
        fluid={heroImage}
        objectPosition="50% 50%"
      />
      <Absolute>
        <Tagline color="#fff">{headline}</Tagline>
        {children && (
          <ContentBelowHeadline>
            {children}
          </ContentBelowHeadline>
        )}
      </Absolute>
    </Hero>
  );
};

// Checkout macbook sizing
const Hero = styled.section`
  position: relative;
  height: 100vh;            /* fixed height on desktop */
  overflow: hidden;

  @media (max-width: 800px) {
    height: 70vh;           /* fixed height on mobile */
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;             /* below text, above image */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0,0,0,0.48923319327731096) 2%,
      rgba(255,255,255,0) 39%,
      rgba(255,255,255,0) 78%,
      rgba(0,0,0,0.23713235294117652) 100%
    );
  }
`

const Tagline = styled(Headliner)`
  color: white;
  margin: 0;
`

// Container for headline + button(s)
const Absolute = styled.div`
  position: absolute;
  z-index: 2;
  color: white;
  bottom: 1em;
  margin-left: 1em;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;             /* space between headline and button */

  @media (min-width: 800px) {
    bottom: 2em;
    margin-left: 3em;
    width: 60%;
  }
`

const ContentBelowHeadline = styled.div`
  /* optional extra styling for the area under the headline */
`

const Image = styled(Img)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;            /* fill Hero's fixed height */
`

export default HeroSection;

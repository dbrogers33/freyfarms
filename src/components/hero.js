import React from 'react'
import styled from "styled-components";
import Headliner from "../components/typography/h1"
import Img from "gatsby-image/withIEPolyfill"

const HeroSection = ({ heroImage, headline }) => {
    return (
        <Hero>
            <Absolute>
                <Tagline color="#FFF">{headline}</Tagline>
            </Absolute>
            <Image
                fluid={heroImage}
                objectPosition='50% 50%'
            />
        </Hero>
    );
};

// Checkout macbook sizing
const Hero = styled.section`
    position: relative;
    @media (max-width: 800px) {
        height: 70vh;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,0.48923319327731096) 2%, rgba(255,255,255,0) 39%, rgba(255,255,255,0) 78%, rgba(0,0,0,0.23713235294117652) 100%);
    }
`
const Tagline = styled(Headliner)`
    color: white;
    position: absolute;
    bottom: .5em;
`
const Absolute = styled.div`
    position: absolute;
    z-index: 2;
    color: white;
    bottom: 1em;
    margin-left: 1em;
    width: 90%;
    @media (min-width: 800px) {
        bottom: 2em;
        margin-left: 3em;
        width: 60%;
    }
`
const Image = styled(Img)`
    position: absolute;
    height: 100vh;
    @media (max-width: 800px) {
        height: 70vh;
    }
`

export default HeroSection;
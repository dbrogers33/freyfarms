import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";
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
                objectPosition='50% 100%'
            />
        </Hero>
    );
};

const Hero = styled.section`
    position: relative;
    height: 90vh;
`
const Tagline = styled(Headliner)`
    color: white;
    position: absolute;
    bottom: 1em;
`
const Absolute = styled.div`
    position: absolute;
    z-index: 2;
    color: white;
    bottom: 2em;
    margin-left: 3em;
    width: 60%;
`
const Image = styled(Img)`
    position: absolute;
    height: 100%;
`

export default HeroSection;
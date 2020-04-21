import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";
import Headliner from "../components/typography/h2"
import Img from "gatsby-image/withIEPolyfill"
import { Link } from "gatsby";

const HoverCard = ({ image, headline, link }) => {
    return (
        <Link to={link}>
            <Card>
                <Absolute>
                    <CenterText>
                        <Tagline textAlign="center" color="#FFF">{headline}</Tagline>
                    </CenterText>
                </Absolute>
                <Image
                    fluid={image}
                    objectPosition='50% 100%'
                />
            </Card>
        </Link>
    );
};

const Card = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
`
const Tagline = styled(Headliner)`
    color: white;
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

export default HoverCard;
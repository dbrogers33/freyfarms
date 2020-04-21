import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const paragraph = ({ children, textAlign, color }) => {
    return (
        <P textAlign={textAlign} color={color}>{children}</P>
    );
};

paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

paragraph.defaultProps = {
    textAlign: "left",
    color: "#828282"
};

const P = styled.p`
    font-family: 'Brandon Grotesque Regular';
    color: ${props => props.color};
    font-size: 20px;
    text-align: ${props => props.textAlign};
    font-display: auto;
    line-height: 1.5em;
    @media (min-width: 1400px) {
        font-size: 22px;
    }
`
export default paragraph;
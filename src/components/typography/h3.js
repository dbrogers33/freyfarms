import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h3 = ({ children, textAlign, color }) => {
    return (
        <H3 textAlign={textAlign} color={color}>{children}</H3>
    );
};

h3.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h3.defaultProps = {
    textAlign: "left",
    color: "#0F5800"
};

const H3 = styled.h3`
    font-family: 'Handelson';
    color: ${props => props.color};
    font-size: 36px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    font-weight: 100;
    @media (min-width: 800px) {
        font-size: 48px;
    }
`

export default h3;
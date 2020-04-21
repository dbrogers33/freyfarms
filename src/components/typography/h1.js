import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h1 = ({ children, textAlign, color }) => {
    return (
        <H1 textAlign={textAlign} color={color}>{children}</H1>
    );
};

h1.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h1.defaultProps = {
    textAlign: "left",
    color: "#000"
};

const H1 = styled.h1`
    font-family: 'Cervo Neue';
    text-transform: uppercase;
    color: ${props => props.color};
    font-weight: 800;
    font-size: 48px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    @media (min-width: 800px) {
        font-size: 72px;
    }
`
export default h1;
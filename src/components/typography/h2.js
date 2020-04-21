import React from 'react'
import styled from "styled-components";
import * as PropTypes from "prop-types";

const h2 = ({ children, textAlign, color }) => {
    return (
        <H2 textAlign={textAlign} color={color}>{children}</H2>
    );
};

h2.propTypes = {
    children: PropTypes.node.isRequired,
    textAlign: PropTypes.oneOf(["left", "center"]),
};

h2.defaultProps = {
    textAlign: "left",
    color: "#000"
};

const H2 = styled.h2`
    text-transform: uppercase;
    font-family: 'Cervo Neue';
    color: ${props => props.color};
    font-weight: 800;
    font-size: 24px;
    text-align: ${props => props.textAlign};
    margin: .1em 0;
    @media (min-width: 800px) {
        font-size: 38px;
    }
`

export default h2;
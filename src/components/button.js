import React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const Button = ({ buttonLabel, link, textAlign }) => {
    return (

        <StyledLink to={link} textAlign={textAlign}>{buttonLabel}</StyledLink>
        
    );
};

Button.propTypes = {
    buttonLabel: PropTypes.node.isRequired,
};

Button.propTypes = {
    textAlign: PropTypes.oneOf(["left", "center"]),
};

Button.defaultProps = {
    textAlign: "left",
};


const StyledLink = styled(props => <Link {...props} />) `
    border-radius: 5px;
    background: #095129;
    padding: 1em 2.25em;
    color: white;
    display: inline-block;
    font-family: 'Brandon Grotesque';
    text-transform: uppercase;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: .1em;
    text-align: ${props => props.textAlign};
    transition: .15s ease;
    font-weight: 500;
    &:hover {
        background: #292825;
        box-shadow: 0px 4px 7px rgba(33,32,30, .27);
        margin: -.1em 0 .1em 0;
    }
`

export default Button;
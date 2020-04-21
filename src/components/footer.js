import React from 'react'
import styled from "styled-components";

import {  Link } from 'gatsby'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection>
                <Column>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/products">Products</StyledLink>
                </Column>
                <Column>
                    <StyledLink to="/our-heritage">Heritage</StyledLink>
                    <StyledLink to="/contact-us">The Growing Season</StyledLink>
                    <StyledLink to="/press">Press</StyledLink>
                </Column>
                
                <Column>
                    <FooterItem>Sales@freyfarms.com</FooterItem>
                    <FooterItem>555-555-5555</FooterItem>
                </Column>

                <Column>
                    <FooterItem>111 County Highway 15</FooterItem>
                    <FooterItem>Suite a</FooterItem>
                    <FooterItem>Keenes, Il 62851</FooterItem>
                </Column>
            </FooterSection>
            <CopyWrite>Frey Farms, LLC</CopyWrite>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    background: #095129;
    padding-bottom: 1em;
`
const FooterSection = styled.footer`
    padding: 2em;
    @media (min-width: 900px) {
        display: flex;
    }
`
const Column = styled.div`
    margin: 1em 0;
     @media (min-width: 900px) {
        width: calc(100% / 4);
     }
`
const StyledLink = styled(props => <Link {...props} />) `
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 0 20px;
    font-family: 'Brandon Grotesque Medium';
    font-size: 14px;
    display: block;
`
const FooterItem = styled.p`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 0 20px;
    font-family: 'Brandon Grotesque Medium';
    font-size: 14px;
`
const CopyWrite = styled.p`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 0 20px;
    font-family: 'Brandon Grotesque Medium';
    font-size: 14px;
    display: block;
    text-align: center;
`

export default Footer;
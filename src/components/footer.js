import React from 'react'
import styled from "styled-components";

import {  Link } from 'gatsby'
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection>
                <Grid>
                    <div>
                        <Heading>Products</Heading>
                        <StyledLink to="/products">Produce</StyledLink>
                        <StyledLink to="/products/beverages/">Beverages</StyledLink>
                        <StyledLink to="/products">Tsamma Watermelon Juice</StyledLink>
                    </div>
                    <div>
                        <Heading>Company</Heading>
                        <StyledLink to="/our-story">Our Story</StyledLink>
                        <StyledLink to="/news">News</StyledLink>
                        <StyledLink to="/">The Growing Season</StyledLink>
                        <StyledLink to="/locations">Find Our Juice</StyledLink>
                    </div>
                    <div> 
                        
                    </div>
                    <div>
                        <Paragraph>info@freyfarms.com</Paragraph>
                        <Paragraph>618-835-2536</Paragraph>
                    </div>
                    <div>
                        <Paragraph>111 County Hwy 15</Paragraph>
                        <Paragraph>Suite A</Paragraph>
                        <Paragraph>Keenes, IL 62851</Paragraph>
                    </div>
                </Grid>
                <BottomSection>
                    <Social>
                        <a href="https://facebook.com/freyfarms" target="_blank" rel="noreferrer"><FaFacebookF aria-label="Facebook Icon"/></a>
                        <a href="https://www.instagram.com/freyfarms/" target="_blank" rel="noreferrer"><FaInstagram aria-label="Instagram Icon"/></a>
                    </Social>
                    <CopyWrite>
                        ©2020, Frey Farms, LLC. All Rights Reserved.
                    </CopyWrite>
                </BottomSection>
            </FooterSection>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    background: #095129;
    padding-bottom: 1.5em;
    padding-top: 2em;
`
const FooterSection = styled.footer`
    width: 95%;
    margin: 0 auto;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
    @media (min-width: 900px) {
        grid-template-columns: 200px 200px 1fr 200px 200px;
    }
`
const BottomSection = styled.div`
    border-top: white solid 2px;
    margin-top: 1.5em;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    @media (min-width: 900px) {
        display: inline-block;
        width: 100%;
    }
    
`
const Social = styled.div`
    float: left;
    & > * {
        color: white;
        & > * {
            padding: .75em .25em;
        }
    }
`
const CopyWrite = styled.p`
    font-family: 'Brandon Grotesque Regular';
    color: white; 
    @media (min-width: 900px) {
        float: right;
    }
`
const Paragraph = styled.p`
    color: white;
    text-decoration: none;
    padding: 0;
    margin: .5em 0;
    font-family: 'Brandon Grotesque Regular';
    font-size: 16px;
`
const Heading = styled.p`
    color: white;
    text-decoration: none;
    padding: 0;
    margin: .5em 0;
    font-family: 'Brandon Grotesque Medium';
    font-size: 20px;
`
const StyledLink = styled(props => <Link {...props} />) `
    color: white;
    text-decoration: none;
    padding: 0;
    margin: .5em 0;
    font-family: 'Brandon Grotesque Regular';
    font-size: 16px;
    display: block;
`


export default Footer;

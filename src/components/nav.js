import React from "react";
import styled from "styled-components";

import { StaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import MobileMenu from '../components/mobile-nav'


export default () => (
    <StaticQuery
      query={graphql`
        query {
            logo: file(relativePath: { eq: "frey-farms-logo.png" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    # Makes it trivial to update as your page's design changes.
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed
                    }
                }
            }
        }
      `}
      render={data => (
        <div>
            <NavBar>
                <Link to="/"><Logo fixed={data.logo.childImageSharp.fixed}/></Link>
                <DesktopMenu>
                    <ul>
                        <li><StyledLink to="/">Home</StyledLink></li>
                        <li><StyledLink to="/our-story">Our Story</StyledLink></li>
                        <li><StyledLink to="/products" aria-haspopup="true">What We Grow</StyledLink>
                            <ul className="dropdown" aria-label="submenu">
                                <li className="dropdown-item"><StyledLink to="/products">Produce</StyledLink></li>
                                <li className="dropdown-item"><StyledLink to="/products">The Heirloom Stacker</StyledLink></li>
                                <li className="dropdown-item"><StyledLink to="/products">Candy Corn</StyledLink></li>
                                <li className="dropdown-item"><ExternalLink href="https://freyfarms.com/produce-guide.pdf" target="_blank" >Sales Guide</ExternalLink></li>
                                <li className="dropdown-item"><ExternalLink href="https://freyfarms.com/tsamma-shg-sellsheets.pdf" target="_blank" >Beverages</ExternalLink></li>
                            </ul>
                        </li>
                        <li><ExternalLink href="https://thegrowingseason.green" target="_blank">The Growing Season</ExternalLink></li>
                        <li><StyledLink to="/news">News</StyledLink></li>
                    </ul>
                </DesktopMenu>
            </NavBar>
            <MobileMenu />
        </div>
      )}
    />
  )

const NavBar = styled.div`
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
      }
      
      li {
        color: #fff;
        display: block;
        float: left;
        padding: 1rem;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;
      }
        
      li a {
        color: #fff;
      }
      
      li:hover,
      li:focus-within {
        cursor: pointer;
        text-decoration: underline;
      }

      
      li:focus-within a {
        outline: none;
      }
      
      ul li ul {
        background: rgba(2, 2, 2, 0.35);
        visibility: hidden;
        opacity: 0;
        min-width: 5rem;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;
        li a {
            font-size: 12px;
        }
      }
      
      ul li:hover > ul,
      ul li:focus-within > ul,
      ul li ul:hover,
      ul li ul:focus {
         visibility: visible;
         opacity: 1;
         display: block;
      }
      
      ul li ul li {
        clear: both;
        width: 100%;
      }
`
const Logo = styled(Img)`
    margin: 0 2em 0 2em;
    @media (max-width: 800px) {
        margin: 0 1em; 
    }
`
const DesktopMenu = styled.nav`
    @media (max-width: 800px) {
        display: none;
    }
`
const StyledLink = styled(props => <Link {...props} />) `
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 0 0px;
    font-family: 'Brandon Grotesque Medium';
    font-size: 16px;
    transition: .2s ease;
    letter-spacing: 0.1em;
    :hover {
        border-bottom: solid 2px #FFF;
        cursor: pointer;
    }
`
const ExternalLink = styled.a`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 0 0px;
    font-family: 'Brandon Grotesque Medium';
    font-size: 16px;
    transition: .2s ease;
    letter-spacing: 0.1em;
    :hover {
        border-bottom: solid 2px #FFF;
        cursor: pointer;
    }
`
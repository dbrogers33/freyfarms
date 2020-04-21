import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { slide as Menu } from "react-burger-menu";

const MobileMenu = () => {
    return (
        <Sidebar>
        <Menu right>
        <StyledLink className="menu-item" to="/">
          Home
        </StyledLink>
  
        <StyledLink className="menu-item" to="/products">
          Products
        </StyledLink>
  
        <StyledLink className="menu-item" to="/our-story">
          Our Story
        </StyledLink>
  
        <StyledLink className="menu-item" to="/">
          The Growing Season
        </StyledLink>

        <StyledLink className="menu-item" to="/news">
          News
        </StyledLink>

      </Menu>
      </Sidebar>
        
    );
};

const StyledLink = styled(props => <Link {...props} />) `
`;

const Sidebar = styled.div`
@media (min-width: 800px) {
    display: none;
}
#page-wrap {
    text-align: center;
  
    /* Prevent sidebar from showing a scrollbar on page */
    overflow: auto;
  }
  
  /* Individual item */
  .bm-item {
    display: inline-block;
  
    /* Our sidebar item styling */
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0;
    margin: 2em;
    font-family: 'Brandon Grotesque Medium';
    font-size: 18px;
  }
  
  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }
  
  /* The rest copied directly from react-burger-menu docs */
  
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 20px;
    top: 20px;
  }
  
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #FFF;
  }
  
  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  
  /* Color/shape of close button cross */
  .bm-cross {
    background: white;
  }
  
  /* General sidebar styles */
  .bm-menu {
    background: #095129;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }
  
  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }
  
  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default MobileMenu;
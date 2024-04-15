import React, { useState } from 'react';
import styled from "styled-components";

// Sample data for navigation items
const navigationData = [
  {
    id: 1,
    label: 'Home',
    link: '/'
  },
  {
    id: 2,
    label: 'About',
    link: '/our-story'
  },
  {
    id: 3,
    label: 'What We Grow',
    children: [
        {
            id: 4,
            label: 'Produce',
            link: '/produce'
        },
        {
            id: 5,
            label: 'The Heirloom Stacker',
            link: '/the-heirloom-stacker'
        },
        {
            id: 6,
            label: 'Beverages',
            link: '/beverages'
        }
      ]
  },
  {
    id: 7,
    label: 'The Growing Season',
    link: 'https://thegrowingseason.green/'
  },
  {
    id: 8,
    label: 'News',
    link: '/news'
  }
];

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState([]);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (itemId) => {
      if (expandedItems.includes(itemId)) {
        setExpandedItems(expandedItems.filter(id => id !== itemId));
      } else {
        setExpandedItems([...expandedItems, itemId]);
      }
    };
  
    return (
      <MobileNav>
        <div className={`mobile-navigation ${isOpen ? 'open' : ''}`}>
      <div className="mobile-navigation-header">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={isOpen ? "bar bar1 open" : "bar bar1"}></div>
          <div className={isOpen ? "bar bar2 open" : "bar bar2"}></div>
          <div className={isOpen ? "bar bar3 open" : "bar bar3"}></div>
        </div>
        <h3>Menu</h3>
      </div>
      <div className="navigation-menu">
        {navigationData.map(item => (
          <React.Fragment key={item.id}>
            <div className="menu-item" onClick={() => item.children && handleItemClick(item.id)}>
              <a href={item.link}>{item.label}</a>
              {item.children && (
                <div className={`sub-menu ${expandedItems.includes(item.id) ? 'expanded' : ''}`}>
                  {item.children.map(child => (
                    <a key={child.id} href={child.link}>{child.label}</a>
                  ))}
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
      </MobileNav>
    );
  };
  
  export default MobileNavigation;

const MobileNav = styled.div`
.mobile-navigation {
    position: fixed;
    top: 0;
    right: -300px; /* Initially off-screen */
    width: 250px; /* Adjust width as needed */
    height: 100%;
    background-color: #f4f4f4; /* Adjust background color as needed */
    transition: right 0.3s ease; /* Animation for sliding effect */
    z-index: 999; /* Ensure the menu appears above other content */
  }
  
  .mobile-navigation.open {
    right: 0; /* Slide in when open */
  }
  
  .mobile-navigation-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #333;
    color: #fff;
  }
  
  .hamburger-menu {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }
  
  .bar {
    width: 100%;
    height: 3px;
    background-color: #fff;
    transition: all 0.3s ease;
  }
  
  .bar.open.bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .bar.open.bar2 {
    opacity: 0;
  }
  
  .bar.open.bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
  
  .navigation-menu {
    padding: 0;
  }
  
  .menu-item {
    padding: 10px;
    border-bottom: 1px solid #ccc; /* Add a separator between items */
  }
  
  .menu-item:last-child {
    border-bottom: none; /* Remove separator for the last item */
  }
  
  .menu-item a {
    text-decoration: none;
    color: #333;
    display: block;
  }
  
  .sub-menu {
    display: none;
    padding-left: 20px;
  }
  
  .sub-menu.expanded {
    display: block;
  }
  
  .sub-menu a {
    color: #666;
  }
  
`


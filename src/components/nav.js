import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from "gatsby-image/withIEPolyfill";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "frey-farms-logo.png" }) {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => <NavigationBar logoData={data.logo} />}
  />
);

const NavigationBar = ({ logoData }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu on window resize (if desktop size is reached)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Reset active dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const menuItems = [
    { 
      label: 'Home', 
      path: '/',
      dropdown: null
    },
    { 
      label: 'What We Grow', 
      path: '/',
      dropdown: [
        { label: 'Watermelons', path: '/what-we-grow/watermelons' },
        { label: 'Sweet Corn', path: '/what-we-grow/sweet-corn' },
        { label: 'Pumpkins', path: '/what-we-grow/pumpkins' }
      ]
    },
    { 
      label: 'Drink Fresh', 
      path: '/',
      dropdown: [
        { label: 'Tsamma Watermelon Juice', path: 'https://tsammajuice.com/', external: true },
        { label: 'Sarah\'s Homegrown Agua Frescas', path: 'https://www.sarahshomegrown.com/', external: true }
      ]
    },
    { 
      label: 'Our Story', 
      path: '/our-story',
      dropdown: null
    },
    { 
      label: 'News', 
      path: '/news',
      dropdown: null
    }
  ];

  return (
    <Header scrolled={scrolled}>
      <NavContainer>
        {/* Logo */}
        <LogoLink to="/">
          <LogoWrapper>
            <Logo fixed={logoData.childImageSharp.fixed} />
          </LogoWrapper>
        </LogoLink>

        {/* Desktop Navigation */}
        <DesktopNav>
          <NavList>
            {menuItems.map((item, index) => (
              <NavItem 
                key={index}
                onMouseEnter={() => !mobileMenuOpen && setActiveDropdown(index)}
                onMouseLeave={() => !mobileMenuOpen && setActiveDropdown(null)}
              >
                {item.external ? (
                  <ExternalNavLink 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </ExternalNavLink>
                ) : (
                  <NavLink to={item.path}>
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown size={16} style={{ marginLeft: '4px' }} />
                    )}
                  </NavLink>
                )}
                
                {/* Desktop dropdowns */}
                {item.dropdown && (
                  <DropdownMenu visible={activeDropdown === index}>
                    {item.dropdown.map((dropdownItem, i) => (
                      <DropdownItem key={i}>
                        {dropdownItem.external ? (
                          <DropdownExternalLink
                            href={dropdownItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {dropdownItem.label}
                          </DropdownExternalLink>
                        ) : (
                          <DropdownLink to={dropdownItem.path}>
                            {dropdownItem.label}
                          </DropdownLink>
                        )}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                )}
              </NavItem>
            ))}
          </NavList>
        </DesktopNav>

        {/* Mobile Menu Button */}
        <MenuToggle
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </MenuToggle>

        {/* Mobile Menu */}
        <MobileMenuContainer open={mobileMenuOpen}>
          <MobileMenuContent>
            <MobileNavList>
              {menuItems.map((item, index) => (
                <MobileNavItem key={index}>
                  {item.dropdown ? (
                    <div>
                      <MobileDropdownToggle
                        onClick={() => toggleDropdown(index)}
                      >
                        {item.label}
                        {activeDropdown === index ? (
                          <ChevronUp size={20} style={{ marginLeft: '8px' }} />
                        ) : (
                          <ChevronDown size={20} style={{ marginLeft: '8px' }} />
                        )}
                      </MobileDropdownToggle>
                      <MobileDropdownMenu open={activeDropdown === index}>
                        {item.dropdown.map((dropdownItem, i) => (
                          <MobileDropdownItem key={i}>
                            {dropdownItem.external ? (
                              <MobileExternalLink
                                href={dropdownItem.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </MobileExternalLink>
                            ) : (
                              <MobileLink
                                to={dropdownItem.path}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.label}
                              </MobileLink>
                            )}
                          </MobileDropdownItem>
                        ))}
                      </MobileDropdownMenu>
                    </div>
                  ) : (
                    <div>
                      {item.external ? (
                        <MobileExternalLink
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </MobileExternalLink>
                      ) : (
                        <MobileLink
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </MobileLink>
                      )}
                    </div>
                  )}
                </MobileNavItem>
              ))}
            </MobileNavList>
          </MobileMenuContent>
        </MobileMenuContainer>
      </NavContainer>
    </Header>
  );
};

// Styled Components
const Header = styled.header`
  position: fixed;
  width: 100%;
  z-index: 50;
  transition: background-color 0.3s ease;
  background-color: ${({ scrolled }) => scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
`;

const NavContainer = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  z-index: 10;
`;

const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;

  @media (min-width: 800px) {
    width: 100px;
    height: 100px;
  }
`;

const Logo = styled(Img)`
  width: 100%;
  height: 100%;
`;

const DesktopNav = styled.nav`
  display: none;
  margin-left: 1rem;

  @media (min-width: 800px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
  margin-left: 2rem;
`;

const NavItem = styled.li`
  position: relative;
`;

const linkStyles = css`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Brandon Grotesque Medium', sans-serif;
  font-size: 16px;
  letter-spacing: 0.1em;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;

  &:hover {
    border-bottom: solid 2px #FFF;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  ${linkStyles}
`;

const ExternalNavLink = styled.a`
  ${linkStyles}
`;

const DropdownMenu = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0.8);
  min-width: max-content;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  list-style: none;
`;

const DropdownItem = styled.li`
  white-space: nowrap;
`;

const dropdownLinkStyles = css`
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Brandon Grotesque Medium', sans-serif;
  font-size: 12px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(75, 75, 75, 0.8);
  }
`;

const DropdownLink = styled(Link)`
  ${dropdownLinkStyles}
`;

const DropdownExternalLink = styled.a`
  ${dropdownLinkStyles}
`;

const MenuToggle = styled.button`
  display: flex;
  z-index: 20;
  padding: 0.5rem;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;

  @media (min-width: 800px) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 800px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  padding-top: 6rem;
  height: 100%;
  overflow-y: auto;
`;

const MobileNavList = styled.ul`
  padding: 0 1.5rem;
  margin: 0;
  list-style: none;
`;

const MobileNavItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
`;

const MobileDropdownToggle = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: white;
  text-transform: uppercase;
  font-family: 'Brandon Grotesque Medium', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
`;

const MobileDropdownMenu = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1rem;
  list-style: none;
  transition: all 0.2s ease;
  max-height: ${({ open }) => open ? '500px' : '0'};
  opacity: ${({ open }) => open ? '1' : '0'};
  overflow: hidden;
`;

const MobileDropdownItem = styled.li`
  padding: 0.5rem 0;
`;

const mobileLinkStyles = css`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Brandon Grotesque Medium', sans-serif;
  font-size: 16px;
  transition: opacity 0.2s ease;
  display: block;
  padding: 0.5rem 0;

  &:hover {
    opacity: 0.8;
  }
`;

const MobileLink = styled(Link)`
  ${mobileLinkStyles}
`;

const MobileExternalLink = styled.a`
  ${mobileLinkStyles}
`;

export default Navbar;
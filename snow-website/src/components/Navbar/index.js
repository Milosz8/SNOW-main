import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { MdContentCopy, MdMenu } from "react-icons/md";
import myImage from "../../images/SNOW.png";

const NavMenuStyles = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#030303" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;

  .logoImg {
    img {
      justify-self: flex-start;
      margin-left: 24px;
      width: 15%;
    }
  }

  .mobile-menu-icon {
    display: none;
  }
  .closeNavIcon {
    display: none;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    transition: 0.8s all ease;
    ul {
      display: none;
    }
    padding: 0;

    .mobile-menu-icon {
      display: block;
      position: absolute;
      top: 18px;
      right: 18px;
      transform: translate(-100%, 60%);
      font-size: 20px;
      cursor: pointer;
      color: #fff;
      &:hover {
        color: #b946ea;
        transition: 0.2s ease-in-out;
      }
    }
    @media only screen and (max-width: 960px) {
      transition: 0.8s all ease;
    }
  }
`;

const NavLogo = styled(NavLink)`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = styled.ul`
  display: flex;

  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  a {
    color: #fff;
    font-size: 1rem;
    min-width: 80px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
      color: #b946ea;
      transition: 0.2s ease-in-out;
    }

    &.active {
      border-bottom: 3px solid #b946ea;

      transition: all 0.3s ease-in-out;
    }
  }
`;

export default function NavMenu({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (document.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  setInterval(() => {
    console.log(document.pageXOffset);
  }, 1000);
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [showNav, SetShowNav] = useState(false);

  return (
    <NavMenuStyles scrollNav={scrollNav}>
      <NavLogo className="logoImg" to="/" onClick={toggleHome}>
        <img src={myImage} alt="LogoImg" />
      </NavLogo>
      <div className="mobile-menu-icon" onClick={toggle}>
        <MdMenu />
      </div>
      <Navbar>
        <NavItem>
          <NavLink
            to="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/About"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            O nas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/Koncerty"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Koncerty
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="/Contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Kontakt
          </NavLink>
        </NavItem>
      </Navbar>
    </NavMenuStyles>
  );
}

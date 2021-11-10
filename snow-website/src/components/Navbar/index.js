import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { MdMenu, MdClose } from "react-icons/md";
import myImage from "../../images/SNOW.png";

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  //zmiany

  height: 80px;
  display: flex;

  align-items: center;

  //koniec zmian
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: black;
  .logoImg {
    img {
      // margin: 0 0 10px 0;
      padding-right: 0;
      margin: auto;
      width: 150px;
    }
  }
  ul {
    max-width: 1200px;
    margin: auto;
    width: 100%;
    text-align: right;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      text-decoration: none;
      &:hover {
        background-color: gray;

        // powyżej wykorzystanie zmiennych (var) z domyślnego arkusza stylów GLOBALSTYLE.JS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }
    }
    a {
      display: inline-block;
      font-family: "Encode Sans Expanded", sans-serif;
      text-decoration: none;
      padding: 0.8rem 1.6rem;
      font-size: 1.5rem;
      color: white;
    }
    .active {
      color: purple;
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 2rem;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .closeNavIcon {
    display: none;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }

    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: black;
      border: 5px solid white;
      padding: 3rem;
      width: 100%;

      text-align: center;

      border-radius: 12px;
      position: absolute;

      top: -3px;

      .closeNavIcon {
        display: block;
        width: 5rem;
        font-size: 2rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
  @media only screen and (max-width: 1120px) {
    ul {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;

export default function NavMenu({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [showNav, SetShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <NavLink className="logoImg" to="/" onClick={toggleHome}>
        <img src={myImage} alt="LogoImg" />
      </NavLink>
      <div
        className="mobile-menu-icon"
        onClick={() => SetShowNav(!showNav)}
        role="button"
        onKeyDown={() => SetShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li onClick={toggleHome}>
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
        </li>
        <li>
          <NavLink
            to="/About"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            O nas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Koncerty"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Koncerty
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/Contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}

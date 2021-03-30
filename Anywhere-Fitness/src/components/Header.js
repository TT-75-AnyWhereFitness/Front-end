import React from "react"
import { NavLink, } from "react-router-dom";
import styled from "styled-components";

import "../assets/css/main.css";


const Header = () => {
    return (
        <div>
               <Headerer >
        <h1>
          <NavLink to="/">ANYWHERE FITNESS</NavLink>
        </h1>
        <HeaderNav >
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">Sign Up</NavLink>
                  </li>
                  <li>
                  <NavLink to="/login">Log In</NavLink>
                  </li>
                </ul>
        </HeaderNav>
      </Headerer>
        </div>
    )
}
export default Header


const Headerer = styled.header`
  -moz-transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
  -ms-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease;
  background: #2e3842;
  background: transparent;
  height: 3em;
  left: 1%;
  line-height: 2em;
  position: fixed;
  top: 0;
  width: 98%;
  z-index: 10000;
`;

const HeaderNav = styled.nav`
  height: inherit;
  line-height: inherit;
  position: absolute;
  right: 0;
  top: 0;
`;


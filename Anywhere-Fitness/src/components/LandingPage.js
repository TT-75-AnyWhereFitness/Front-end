import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";

import "../assets/css/main.css";
import Header from "./Header";
import {
  Banner,
  Section1,
  Section3,
  Spotlights,
  Contact,
  Footer,
} from "./HomeComponents";

export const LandingPage = () => {
  return (
    <div id="wrapper">
      <Header />

      <Banner />

      <div id="main">
        <Section1 />

        <Spotlights />

        <Section3 />
      </div>

      <Contact />

      <Footer />
    </div>
  );
};

export default LandingPage;

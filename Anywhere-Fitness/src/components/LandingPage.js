import React from "react";
import styled from "styled-components";
import axios from "axios"

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
  axios
  .get("https://tt75-anywhere-fitness.herokuapp.com/")
  .then((res) => {
    console.log("res",res)
  })
  .catch((error) => {
    console.log("AXIOS ERROR", error)
  })
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

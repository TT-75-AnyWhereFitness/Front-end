import React from "react";
import { Route,  Switch,  useHistory, BrowserRouter as Router } from "react-router-dom";
import axios from "axios"
import LandingPage from "./components/LandingPage"
function App() {
  return (
    <Router>
      <LandingPage />
    </Router>
  );
}

export default App;
// USE LANDING.HTML FOR THIS
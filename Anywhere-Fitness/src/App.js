import React from "react";
import { Route,  Switch,  useHistory, BrowserRouter as Router } from "react-router-dom";
import axios from "axios"

import LandingPage from "./components/LandingPage"
function App() {
  return (
    <Router>
      {/* Header goes here */}
      <Switch>
        {/* Which Login component are we using? */}
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
// USE LANDING.HTML FOR THIS
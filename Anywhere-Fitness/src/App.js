import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Auth/Home"
function App() {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;

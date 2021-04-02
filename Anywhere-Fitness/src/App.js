import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Auth/Home";
import Instructor from "./components/Auth/InstructorDesign";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/instructor" component={Instructor} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;

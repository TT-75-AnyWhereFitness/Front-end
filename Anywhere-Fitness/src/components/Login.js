import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth"


const initialState = {
  email: "",
  password: "",
  authentication: "",
};
const initialDisabled = true;

export default function Login() {
  const [userLogIn, setUserLogIn] = useState(initialState);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory()

  const onChange = (evt) => {
    setUserLogIn({
      ...userLogIn,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.prevent.default();
    // axios with auth here
    // don't forget the post
    history.push("/")
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <br></br>
      <h1> Login </h1>
      <div className="form-group inputs">
        <label>
          Email
          <input
            name="email"
            type="email"
            value={userLogIn.email}
            onChange={onChange}
            placeholder="Type Email Here"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={userLogIn.password}
            onChange={onChange}
            placeholder="Please Enter A Secure Password"
          />
        </label>
        <label>
          Authentication
          <input
            name="authentication"
            type="authentication"
            value={userLogIn.authentication}
            onChange={onChange}
            placeholder="Instructor Authentication Here"
          />
        </label>
        <button disabled={disabled}>Login</button>
      </div>
    </form>
  );
}

import React, { useState, useEffect } from "react";
import * as yup from "yup";

import Schema from "./Schema";
import Header from "./Header";

const initialState = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

const Login = () => {
  const [userLogIn, setUserLogIn] = useState(initialState);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const onChange = (evt) => {
    setUserLogIn({ ...userLogIn, [evt.target.name]: evt.target.value });
    console.log(userLogIn);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  const inputChange = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setUserLogIn({
      ...userLogIn,
      [name]: value,
    });
  };

  useEffect(() => {
    Schema.isValid(userLogIn).then((valid) => setDisabled(!valid));
  }, [userLogIn]);

  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={userLogIn.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={userLogIn.password}
            onChange={onChange}
          />
        </label>

        <button disabled={disabled}>Login</button>
      </form>
    </div>
  );
};

export default Login;

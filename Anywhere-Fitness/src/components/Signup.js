import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

import Schema from "./Schema";
import Header from "./Header";

const initialState = {
  first_name: "",
  last_name: "",
  // code: "",
  username: "",
  email: "",
  password: "",
  role: "",
};

const initialErrors = {
  first_name: "",
  last_name: "",
  username: "",
  // code: "",
  email: "",
  password: "",
  role: "",
};

const initialData = [];

const Signup = () => {
  const [userLogIn, setUserLogIn] = useState(initialState);
  // const [disabled, setDisabled] = useState(true);
  const [fitnessData, setFitnessData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const onChange = (evt) => {
    setUserLogIn({ ...userLogIn, [evt.target.name]: evt.target.value });
    console.log(userLogIn);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "https://tt75-anywhere-fitness.herokuapp.com/api/auth/register",
        userLogIn
      )
      .then((res) => {
        setFitnessData(res.data, ...fitnessData);
        console.log(res);
        setUserLogIn(initialState);
      })
      .catch((err) => {
        console.log(err);
      });
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

  // useEffect(() => {
  //   Schema.isValid(userLogIn).then((valid) => setDisabled(!valid));
  // }, [userLogIn]);
  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <form onSubmit={onSubmit}>
        <label>
          Client or Instructor?
          <select id="role" name="role" onChange={onChange}>
            <option value="">Choose option here</option>
            <option value="client">Client</option>
            <option value="instructor">Instructor</option>
          </select>
        </label>
        <label>
          First Name:
          <input
            name="first_name"
            type="text"
            value={userLogIn.first_name}
            onChange={onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="last_name"
            type="text"
            value={userLogIn.last_name}
            onChange={onChange}
          />
        </label>
        <label>
          UserName:
          <input
            name="username"
            type="text"
            value={userLogIn.username}
            onChange={onChange}
          />
        </label>
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
          Create a password:
          <input
            name="password"
            type="password"
            value={userLogIn.password}
            onChange={onChange}
          />
        </label>
        {/* <label>
          Code:
          <input
            name="code"
            type="text"
            value={userLogIn.code}
            onChange={onChange}
          />
        </label> */}
        {/* {userLogIn.role === "client" ? null : (
          <label>
            Code:
            <input
              name="code"
              type="text"
              value={userLogIn.code}
              onChange={onChange}
            />
          </label>
        )} */}
        <button /*disabled={disabled}*/>Submit</button>
      </form>
    </>
  );
};

export default Signup;

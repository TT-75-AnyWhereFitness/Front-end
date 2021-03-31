import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Schema from "../Schema";
import axios from "axios";
const initialState = {
  fName: "",
  lName: "",
  code: "",
  email: "",
  password: "",
  role: "",
};

const initialErrors = {
  fName: "",
  lName: "",
  code: "",
  email: "",
  password: "",
  role: "",
};

const initialData = [];
const initialDisabled = true;

const Signup = () => {
  const [userLogIn, setUserLogIn] = useState(initialState);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [fitnessData, setFitnessData] = useState(initialData);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const onChange = (evt) => {
    setUserLogIn({ ...userLogIn, [evt.target.name]: evt.target.value });
    console.log(userLogIn);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      option: userLogIn.option,
      fname: userLogIn.fName,
      lName: userLogIn.lName,
      email: userLogIn.email,
      password: userLogIn.password,
    };
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setFitnessData(res.data, ...fitnessData);
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

  useEffect(() => {
    Schema.isValid(userLogIn).then((valid) => setDisabled(!valid));
  }, [userLogIn]);
  return (
    <>
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
            name="name"
            type="text"
            value={userLogIn.fName}
            onChange={onChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="name"
            type="text"
            value={userLogIn.lName}
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
        <label>
          Code:
          <input
            name="code"
            type="text"
            value={userLogIn.code}
            onChange={onChange}
          />
        </label>
        {userLogIn.role === "client" ? null : (
          <label>
            Code:
            <input
              name="code"
              type="text"
              value={userLogIn.code}
              onChange={onChange}
            />
          </label>
        )}
        <button disabled={disabled}>Submit</button>
      </form>
    </>
  );
};

export default Signup;

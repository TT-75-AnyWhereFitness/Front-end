import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

const initialState = {
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

  return (
    <div>
      <Header />
      <br></br>
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
    </div>
  );
};

export default Signup;
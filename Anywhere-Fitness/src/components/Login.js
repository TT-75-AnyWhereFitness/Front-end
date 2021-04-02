import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// import * as yup from "yup";
import axios from "axios";

// import Schema from "./Schema";

const initialState = {
  username: "",
  password: "",
};

// const initialErrors = {
//   username: "",
//   password: "",
// };

// const initialDisabled = false;

const Login = () => {
  const [userLogIn, setUserLogIn] = useState(initialState);
  const history = useHistory();
  // const [disabled, setDisabled] = useState(initialDisabled);
  // const [formErrors, setFormErrors] = useState(initialErrors);

  const onChange = (evt) => {
    setUserLogIn({ ...userLogIn, [evt.target.name]: evt.target.value });
    console.log(userLogIn);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "https://tt75-anywhere-fitness.herokuapp.com/api/auth/login",
        userLogIn
      )
      .then((res) => {
        // if(userLogIn)
        console.log(res);
        setUserLogIn(initialState);
        history.push("/home")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const inputChange = (name, value) => {
  //   yup
  //     .reach(Schema, name)
  //     .validate(value)
  //     .then(() => {
  //       setFormErrors({ ...formErrors, [name]: "" });
  //     })
  //     .catch((err) => {
  //       setFormErrors({ ...formErrors, [name]: err.errors[0] });
  //     });
  //   setUserLogIn({
  //     ...userLogIn,
  //     [name]: value,
  //   });
  // };

  // useEffect(() => {
  //   Schema.isValid(userLogIn).then((valid) => setDisabled(!valid));
  // }, [userLogIn]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={onSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={userLogIn.username}
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

        <button /*disabled={disabled}*/>Login</button>
      </form>
    </div>
  );
};

export default Login;

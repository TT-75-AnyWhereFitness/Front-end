import React, { useState } from "react";

const initialFormValues = {
  email: "",
  password: "",
  authentication: "",
};

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (evt) => {
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmit = (evt) => {
    evt.prevent.default();
    // axios with auth here
    // don't forget the post
  };

  return (
      <form className="form container" onSubmit={onSubmit} >
          <br></br>
          <h1> Login </h1>
          <div className="form-group inputs" >
              <label>
                  Email
                  <input  
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={onChange}
                  placeholder="Type Email Here"
                  />
              </label>
              <label>
                  Password
                  <input  
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={onChange}
                  placeholder="Please Enter A Secure Password"
                  />
              </label>
              <label>
                  Authentication
                  <input  
                  name="authentication"
                  type="authentication"
                  value={formValues.authentication}
                  onChange={onChange}
                  placeholder="Instructor Authentication Here"
                  />
              </label>
          </div>
      </form>
  )
}

import React, { useState } from 'react';
import axios from 'axios';
const initialState = {
   fName:"",
   lName:"",
   code:"",
    email:"",
    password:"",
   

}


const Signup = () => {

    const [userLogIn, setUserLogIn] = useState(initialState);
    const [disabled, setDisabled] = useState(initialDisabled)


    const onChange = (evt) => {
        setUserLogIn({...userLogIn, [evt.target.name]:evt.target.value} ) 
        console.log(userLogIn)
       }

       const onSubmit = (evt) => {
        evt.preventDefault();
    const newUser = {
        fname: userLogIn.fName,
        lName: userLogIn.lName,
        email: userLogIn.email,
        password: userLogIn.password,
    };
    axios
    .post("https://reqres.in/api/users", newUser)
    .then((res) => {
    //   setOrder(res.data, ...order);
    //   setCreateForm(initialState);
    })
    .catch((err) => {
      console.log(err);
    });
    }

    return (
        <>
            <form>
            <label>
        Client or Instructor?
        <select id='option' name='option' onChange={onChange}>
          <option value="">Choose option here</option>
          <option value="Client">Client</option>
          <option value="Instructor">Instructor</option>
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
            </form>
        </>
    )
}

export default Signup

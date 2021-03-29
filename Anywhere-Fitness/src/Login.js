import React, { useState} from 'react'

const initialState = {
    email:"",
    password:"",
    authentication:"",

}
const initialDisabled = true;

const Login = () => {
    
    
    
    const [userLogIn, setUserLogIn] = useState(initialState);
    const [disabled, setDisabled] = useState(initialDisabled)
    
    const onChange = (evt) => {
     setUserLogIn({...userLogIn, [evt.target.name]:evt.target.value} ) 
     console.log(userLogIn)
    }
    const onSubmit = (evt) => {
        evt.preventDefault();}
    
    return (
        <div>
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
                <label>
                   Authentication:
                    <input
                    name="authentication"
                    type="text"
                    value={userLogIn.authentication}
                    onChange={onChange}
                    />
                </label>
                <button disabled={disabled}>Login</button>
            </form>
        </div>
    )
}

export default Login

import React, { useState } from "react";

const Login  = ({submit}) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.id]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        submit(values)
    }
 console.log(values)
    return (
      <form onSubmit={handleSubmit}>

        <label htmlFor="username">Username</label>
        <input id="username" onChange={handleChange} value={values.username}/>

        <label htmlFor="password">Password</label>
        <input id="password" onChange={handleChange} value={values.password} />

        <button type="submit">Submit</button>

      </form>
    );
}

export default Login
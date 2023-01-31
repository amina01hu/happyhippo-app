import React, { useState, useEffect } from "react";

const Signup = (props) => {
    const initialValues = {name:"", email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [backendValidated, setBackendValidated] = useState(false);

    const handleChange = (e) => {
        console.log(formValues);
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (Object.keys(formErrors).length === 0) {
          setIsSubmit(true);
        }
      }

    useEffect(()=> {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          fetch('http://localhost:8080/users/add', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
              'Content-Type': 'application/json'
            },
          })
          setFormValues(initialValues);
          fetch('http://localhost:8080/users/').then((res)=> res.json()).then((data) => {
            setBackendValidated(true);
          })
        }
      },[formErrors])

      const validate = (values) => {
        const errors = {};
        return errors;
      }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            {isSubmit && backendValidated ? (<h1>Succesfully Signed Up!</h1>) : (<h1> </h1>)}
        {isSubmit && !backendValidated ? (<div><h1>Account can't be created!</h1>
        </div>) : (<h1> </h1>)}
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={formValues.name} name="name" onChange={handleChange} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={formValues.email} onChange={handleChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={formValues.passwordpass} onChange={handleChange} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Signup;
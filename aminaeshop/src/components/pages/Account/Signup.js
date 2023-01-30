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
          fetch('https://localhost:8080/users/add', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
              'Content-Type': 'application/json'
            },
          })
          setFormValues(initialValues);
          fetch('https://localhost:8080/users/').then((res)=> res.json()).then((data) => {
            setBackendValidated(true);
          })
        }
  
      },[formErrors])

      const validate = (values) => {
        const errors = {};
        const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!"
        }
        if (!values.password) {
          errors.password = "Password is required!";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 3 characters!";
        } else if (values.password.length > 10) {
          errors.password = "Password can't exceed 10 characters!";
        }
        return errors;
      }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
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
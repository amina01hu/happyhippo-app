import React, { useState } from "react";
import './Account.css';
import Login from './Login';
import Signup from './Signup';

function Account() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="Account">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Account;
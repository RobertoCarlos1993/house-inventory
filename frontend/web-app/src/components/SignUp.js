import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

const SignUp = props => {
  const [signup_state, setSignup_state] = useState({
    name: "",
    password: "",
    confirmPassword: "",
    email: ""
  });

  function validateForm() {
    return (
      signup_state.email.length > 0 &&
      signup_state.password.length > 0 &&
      signup_state.password === signup_state.confirmPassword
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      alert("Password are not matching!");
      return;
    }
    delete signup_state.confirmPassword;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      body: JSON.stringify({ ...signup_state })
    };
    fetch("/user", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));

    console.log("sent!");
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setSignup_state({
      ...signup_state,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup controlId="email" bsSize="large">
        <FormLabel>Name</FormLabel>
        <FormControl
          name="name"
          autoFocus
          type="text"
          value={signup_state.name}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup controlId="email" bsSize="large">
        <FormLabel>Email</FormLabel>
        <FormControl
          name="email"
          autoFocus
          type="email"
          value={signup_state.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup controlId="password" bsSize="large">
        <FormLabel>Password</FormLabel>
        <FormControl
          name="password"
          type="password"
          value={signup_state.password}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup controlId="confirmPassword" bsSize="large">
        <FormLabel>Confirm Password</FormLabel>
        <FormControl
          name="confirmPassword"
          type="password"
          onChange={handleInputChange}
          value={signup_state.confirmPassword}
        />
      </FormGroup>
      <button>Signup</button>
    </form>
  );
};

export default SignUp;

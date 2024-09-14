import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitClicked = (e) => {
    e.preventDefault()
    alert(name+email+password)
   
  };
  return (
    <div className="w-full h-screen ">
      {/* Registration Form */}
      <Form
        heading="Registration"
        noName={true}
        buttonClicked={onSubmitClicked}
        submitButton={true}
        nameChange={onNameChange}
        emailChange={onEmailChange}
        passwordChange={onPasswordChange}
      />

      {/* Login Form */}
      <Form heading="Login" noName={false} submitButton={false} buttonClicked={onSubmitClicked} emailChange={onEmailChange}
        passwordChange={onPasswordChange} />
    </div>
  );
}

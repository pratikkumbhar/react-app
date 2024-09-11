import React from "react";
import "./App.css";
import Form from './components/Form'
export default function App() {
  return (
    <div className="w-full h-screen ">
     {/* Registration Form */}
     <Form heading="Registration" noName = {true} submitButton = {true}/>

     {/* Login Form */}
      <Form heading="Login" noName = {false} submitButton = {false}/>

    </div>

  );
}

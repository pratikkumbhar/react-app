import { useState } from "react";
import Form from "./Form";
export default function RegisterPage() {
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
    e.preventDefault();
    alert(name + email + password);
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
    </div>
  );
}

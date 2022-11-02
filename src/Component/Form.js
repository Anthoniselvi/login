import React, { useState } from "react";
import SignupForm from "./SignupForm";
import SignupFormSuccess from "../SignupFormSuccess";
import Dashboard from "./Dashboard";

function Form() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <SignupForm submitForm={submitForm} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default Form;

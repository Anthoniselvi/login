import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";
import SignupFormSuccess from "../SignupFormSuccess";
import Dashboard from "./Dashboard";

function Form() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const submitForm = () => {
    setFormIsSubmitted(true);
    navigate("/Dashboard");
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

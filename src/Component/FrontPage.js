import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FrontPage.css";
import Form from "./Form";

function FrontPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords do not match");
      return;
    }

    if (formData.rememberme) {
      console.log("Remembered");
    }
    navigate("/Form");
  }

  return (
    <div className="container">
      <div className="frontpage-container">
        <h1 className="frontpage-title">Login</h1>
        <form className="frontpage-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="frontpageform--input"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="frontpageform--input"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="frontpageform--input"
            name="passwordConfirm"
            onChange={handleChange}
            value={formData.passwordConfirm}
          />

          <div className="frontpageform--marketing">
            <input
              id="okayToEmail"
              type="checkbox"
              name="rememberme"
              onChange={handleChange}
              checked={formData.rememberme}
            />
            <label htmlFor="okayToEmail">Remember Me</label>
          </div>
          <button className="frontpageform--submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default FrontPage;

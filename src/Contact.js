import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";
import Select from "react-select";
import country from "./resource/country.json";

export default function Contact() {
  const validation = { n: "", e: "", c: "" };
  const [formValues, setFormValues] = useState(validation);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { n, v } = e.target;
    setFormValues({ ...formValues, [n]: v });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.n) {
      errors.n = "Name is required!";
    }
    if (!values.e) {
      errors.e = "Email is required!";
    } else if (!regex.test(values.e)) {
      errors.e = "This is not a valid email format!";
    }
    if (!values.c) {
      errors.c = "Country is required";
    }
    return errors;
  };

  const options = country.country;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (isSubmit) {
      emailjs
        .sendForm("PinchPoint", "PinchPoint", form.current, "b4YvtEGJLegYv-SV7")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1 className="text-center text-capitalize">Contact us</h1>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="row mt-5">
          <div className="col m-3">
            <div className="row">
              <label>Name</label>
              <input
                type="text"
                name="userName"
                className="textField"
                value={formValues.n}
                onChange={handleChange}
              />
              <p>{formErrors.n}</p>
            </div>
            <div className="row">
              <label>Email</label>
              <input
                type="email"
                name="userEmail"
                className="textField"
                value={formValues.e}
                onChange={handleChange}
              />
              <p>{formErrors.e}</p>
            </div>
            <div className="row">
              <label>Country</label>
              <Select
                id="selectCountry"
                options={options}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.name}
                name="userCountry"
                className="textField text-dark"
                value={formValues.c}
                onChange={handleChange}
              />
              <p>{formErrors.c}</p>
            </div>
          </div>
          <div className="col m-3">
            <div className="row">
              <label>Message</label>
              <textarea name="message" className="textField textMessage" />
            </div>
            <div className="row float-right">
              <label className="m-2">
                The email goes to "iirtrtrt@gmail.com"
              </label>
              <input type="submit" value="Send" className="sendBtn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Style.css";
import Select from "react-select";
import country from "./resource/country.json";

export default function Contact() {
  const options = country.country;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
              <input type="text" name="userName" className="textField" />
            </div>
            <div className="row">
              <label>Email</label>
              <input type="email" name="userEmail" className="textField" />
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
              />
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

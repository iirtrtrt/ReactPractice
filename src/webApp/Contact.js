import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Style.css";
import Select from "react-select"; // select를 만들기 위해 react-select 추가
import country from "../resource/country.json"; // resource폴더의 country.json파일 불러오기

export default function Contact() {
  const options = country.country; // json파일을 options에 저장
  const emailForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("PinchPoint", "PinchPoint", emailForm.current, "b4YvtEGJLegYv-SV7") // emailJS의 아이디값들
      .then(
        (result) => {
          alert("The email is sent successfully.");
        },
        (error) => {
          alert("Failed");
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
      <form ref={emailForm} onSubmit={sendEmail}>
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
                getOptionLabel={(option) => option.name} // option.name 저장했던 내용에서 name의 값을 불러온다
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

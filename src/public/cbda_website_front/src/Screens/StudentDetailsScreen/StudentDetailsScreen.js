import React, { useState } from "react";
import "./StudentDetailsScreen.css";
import "bootstrap/dist/css/bootstrap.css";
import useForm from "../../hooks/formValidate";
import axios from "axios";
import {REGISTER_URL} from "../../api_links.js"
export default function StudentDetailsScreen() {
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    phonenumber: 0,
  });

  function noTextError() {
    axios({
      method:"POST",
      url:REGISTER_URL,
      data: {
        username:inputField.username,
        email:inputField.email,
        phone:inputField.phonenumber
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  const { handleChange, errors, handleSubmit } = useForm(noTextError);

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
    handleChange(e);
    
  };

  return (
    <div>
      <form onSubmit={noTextError}>
        <div className="mb-3">
          <label for="username" className="form-label">
            Your Name
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-control"
            onChange={inputsHandler}
            value={inputField.username}
          />
        </div>
        {errors.username && (
          <div id="usernameHelp" class="form-text">
            {errors.username}
          </div>
        )}
        <br />
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            onChange={inputsHandler}
            value={inputField.email}
          />
        </div>
        {errors.email && (
          <div id="emailHelp" class="form-text">
            {errors.email}
          </div>
        )}
        <br />
        <div className="mb-3">
          <label for="number" className="form-label">
            Phone Number
          </label>
          <input
            id="number"
            type="number"
            name="phonenumber"
            maxLength={10}
            className="form-control"
            onChange={inputsHandler}
            value={inputField.phonenumber}
          />
        </div>
        {errors.phonenumber && (
          <div id="phonenumberHelp" class="form-text">
            {errors.phonenumber}
          </div>
        )}
        <br />

        <button type="submit" value="submit" className="submit btn btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}

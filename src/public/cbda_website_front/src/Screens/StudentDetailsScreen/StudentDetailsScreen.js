import React, { useState } from "react";
import "./StudentDetailsScreen.css";
import "bootstrap/dist/css/bootstrap.css";
import useForm from "../../hooks/formValidate";

export default function StudentDetailsScreen() {
  const [inputField, setInputField] = useState({
    username: "",
    email: "",
    phonenumber: "",
    course: "",
  });

  const noTextError = () => {
    alert(inputField.phonenumber);
  };
  const { handleChange, values, errors, handleSubmit } = useForm(noTextError);

  const inputsHandler = (e) => {
    setInputField({ [e.target.name]: e.target.value });
    handleChange(e);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <label for="course" className="form-label">
          Course
        </label>
        <select
          id="course"
          className="form-select"
          placeholder="Course"
          value={inputField.course}
          onChange={inputsHandler}
        >
          <option value="BBA">BBA</option>
          <option value="BCom">BCom</option>
          <option value="LAW">Law</option>
          <option value="BscPSY">Bsc. Psychology</option>
          <option value="Oth">Other</option>
        </select>
        <br />
        <button type="submit" value="submit" className="submit btn btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
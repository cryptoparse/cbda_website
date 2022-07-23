import React from "react";
import "./WelcomeScreen.css";
import logo from "./../../assets/images/CBDA_logo_png.png";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function WelcomeScreen() {
  return (
    <div>
      <img src={logo} alt="Welcome!" />
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-lg">
          <Link to="/studentRegister">BEGIN</Link>
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;

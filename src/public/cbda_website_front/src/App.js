import React from "react";
import "./App.css";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import "bootstrap/dist/css/bootstrap.css";
import StudentDetailsScreen from "./Screens/StudentDetailsScreen/StudentDetailsScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center align-self-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomeScreen />} />
              <Route
                path="studentRegister"
                element={<StudentDetailsScreen />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

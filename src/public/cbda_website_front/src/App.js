import React from "react";
import "./App.css";
import WelcomeScreen from "./Screens/WelcomeScreen/WelcomeScreen";
import "bootstrap/dist/css/bootstrap.css";
import StudentDetailsScreen from "./Screens/StudentDetailsScreen/StudentDetailsScreen";
import IceBreakerFormScreen from "./Screens/IceBreakerFormScreen/IceBreakerFormScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./assets/images/CBDA_logo_png.png";
import ExcelAtExcelScreen from "./Screens/ExcelAtExcelScreen/ExcelAtExcelScreen";
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
              <Route path="iceBreaker" element={<IceBreakerFormScreen />} />

              <Route path="excelAtExcel" element={<ExcelAtExcelScreen />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

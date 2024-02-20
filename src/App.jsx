import React from "react";
import { Route, Routes } from "react-router-dom";
import Report from "./pages/Report";
import Students from "./pages/Students";
import StudentInfo from "./pages/Students/studentInfo";
import Groups from "./pages/Groups";
import Teachers from "./pages/Teachers";
import Attendance from "./pages/Attendance";
import Appeals from "./pages/Appeals";
import Private from "./private";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Private />}>
            <Route path="/xisobot" element={<Report />} />
            <Route path="/oquvchilar" element={<Students />} />
            <Route path="/oquvchilar/:id" element={<StudentInfo />} />
            <Route path="/ustozlar" element={<Teachers />} />
            <Route path="/guruhlar" element={<Groups />} />
            <Route path="/davomat" element={<Attendance />} />
            <Route path="/murojaatlar" element={<Appeals />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { logout } from "../../hooks";

const index = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="header w-100 ">
        <nav className="nav d-flex align-items-center justify-content-between py-2 px-4 bg-info ">
          <h1 className="">Education CRM</h1>
          <p className="text-dark fw-bold pt-4">27.01.2022</p>
          <div className="">
            <span className="extra bg-dark text-white p-2 rounded-circle mx-5 ">
              <i class="far fa-sun"></i>
            </span>
            <span
              className="extra bg-dark text-white p-2 rounded-circle"
              onClick={() => logout(navigate)}
            >
              <i class="fas fa-right-from-bracket"></i>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default index;

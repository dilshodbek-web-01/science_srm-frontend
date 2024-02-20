import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="sidebar w-25 bg-primary text-white py-3 min-vh-100 ">
        <div className="sidebar__up px-4">
          <div className="d-flex align-items-center justify-content-between">
            <span className="fs-4 p-1 bg-secondary rounded-circle">
              <i class="fas fa-address-book"></i>
            </span>
            <h5>
              CRM <br /> PANEL
            </h5>
            <span>
              <i class="fas fa-bars"></i>
            </span>
          </div>

          <hr />
        </div>

        <ul className="list-unstyled w-100">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black d-block px-4 py-3"
                  : "text-white d-block px-4 py-3 "
              }
              to="/xisobot"
            >
              <span className="me-3">
                {" "}
                <i class="fas fa-house fs-5"></i>{" "}
              </span>
              Xisobot
            </NavLink>
          </li>

          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black d-block px-4 py-3"
                  : "text-white d-block px-4 py-3 "
              }
              to="/oquvchilar"
            >
              <span className="me-3">
                {" "}
                <i class="fas fa-graduation-cap fs-5"></i>
              </span>
              O`quvchilar
            </NavLink>
          </li>

          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black d-block px-4 py-3"
                  : "text-white d-block px-4 py-3 "
              }
              to="/ustozlar"
            >
              <span className="me-3">
                <i class="fa-solid fa-person-chalkboard fs-5"></i>
              </span>
              Ustozlar
            </NavLink>
          </li>

          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black d-block px-4 py-3"
                  : "text-white d-block px-4 py-3 "
              }
              to="/guruhlar"
            >
              <span className="me-3">
                <i class="fas fa-users fs-5"></i>
              </span>
              Guruhlar
            </NavLink>
          </li>

          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black d-block px-4 py-3"
                  : "text-white d-block px-4 py-3 "
              }
              to="/davomat"
            >
              <span className="me-3">
                <i class="fas fa-id-card fs-5"></i>
              </span>
              Davomat
            </NavLink>
          </li>

          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-black d-block px-4 py-3"
                  : "text-white d-block px-4 py-3 "
              }
              to="/murojaatlar"
            >
              <span className="me-3">
                <i class="fas fa-comment-dots fs-5"></i>
              </span>
              Murojaatlar
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;

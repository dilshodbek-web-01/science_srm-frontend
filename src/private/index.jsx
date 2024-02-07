import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const index = () => {
  const auth = useAuth();

  return (
    <>
      {auth ? (
        <>
          <Navbar />
          <main className="d-flex">
            <Sidebar />
            <div className="w-75 bg-body-secondary">
              <Outlet />
            </div>
          </main>
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default index;

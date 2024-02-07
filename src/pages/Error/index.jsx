import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="error d-flex align-items-center justify-content-center mt-5">
        <div className="card shadow-lg p-5 ">
          <h1 className="text-center text-danger ">NOT FOUND</h1>
          <Link to={'/'} className="btn btn-success mt-4">Go to Home</Link>
        </div>
      </div>
    </>
  );
};

export default index;

import React from "react";
import "./style.scss";

const index = ({ id, pl }) => {
  return (
    <>
      <label htmlFor={id} className="labelWidth">
        <span className="searchIcon">
          <i class="fas fa-magnifying-glass searchClass"></i>
        </span>
        <input
          id={id}
          type="search"
          placeholder={pl}
          className="form-control border-0 rounded-5 w-100 textIndent"
        />
      </label>
    </>
  );
};

export default index;

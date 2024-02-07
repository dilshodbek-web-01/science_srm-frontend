import React from "react";
import './style.scss'

const index = ({ id, labelText, type, pl}) => {
  return (
    <>
      <label htmlFor={id} className="width">
        <strong>{labelText}</strong>
        <input
          id={id}
          type={type}
          placeholder={pl}
          className="form-control border-primary mt-1"
        />
      </label>
    </>
  );
};

export default index;

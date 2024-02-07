import React from "react";

const index = ({ id, labelText, type, pl, value, setValue }) => {
  return (
    <>
      <label htmlFor={id} className="w-100 mb-3">
        <strong>{labelText}</strong>
        <input
          id={id}
          type={type}
          placeholder={pl}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control border-primary mt-1"
        />
      </label>
    </>
  );
};

export default index;

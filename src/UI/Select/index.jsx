import React from "react";
import "./style.scss";

const index = ({ text, id, value, setValue }) => {
  return (
    <>
      <div className="width">
        <strong>{text}</strong>
        <select
          name={id}
          id={id}
          onChange={(e) => setValue(e.target.value)}
          className="w-100 py-2 px-2 mt-1 border-primary rounded"
        >
          <option value="1">{value}</option>
        </select>
      </div>
    </>
  );
};

export default index;

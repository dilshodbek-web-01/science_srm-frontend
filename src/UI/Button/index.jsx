import React from "react";

const index = ({ type, text, btnClass }) => {
  return (
    <>
      <button type={type} className={btnClass}>
        {text}
      </button>
    </>
  );
};

export default index;

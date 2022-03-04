import React from "react";

import './FormData.css'

function FormData(props) {
  const { labelName, name, type, placeholder, value, onChange } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{labelName}</label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormData;
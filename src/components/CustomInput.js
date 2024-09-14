import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, className } = props;
  return (
    <div>
      <input
        className={`form-control ${className}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;

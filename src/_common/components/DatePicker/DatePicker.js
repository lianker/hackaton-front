import React from "react";

const DatePicker = ({ id, label, divWrapperClass, inputClass, ...rest }) => (
  <div className={divWrapperClass}>
    <label htmlFor={id}>{label}</label>
    <input className={inputClass} {...rest} />
  </div>
);

export default DatePicker;

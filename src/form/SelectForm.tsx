import React, { useState } from "react";
import "./form.css";

const SelectForm = (props: any) => {
  const { label, onChange, errormessage, placeholder, options, ...inputProps } =
    props;
  const [selected, setSelected] = useState(false);

  const handleFocused = () => {
    setSelected(true);
  };
  return (
    <>
      <div className="inputContainer">
        <label>{label}</label>
        <select
          {...props}
          onChange={onChange}
          onBlur={handleFocused}
          focused={selected.toString()}
        >
          <option value="">{placeholder}</option>
          {options?.map((option: any) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span>{errormessage}</span>
      </div>
    </>
  );
};

export default SelectForm;

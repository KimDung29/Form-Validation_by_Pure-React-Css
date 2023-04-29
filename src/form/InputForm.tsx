import { useState } from "react";
import "./form.css";

const InputForm = (props: any) => {
  const { label, onChange, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocused = () => {
    setFocused(true);
  };
  return (
    <>
      <div className="inputContainer">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocused}
          focused={focused.toString()}
          onFocus={() =>
            inputProps.name === "confirmPassword" ? setFocused(true) : ""
          }
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};
export default InputForm;

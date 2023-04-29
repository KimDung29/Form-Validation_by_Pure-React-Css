import { useState } from "react";
import InputForm from "./InputForm";
import "./form.css";

import SelectForm from "./SelectForm";

interface ValueType {
  id: number;
  username: string;
  email: string;
  birthday: string;
  country: string;
  password: string;
  confirmPassword: string;
  [key: string]: any;
}

const Form_Validation = () => {
  const [values, setValues] = useState<ValueType>({
    id: 0,
    username: "",
    email: "",
    birthday: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      label: "Username",
      placeholder: "Enter your name",
      errorMessage:
        "Username should be 3-16 characters and should not includes any special characters.",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      errorMessage: "Email should be valid.",
      required: true,
    },
    {
      id: 3,
      type: "date",
      name: "birthday",
      label: "Birthday",
      errorMessage: "Please choose your birthday.",
      required: true,
    },
    {
      id: 4,
      type: "select",
      name: "country",
      label: "Country",
      placeholder: "Select your country",
      errormessage: "Choose your country",
      required: true,
      options: [
        { value: "usa", label: "USA" },
        { value: "canada", label: "Canada" },
        { value: "uk", label: "UK" },
        { value: "australia", label: "Australia" },
      ],
    },
    {
      id: 5,
      type: "text",
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      errorMessage:
        "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 characters",
      required: true,
      pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    },
    {
      id: 6,
      type: "text",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Enter your confirm password",
      errorMessage: "It should be same with your password.",
      required: true,
      pattern: values.password,
    },
  ];
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> & {
      target: { name: keyof ValueType; value: string };
    }
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <>
      <div className="form_validate">
        <form onSubmit={onSubmit}>
          <h2>Register</h2>
          {inputs.map((input) =>
            input.type !== "select" ? (
              <InputForm
                key={input.id}
                {...input}
                onChange={onChange}
                value={values[input.name]}
              />
            ) : (
              <SelectForm
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onSelectChange}
                options={input.options}
              />
            )
          )}

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
export default Form_Validation;

import React from "react";

import Input from "../../../../Component/Input/Input";
const Password = () => {
  return (
    <>
      <Input
        formSize="full"
        inputProps={{
          type: "text",
          name: "Password",
          id: "Password",
          label: "Password",
          placeholder: "Password",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
      />
      <Input
        formSize="full"
        inputProps={{
          type: "text",
          name: "ConfirmPassword",
          id: "ConfirmPassword",
          label: "Confirm Password",
          placeholder: "Confirm Password",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
      />
    </>
  );
};

export default Password;

import React from "react";

import Input from "../../../../Component/Input/Input";
import ErrorText from "../../../../Component/ErrorText/ErrorText";

const Password = () => {
  return (
    <>
      <ErrorText error={""} />
      <Input
        formSize="full"
        inputProps={{
          type: "password",
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
          type: "password",
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

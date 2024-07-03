import React from "react";

import Input from "../../../../Component/Input/Input";
import ErrorText from "../../../../Component/ErrorText/ErrorText";
const Username = () => {
  return (
    <>
      <ErrorText error={""} />

      <Input
        formSize="full"
        inputProps={{
          type: "text",
          name: "Username",
          id: "Username",
          label: "Username",
          placeholder: "Username",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
      />
    </>
  );
};

export default Username;

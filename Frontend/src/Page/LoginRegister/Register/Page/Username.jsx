import React from "react";

import Input from "../../../../Component/Input/Input";
const Username = () => {
  return (
    <>
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

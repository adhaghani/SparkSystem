import React from "react";

import Input from "../../../../Component/Input/Input";
import ErrorText from "../../../../Component/ErrorText/ErrorText";

const Personal = () => {
  return (
    <>
      <ErrorText error={""} />
      <Input
        formSize="half"
        inputProps={{
          type: "text",
          name: "FirstName",
          id: "FirstName",
          label: "First Name",
          placeholder: "First Name",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
        inputProps2={{
          type: "text",
          name: "LastName",
          id: "LastName",
          label: "Last Name",
          placeholder: "Last Name",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
      />
      <Input
        formSize="full"
        inputProps={{
          type: "phone",
          name: "PhoneNumber",
          id: "PhoneNumber",
          label: "Phone Number",
          placeholder: "Phone Number",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
      />
      <Input
        formSize="full"
        inputProps={{
          type: "email",
          name: "EmailAddress",
          id: "EmailAddress",
          label: "Email Address",
          placeholder: "Email Address",
          className: "input",
          autoComplete: "off"
          // value: Input.Username,
          // onChange: handleChange
        }}
      />
    </>
  );
};

export default Personal;

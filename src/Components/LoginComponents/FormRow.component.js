import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBInput } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FormRow = ({ type, label, value, handleChange}) => {
  return (
    <>
      <MDBInput
        className="form-row"
        wrapperClass="mb-4"
        size="lg"
        id="formControlLg"
        label={label}
        type={type}
        value={value}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default FormRow;

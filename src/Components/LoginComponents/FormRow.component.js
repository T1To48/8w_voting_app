import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBInput } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FormRow = ({ type, label, value, handleChange,name}) => {
  return (
    <>
      <MDBInput
        className="form-row"
        wrapperClass="mb-4"
        size="lg"
        label={label}
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        required
      />
    </>
  );
};

export default FormRow;

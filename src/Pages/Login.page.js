import React from 'react'
import Logo from "../Utilities/Logo.component"
import LoginImg from '../Assets/Images/login page img.jpg';
import { FormRow } from '../Components';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  return (
    <>
    <Logo/>
   <form className="form">
      
      <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={LoginImg}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <span className="h1 fw-bold mb-0">Logo</span>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Sign into your account
              </h5>

              <FormRow
                wrapperClass="mb-4"
                label="Email Address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <FormRow
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Login
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
    </form>
    </>
   
  )
}

export default Login
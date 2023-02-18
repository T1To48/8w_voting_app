import React, { useState,useEffect} from "react";

import Logo from "../Utilities/Logo.component";

import { PAGES } from "../Constants";
import { users } from "../Utilities/VotersData";

import LoginImg from "../Assets/Images/login page img.jpg";

import { FormRow } from "../Components";

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
import "../Styles/styled/LoginPage.css";

const [, voting] = PAGES;

const Login = ({ setPage }) => {
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [matchedUser, setMatchedUser] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    setMatchedUser(users.find((user)=>user.email===inputEmail && user.password===inputPassword))
    
  };
  
useEffect(()=>{
  if(matchedUser!==undefined){
    console.log(matchedUser.name)
  localStorage.setItem('userdata', JSON.stringify(matchedUser));
  //
  }
  else {alert("Incorrect Login Data")}
},[matchedUser])

useEffect(()=>{
  if(matchedUser && matchedUser!==""){
    setPage(voting)
  }
},[setPage,matchedUser])
  const handleEmailChange=(e)=>{
    setInputEmail(e.target.value)
  }
  const handlePasswordChange=(e)=>{
    setInputPassword(e.target.value)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <MDBContainer className="my-5">
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src={LoginImg}
                  alt="login form"
                  className="rounded-start w-100 login-pic"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="title">
                    <span className="h1 fw-bold mb-0">
                      <Logo logoClass="login-logo" />
                    </span>

                    <h5
                      className="fw-normal my-4 pb-3"
                      style={{ letterSpacing: "1px" }}
                    >
                      Sign into your account
                    </h5>
                  </div>
                  <FormRow
                    wrapperClass="mb-4"
                    label="Email Address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                    name="email"
                    handleChange={handleEmailChange}
                  />
                  <FormRow
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    name="password"
                    handleChange={handlePasswordChange}
                  />

                  <MDBBtn
                    type="submit"
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    
                  >
                    Login
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </form>
    </>
  );
};

export default Login;

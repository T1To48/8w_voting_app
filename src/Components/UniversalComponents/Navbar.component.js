import { useState } from 'react';
import { Logo } from "../index";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

const Navbar = ({ user, setUser }) => {
   const [showLogout, setShowLogout] = useState(false);
   const handleLogout = () => {
      setUser('');
      localStorage.removeItem('userData');
    };
  return (
    <>
      <MDBNavbar sticky light className="navbar">
        <MDBContainer fluid className="navbarContainer">
          <MDBNavbarBrand href="#">
            <Logo logoClass="navbar-logo" />
          </MDBNavbarBrand>
          <div className="btn-container">
            <button
              type="button"
              className="user-btn"
              onClick={() => setShowLogout(!showLogout)}
            >
              {user?.name}
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <MDBBtn
                className="logout-btn px-8"
                color="dark"
                size="lg"
                onClick={handleLogout}
              >
                Logout
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Navbar;

///////////////////////////////////////////

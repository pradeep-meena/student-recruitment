import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ position: "fixed", background: " rgb(38, 29, 167)" }}
      >
        <div className="container-fluid nav-conte">
          <div className="nav-content">
            <div className="nav-bran">
<<<<<<< HEAD
            <img 
             src="./img/logo.png"
              alt=""
             height={"90px"}
             width={"140px"}
             style={{marginTop:"-16px"}}
             />
              <div className="nav-taggle-icon text-white" onClick={toggleSidebar}>
                <a href="#" >
=======
              <a className="nav-brand text-white" href="#">
                <img
                  src={logo}
                  alt=""
                  style={{ width: "80px", height: "50px" }}
                />
              </a>
              <div
                className="nav-taggle-icon text-white"
                onClick={toggleSidebar}
              >
                <a href="#">
>>>>>>> 68693c0 (colorchange)
                  <i className="fa fa-bars text-white" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="nav-main-icon">
              <a className="bell-icon" href="#">
                <i className="fa-regular fa-bell text-white"></i>
              </a>
              <div className="dropdown profile-elemen">
                <div
                  className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="profile-element">
                    <div className="avatar online ">
                      <i className="fa-solid user-icon fa-circle-user text-white"></i>
                      <span className="text-dark ms-2"></span>
                    </div>
                  </div>
                </div>
                <ul className="dropdown-menu dropdown-menu-end ">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Update Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/changepassword">
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

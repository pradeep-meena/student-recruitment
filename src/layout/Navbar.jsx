import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <nav
        className="navbar"
        style={{
          position: "fixed",
          backgroundColor: "rgb(171, 171, 253)",
          color: "white",
        }}
      >
        <div className="container-fluid nav-conte">
          <div className="nav-content">
            <div className="nav-bran">
              <img
                src="./img/logo.png"
                alt="Logo"
                height={"90px"}
                width={"140px"}
                style={{ marginTop: "-16px" }}
              />
              <div
                className="nav-taggle-icon text-white"
                onClick={toggleSidebar}
              >
                <a href="#">
                  <i
                    className="fa fa-bars "
                    aria-hidden="true"
                    style={{ color: "black" }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="nav-main-icon">
              <a className="bell-icon" href="#" style={{ color: "black" }}>
                <i className="fa-regular fa-bell"></i>
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
                      <i
                        className="fa-solid user-icon fa-circle-user "
                        style={{ color: "black" }}
                      ></i>
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

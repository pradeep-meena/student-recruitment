import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserShield, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({
  login,
  setLogin,
  handleAdmin,
  handleStudent,
  handleCounselor,
}) => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  console.log(login);
  return (
    <>
      <main>
        <div className="login-container justify-content-center border p-4">
          <h1 className="fw-bold" style={{ color: "rgb(38, 29, 167)" }}>
            Student RECRUITMENT
          </h1>
          <h4 className="text-center mb-5">Welcome!</h4>

          {!showSignUp ? (
            // Login Form
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="Email"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="mb-3 mt-3">
                <input
                  type="password"
                  className="form-control p-3"
                  placeholder="Password"
                  required=""
                  style={{ color: "#578e7e" }}
                />
              </div>
              <div className="d-flex justify-content-end mb-4">
                <a href="#" className="text-decoration-none text-secondary">
                  Forgot Password?
                </a>
              </div>
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <Link style={{ color: "white" }} to="/dashboard">
                  <button
                    type="submit"
                    className="px-4 py-2 ms-1 shadow text-white border border-primary"
                    style={{ backgroundColor: "rgb(38, 29, 167)" }}
                  >
                    Login
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 ms-4 border border-primary"
                >
                  Sign Up
                </button>
              </div>

              {/* Additional Buttons */}
              <div className="d-flex align-items-center justify-content-center  mt-4 gap-2">
                <Link to={"/dashboard"} className="text-decoration-none">
                  <button
                    className="btn btn-outline-success w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{ height: "50px" }}
                    onClick={() => handleAdmin()}
                  >
                    <FaUserShield className="me-2" /> Admin
                  </button>
                </Link>
                <Link to={"/councelor"} className="text-decoration-none">
                  <button
                    className="btn btn-outline-danger w-100 mb-3 d-flex align-items-center justify-content-center"
                    style={{ height: "50px" }}
                    onClick={() => handleCounselor()}
                  >
                    <FaUserTie className="me-2" /> Counsellor
                  </button>
                </Link>
                <Link to={"/studentProfile"} className="text-decoration-none">
                  <button
                    className="btn btn-outline-primary  mb-3 d-flex align-items-center justify-content-center"
                    style={{ height: "50px",  width:"140px" }}
                    onClick={() => handleStudent()}
                  >
                    <FaUserGraduate className="me-2" /> Student
                  </button>
                </Link>
              </div>
            </form>
          ) : (
            // Sign-Up Form
            <form className="signup-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email *"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <select className="form-input">
                  <option value="" disabled selected>
                    Gender *
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  placeholder="City *"
                  className="form-input "
                />
              </div>
              <div className="form-row ">
                <input
                  type="text"
                  placeholder="State *"
                  className="form-input "
                />
                <input
                  type="text"
                  placeholder="Country *"
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <select className="form-input">
                  <option value="" disabled selected>
                    User Type *
                  </option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <input
                  type="password"
                  placeholder="Password *"
                  className="form-input"
                />
              </div>
              <div className="form-row ">
                <input
                  type="password"
                  placeholder="Confirm Password *"
                  className="form-input"
                />
              </div>
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <button
                  type="submit"
                  className="px-4 py-2 ms-1 btn-primary shadow"
                  style={{ border: "none" }}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 ms-4 "
                  style={{
                    border: "2px solid rgb(38, 29, 167)",
                    color: "rgb(38, 29, 167)",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Login;

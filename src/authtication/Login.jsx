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

  const handleCouncelor = () => {
    navigate("/dashboard");
  };
  console.log(login);
  return (
    <>
      <main className="d-flex justify-content-center align-items-center vh-100">
        <div className="login-container border p-4" style={{ maxWidth: "500px", width: "100%" }}>
          <h1 className="fw-bold text-center" style={{ color: "rgb(38, 29, 167)" }}>
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
              <div className="mb-3">
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
              <div className="d-flex justify-content-center">
                <Link to="/dashboard" className="text-decoration-none">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 me-2"
                  >
                    Login
                  </button>
                </Link>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="btn btn-outline-primary px-4 py-2"
                >
                  Sign Up
                </button>
              </div>

              {/* Additional Buttons */}
              <div className="d-flex align-items-center mt-4  w-100 justify-content-between">
                <Link to={"/dashboard"}>
                  <button
                    className="btn btn-outline-primary  mb-3 d-flex align-items-center justify-content-center"
                    style={{ height: "50px", width:"140px"}}
                    onClick={() => handleAdmin()}
                  >
                    <FaUserShield className="me-2" /> Admin
                  </button>
                </Link>
<<<<<<< HEAD
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
=======

                <button
                  className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center mb-3 mb-md-0 mx-md-2"
                  style={{ height: "50px" }}
                  onClick={handleCouncelor}
                >
                  <FaUserTie className="me-2" /> Counsellor
                </button>
                <Link to={"/studentProfile"}>
                  <button
                    className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
                    style={{ height: "50px" }}
                    onClick={handleStudent}
                  >
                    <FaUserGraduate className="me-2" /> Student
                  </button>
                </Link>
              </div>
            </form>
          ) : (
            // Sign-Up Form
            <form className="signup-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="form-control p-3"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="form-control p-3"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    placeholder="Email *"
                    className="form-control p-3"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Phone Number *"
                    className="form-control p-3"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <select className="form-control p-3">
                    <option value="" disabled selected>
                      Gender *
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="City *"
                    className="form-control p-3"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="State *"
                    className="form-control p-3"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    placeholder="Country *"
                    className="form-control p-3"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <select className="form-control p-3">
                    <option value="" disabled selected>
                      User Type *
                    </option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="password"
                    placeholder="Password *"
                    className="form-control p-3"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-3">
                  <input
                    type="password"
                    placeholder="Confirm Password *"
                    className="form-control p-3"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 me-2"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={toggleForm}
                  className="btn btn-outline-primary px-4 py-2"
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
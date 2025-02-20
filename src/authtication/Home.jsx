import React from "react";
import "./Home.css";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      {/* Header */}
      <header className="header">
        <div className="logo">MyCourse</div>
        <div className="auth-buttons">
          <Link to={"/login"} className="login-button">
            Login
          </Link>
          <Link to={"/login"} className="signup-button">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <h1>Our Courses</h1>
        <div className="course-cards">
          {/* Course Card 1 */}
          <div className="course-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Course 1"
              className="course-image"
            />
            <h2 className="course-title">Course 1</h2>
            <p className="course-description">
              This is a description for Course 1.
            </p>
            <p className="course-price">$99.99</p>
          </div>

          {/* Course Card 2 */}
          <div className="course-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Course 2"
              className="course-image"
            />
            <h2 className="course-title">Course 2</h2>
            <p className="course-description">
              This is a description for Course 2.
            </p>
            <p className="course-price">$129.99</p>
          </div>

          {/* Course Card 3 */}
          <div className="course-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Course 3"
              className="course-image"
            />
            <h2 className="course-title">Course 3</h2>
            <p className="course-description">
              This is a description for Course 3.
            </p>
            <p className="course-price">$79.99</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="contact-info">
          <p>Contact Us: contact@mycourse.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Course Street, Knowledge City, EduLand</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaClock, FaUserShield, FaCalendarAlt } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";


const statistics = [
  { value: 165, label: "Enquiries", description: "Total number of enquiries received", bgColor: "bg-dark text-white" },
  { value: 7, label: "Profiles Created", description: "Total number of profiles created", bgColor: "bg-danger text-white" },
  { value: 4, label: "Applications Submitted", description: "Total number of applications submitted", bgColor: "bg-warning text-white" },
  { value: 57.14, label: "Current Conversion Rate", description: "Rate of profiles against applications submitted", bgColor: "bg-success text-white" },
  { value: 0, label: "Unassigned Applications", description: "Applications that have not been assigned", bgColor: "bg-primary text-white" },
];

const Profile = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center justify-content-center">
        {/* User Profile Section */}
        <div className="col-lg-5 col-md-6 d-flex align-items-center flex-column text-center text-md-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU9qU2WY65zm3oC0SoYEPoNPruKks61aIS8g&s"
            alt="User"
            className="rounded-circle mb-3" 
            style={{ border: "1px solid gray", height: "150px", width: "150px" }}
          />
          <div>
            <h4>Welcome Back, Hardip Brown</h4>
            <p><FaUser className="me-2" /> <strong>Logged in as:</strong> hardip_superadmin@heiapply.com</p>
            <p><FaClock className="me-2" /> <strong>Last logged in on:</strong> Wed 2nd of Sep 2020 01:30:50 PM</p>
            <p><FaUserShield className="me-2" /> <strong>Account Level:</strong> System Admin</p>
            <p><FaCalendarAlt className="me-2" /> <strong>Current recruitment cohort:</strong> 2020</p>
          </div>
        </div>

        {/* Search Box Section */}
        <div className="col-lg-5 col-md-6">
          <div className="card p-3 shadow-sm">
            <h5 className="mb-3">Quick Global Search</h5>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search applicants by first name, surname or e-mail address"
              />
              <button className="btn btn-danger">Search</button>
            </div>
          </div>
        </div>
      </div>
       <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4><FaTrophy className="me-2" /> Key Platform Statistics</h4>
              <div>
                <label className="me-2 fw-bold">Selected Cohort:</label>
                <select className="form-select d-inline-block w-auto">
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </select>
              </div>
            </div>
            
            <div className="row" >
              {statistics.map((stat, index) => (
                <div className="col-md-2 col-sm-6 mb-3"  key={index} >
                  <div className={`card p-3 shadow-sm text-center  ${stat.bgColor}`} style={{height:"200px",}} >
                    <h3 className="fw-bold">{stat.value}</h3>
                    <p className="mb-0 fw-bold">{stat.label}</p>
                    <small>{stat.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
};

export default Profile;
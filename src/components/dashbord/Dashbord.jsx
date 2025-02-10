import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);


const metrics = [
  { label: "Total Applicants", value: 122 },
  { label: "Shortlisted Candidates", value: 77 },
  { label: "Hired Candidates", value: 16 },
  { label: "Rejected Candidates", value: 13 },
  { label: "Time to Hire", value: "16 Days" },
  { label: "Cost to Hire", value: "$175" },
];

const applicationsByDepartment = {
  labels: ["Accounts", "Analytics", "HR", "IT", "Marketing", "Operations"],
  datasets: [
    {
      label: "Applications",
      data: [22, 8, 12, 24, 18, 16],
      backgroundColor: "#003366",
    },
  ],
};

const applicantsData = [
  { name: "John", email: "Applicant1@gmail.com", job: "Process Associate", date: "8/6/2023", status: "Hired" },
  { name: "Steve", email: "Applicant2@gmail.com", job: "Executive Officer", date: "8/11/2023", status: "Applications" },
  { name: "Clarke", email: "Applicant3@gmail.com", job: "Analyst", date: "8/11/2023", status: "Applications" },
  { name: "Smith", email: "Applicant4@gmail.com", job: "Developer", date: "8/11/2023", status: "Applications" },
  { name: "Add Text Here", email: "Applicant5@gmail.com", job: "Associate", date: "8/11/2023", status: "Applications" },
 
];
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const openPositions = {
  labels: ["Analytics", "Accounts", "HR", "Operations", "Marketing", "IT"],
  datasets: [
    {
      data: [5, 8, 10, 9, 7, 11],
      backgroundColor: ["#1e88e5", "#43a047", "#fbc02d", "#8e24aa", "#ff7043", "#3949ab"],
    },
  ],
};

const applicationsBySource = {
  labels: ["LinkedIn", "Indeed", "Company Website", "Referrals"],
  datasets: [
    {
      data: [40, 30, 25, 15],
      backgroundColor: ["#1e88e5", "#43a047", "#fbc02d", "#8e24aa"],
    },
  ],
};

const recruitmentFunnel = {
  labels: ["Applied", "Screening", "Interview", "Hired"],
  datasets: [
    {
      data: [50, 30, 25, 19],
      backgroundColor: ["#1e88e5", "#43a047", "#fbc02d", "#8e24aa"],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">HR Recruitment Dashboard</h2>
      
      {/* Metrics Cards - Responsive */}
      <div className="row text-center">
        {metrics.map((metric, index) => (
          <div className="col-6 col-md-4 col-lg-2 mb-3" key={index}>
            <div className="card shadow-sm text-white bg-info">
              <div className="card-body" style={{height:"100px"}}>
                <h4 className="fw-bold">{metric.value}</h4>
                <p className="mb-0">{metric.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Table */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <h5 className="text-center bg-primary text-white p-2" >Application Received by Department</h5>
          <Bar data={applicationsByDepartment} />
        </div>
        <div className="col-lg-6">
          <h5 className="text-center bg-primary text-white p-2">Lead & Inquiry Management
          </h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th> Name</th>
                  <th>Email</th>
                  <th> Phone</th>
                  <th>Status</th>
                  <th>Assigned_to</th>
                </tr>
              </thead>
              <tbody>
                {applicantsData.map((applicant, index) => (
                  <tr key={index}>
                    <td>{applicant.name}</td>
                    <td>{applicant.email}</td>
                    <td>{applicant.job}</td>
                    <td>{applicant.date}</td>
                    <td>{applicant.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container mt-4">
            <h2 className="text-center mb-4">HR Recruitment Metrics</h2>
            
            <div className="row">
              <div className="col-lg-3">
                <h5 className="text-center bg-primary text-white p-2">Open Position by Department</h5>
                <Pie data={openPositions} />
              </div>
              <div className="col-lg-3">
                <h5 className="text-center bg-primary text-white p-2">Application Received by Source</h5>
                <Bar data={applicationsBySource} />
              </div>
              <div className="col-lg-3">
                <h5 className="text-center bg-primary text-white p-2">Recruitment Funnel</h5>
                <Bar data={recruitmentFunnel} />
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center bg-info text-white p-4">
                <h5 className="text-danger fw-bold">79% Offer Acceptance Ratio</h5>
                <p className="fs-5">19 Offers Accepted</p>
                <p className="fs-5">24 Offers Provided</p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Dashboard;

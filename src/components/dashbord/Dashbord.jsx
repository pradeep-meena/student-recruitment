import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

// Register Chart.js components only once
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const metrics = [
    { label: "Total Applicants", value: 122 },
    { label: "Shortlisted Candidates", value: 77 },
    { label: "Hired Candidates", value: 16 },
    { label: "Rejected Candidates", value: 29 },
  ];

  const barChartData = {
    labels: metrics.map((metric) => metric.label),
    datasets: [
      {
        label: "Candidates",
        data: metrics.map((metric) => metric.value),
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Accepted", "Pending", "Rejected"],
    datasets: [
      {
        data: [77, 45, 29],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
        hoverOffset: 4,
      },
    ],
  };

  const data = {
    leads: 74,
    employees: 4,
    organizations: 10,
    people: 64,
    participants: 12,
    owner: 3,
    collaborator: 3,
    both: 3,
    sentProposals: 3,
    acceptedProposals: 2,
    sendingRate: 10,
    acceptanceRate: 66,
  };

  const doughnutData = (rate) => ({
    datasets: [
      {
        data: [rate, 100 - rate],
        backgroundColor: ["#3B82F6", "#E5E7EB"],
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📊  Student Recruitment Dashboard</h2>

      {/* Metrics Overview */}
      <div className="row text-center">
        {metrics.map((metric, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">{metric.label}</h5>
                <p className="display-6 fw-bold text-primary">{metric.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow-sm p-3">
            <h5 className="text-center">📌 Candidates Overview</h5>
            <Bar data={barChartData} />
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5 className="text-center">🎯 Hiring Distribution</h5>
            <Doughnut data={doughnutChartData} />
          </div>
        </div>
      </div>
      <div className="container mt-4">
      <div className="row g-4">
        {/* Total Leads */}
        <div className="col-md-6">
          <div className="card p-3 shadow-sm hover-effect">
            <h5>Total Leads <span className="badge bg-primary">{data.leads}</span></h5>
            <div className="mt-3">
              <div className="d-flex align-items-center mb-2">
                <div className="icon-box me-2"><i className="bi bi-briefcase-fill"></i></div>
                <span>{data.organizations} Total organizations</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="icon-box me-2"><i className="bi bi-people-fill"></i></div>
                <span>{data.people} People</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="icon-box me-2"><i className="bi bi-chat-dots-fill"></i></div>
                <span>{data.participants} Total participants</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card p-3 shadow-sm hover-effect h-100">
            <h3>{data.sentProposals}</h3>
            <br/>
            <span>Total sent proposal</span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow-sm hover-effect h-100 ">
            <h3>{data.acceptedProposals}</h3>
            <br/>
            <span>Total accepted proposal</span>
          </div>
        </div>
        {/* Total Employees */}
        

        {/* Proposals */}
        
        <div className="col-md-6">
          <div className="card p-3 shadow-sm hover-effect">
            <h5>Total Employees <span className="badge bg-primary">{data.employees}</span></h5>
            <div className="mt-3">
              <div className="d-flex align-items-center mb-2">
                <div className="icon-box me-2"><i className="bi bi-person-badge-fill"></i></div>
                <span>{data.owner} Work as owner</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="icon-box me-2"><i className="bi bi-person-plus-fill"></i></div>
                <span>{data.collaborator} Work as collaborator</span>
              </div>
              <div className="d-flex align-items-center">
                <div className="icon-box me-2"><i className="bi bi-people-fill"></i></div>
                <span>{data.both} Work as both owner and collaborator</span>
              </div>
            </div>
          </div>
        </div>
        {/* Progress Charts */}
        <div className="col-md-3 ">
          <div className="card p-3 shadow-sm hover-effect text-center">
            <Doughnut data={doughnutData(data.sendingRate)} />
            <p className="mt-2">Sending rate</p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card p-3 shadow-sm hover-effect text-center">
            <Doughnut data={doughnutData(data.acceptanceRate)} />
            <p className="mt-2">Acceptance rate</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;

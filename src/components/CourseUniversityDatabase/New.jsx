import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

// Sample data for student pipeline
const studentPipelineData = [
  { stage: "Inquiries", count: 120 },
  { stage: "Applications", count: 80 },
  { stage: "Conversions", count: 40 },
];

// Sample data for recruitment agent performance
const agentPerformanceData = [
  { name: "Agent A", applications: 50, conversions: 20 },
  { name: "Agent B", applications: 40, conversions: 15 },
  { name: "Agent C", applications: 30, conversions: 10 },
];

// 📌 Student Pipeline Component
const StudentPipelineReport = () => {
  const chartData = {
    labels: studentPipelineData.map((item) => item.stage),
    datasets: [
      {
        label: "Students",
        data: studentPipelineData.map((item) => item.count),
        backgroundColor: ["#3498db", "#f39c12", "#2ecc71"],
      },
    ],
  };

  return (
    <div className="card p-4 mb-4">
      <h4>📊 Student Pipeline Report</h4>
      <Bar data={chartData} />
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Stage</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {studentPipelineData.map((item, index) => (
            <tr key={index}>
              <td>{item.stage}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 📌 Recruitment Agent Performance Component
const AgentPerformance = () => {
  return (
    <div className="card p-4 mb-4">
      <h4>🔍 Recruitment Agent Performance</h4>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Agent Name</th>
            <th>Applications</th>
            <th>Conversions</th>
          </tr>
        </thead>
        <tbody>
          {agentPerformanceData.map((agent, index) => (
            <tr key={index}>
              <td>{agent.name}</td>
              <td>{agent.applications}</td>
              <td>{agent.conversions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 📌 Customizable Analytics Dashboard Component
const AnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState("pipeline");

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📈 Reporting & Analytics Dashboard</h2>

      {/* Dashboard Navigation */}
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn btn-outline-primary me-2 ${
            activeTab === "pipeline" && "active"
          }`}
          onClick={() => setActiveTab("pipeline")}
        >
          Student Pipeline
        </button>
        <button
          className={`btn btn-outline-primary ${
            activeTab === "agents" && "active"
          }`}
          onClick={() => setActiveTab("agents")}
        >
          Agent Performance
        </button>
      </div>

      {/* Display Components Based on Active Tab */}
      {activeTab === "pipeline" && <StudentPipelineReport />}
      {activeTab === "agents" && <AgentPerformance />}
    </div>
  );
};

export default AnalyticsDashboard;

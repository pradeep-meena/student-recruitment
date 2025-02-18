import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample data for universities and programs
const universities = [
  {
    id: 1,
    name: "University of California, Berkeley",
    programs: [
      {
        id: 101,
        name: "Computer Science",
        eligibility: "Bachelor's degree in related field",
        fee: "$15,000 per semester",
      },
      {
        id: 102,
        name: "Business Administration",
        eligibility: "Bachelor's degree, GMAT score",
        fee: "$20,000 per semester",
      },
    ],
  },
  {
    id: 2,
    name: "Massachusetts Institute of Technology",
    programs: [
      {
        id: 201,
        name: "Artificial Intelligence",
        eligibility: "Bachelor's degree in Computer Science",
        fee: "$18,000 per semester",
      },
      {
        id: 202,
        name: "Mechanical Engineering",
        eligibility: "Bachelor's degree in Engineering",
        fee: "$16,000 per semester",
      },
    ],
  },
  {
    id: 3,
    name: "Stanford University",
    programs: [
      {
        id: 301,
        name: "Data Science",
        eligibility: "Bachelor's degree in STEM field",
        fee: "$22,000 per semester",
      },
      {
        id: 302,
        name: "Law",
        eligibility: "Bachelor's degree, LSAT score",
        fee: "$25,000 per semester",
      },
    ],
  },
];

function CourseUniversityDatabase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState(
    universities
  );

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = universities.filter(
      (uni) =>
        uni.name.toLowerCase().includes(term) ||
        uni.programs.some((program) =>
          program.name.toLowerCase().includes(term)
        )
    );
    setFilteredUniversities(filtered);
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div className="container mt-4">
        <h2 className="text-center">
          <h1
            className="text-center mb-4"
            style={{ color: "#2c3e50", fontWeight: "bold" }}
          >
            Course & University Database
          </h1>
        </h2>
        {/* Search & Filter */}
        <div className="row mb-3">
          <div className="col-md-4">
            <input
              type="text"
              id="searchInput"
              className="form-control"
              placeholder="🔍 Search universities..."
              onkeyup="searchTable()"
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              id="filterCategory"
              onchange="filterTable()"
            >
              <option value="">Filter by Program</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
              <option value="Medicine">Medicine</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
        </div>
        {/* Add Course Button */}
        <button className="btn btn-success mb-3" onclick="addRow()">
          ➕ Add Course
        </button>
        {/* Universities Table */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>🏫 University Name</th>
                <th>🎓 Program</th>
                <th>📜 Eligibility Criteria</th>
                <th>💰 Fee</th>
                <th>⚡ Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUniversities.map((uni) =>
                uni.programs.map((program) => (
                  <tr key={program.id}>
                    <td>{uni.name}</td>
                    <td>{program.name}</td>
                    <td>{program.eligibility}</td>
                    <td>{program.fee}</td>
                    <td>
                      <button className="btn btn-primary btn-sm me-2">
                        Apply
                      </button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by university or program..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ borderRadius: "20px", border: "2px solid #3498db" }}
        />
      </div>

      {/* University List */}
      {filteredUniversities.map((university) => (
        <div
          key={university.id}
          className="card mb-4"
          style={{ border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "#3498db", color: "#fff" }}
          >
            <h3>{university.name}</h3>
          </div>
          <div className="card-body">
            {university.programs.map((program) => (
              <div
                key={program.id}
                className="mb-3 p-3"
                style={{
                  backgroundColor: "#ecf0f1",
                  borderRadius: "10px",
                  borderLeft: "5px solid #3498db",
                }}
              >
                <h5 style={{ color: "#2c3e50" }}>{program.name}</h5>
                <p style={{ color: "#34495e" }}>
                  <strong>Eligibility:</strong> {program.eligibility}
                </p>
                <p style={{ color: "#34495e" }}>
                  <strong>Fee:</strong> {program.fee}
                </p>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#3498db",
                    color: "#fff",
                    borderRadius: "20px",
                    padding: "5px 20px",
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseUniversityDatabase;

import React from "react";
import { Bar } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function MultiYearContracting() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="mb-4 text-start">
        <div className="d-flex justify-content-between">  
          <h3 className="fw-bold"
          style={{
            lineHeight: "42px",
          }}
        >
          Multi-Year Contracting
        </h3>
       <Link to="/multiyearedit">
       <button className="p-2 rounded "style={{backgroundColor:'#578e7e',color:'white',border:'none', width:'120px'}}>Add Multi Year</button>
       </Link>
        </div>
      

        {/* Summary Cards */}
        <div className="row text-center mb-4 mt-4">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div
              className="card sowcard text-white fw-semibold h-100 d-flex justify-content-center"
              style={{
                backgroundColor: "#ff6567",
                textAlign: "center",
                padding: "5px",
                borderRadius: "10px",
                fontSize: "1.2rem",
              }}
            >
              <div className="content d-flex justify-content-start align-items-center p-2">
                <div className="icon">
                  <i
                    className="fa-regular fa-user rounded-circle p-3"
                    style={{ backgroundColor: "rgb(244, 208, 209)" }}
                  ></i>
                </div>
                <div className="text ms-4 text-start fw-semibold">
                  <h2 className="card-title mb-0 fw-bold">7</h2>
                  <p>Saving from Multi-Year Contract</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div
              className="card sowcard text-white fw-semibold h-100 d-flex justify-content-center"
              style={{
                backgroundColor: "#ff9318",
                textAlign: "center",
                padding: "5px",
                borderRadius: "10px",
                fontSize: "1.2rem",
              }}
            >
              <div className="content d-flex justify-content-start align-items-center p-2">
                <div className="icon">
                  <i
                    className="fa-regular fa-user rounded-circle p-3"
                    style={{ backgroundColor: "rgb(248, 208, 162)" }}
                  ></i>
                </div>
                <div className="text ms-4 text-start">
                  <h2 className="card-title mb-0 fw-bold">40</h2>
                  <p>Contracts Under Review</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h5
          style={{
            fontFamily: "Urbanist",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          <u>Total Contracts Eligible For Multi-Year Agreements</u>
        </h5>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Vendor Name</th>
              <th>Supplier Name </th>
              <th>Current Contract Duration</th>
              <th>Multi-Year Proposal</th>
              <th>Saving Estimate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                "Vendor Name": "Supplier A",
                "Supplier Name": "Supplier W",
                "Current Contract Duration": "1 year",
                "Multi-Year Proposal": "3 years at $50,000/year",
                "Saving Estimate": "$10,000",
                "Status": "Proposed",
              },
              {
                "Vendor Name": "Supplier B",
                "Supplier Name": "Supplier X",
                "Current Contract Duration": "2 years",
                "Multi-Year Proposal": "5 years at $40,000/year",
                "Saving Estimate": "$20,000",
                "Status": "Approved",
              },
              {
                "Vendor Name": "Supplier C",
                "Supplier Name": "Supplier Y",
                "Current Contract Duration": "1 year",
                "Multi-Year Proposal": "3 years at $45,000/year",
                "Saving Estimate": "$12,000",
                "Status": "Proposed",
              },
              {
                "Vendor Name": "Supplier D",
                "Supplier Name": "Supplier A",
                "Current Contract Duration": "3 years",
                "Multi-Year Proposal": "5 years at $38,000/year",
                "Saving Estimate": "$15,000",
                "Status": "Implemented",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row["Vendor Name"]}</td>
                <td>{row["Supplier Name"]}</td>
                <td>{row["Current Contract Duration"]}</td>
                <td>{row["Multi-Year Proposal"]}</td>
                <td>{row["Saving Estimate"]}</td>
                <td>{row["Status"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center my-3">
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a
                className="page-link text-secondary"
                href="#"
                style={{ border: "none" }}
              >
                Previous
              </a>
            </li>
            <li className="page-item active mx-3">
              <a
                className="page-link rounded text-white fw-semibold"
                href="#"
                style={{ backgroundColor: "#0096d4" }}
              >
                1
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link rounded text-dark fw-semibold"
                href="#"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}
              >
                2
              </a>
            </li>
            <li className="page-item mx-3">
              <a
                className="page-link rounded text-dark fw-semibold"
                href="#"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}
              >
                3
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link text-secondary"
                href="#"
                style={{ border: "none" }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Chart Section */}
      <div className="mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <Bar
              data={{
                labels: ["2017", "2018", "2019", "2020"],
                datasets: [
                  {
                    label: "Supplier X",
                    data: [46000, 37000, 36000, 40000],
                    backgroundColor: "#518bbb",
                  },
                  {
                    label: "Supplier Y",
                    data: [27000, 23000, 25000, 18000],
                    backgroundColor: "#c47088",
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Supplier Spend Over Time",
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: (value) => `$${value / 1000}K`, // Format y-axis ticks
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiYearContracting;

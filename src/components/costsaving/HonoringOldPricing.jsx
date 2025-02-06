import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Link } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function HonoringOldPricing() {
  const data = [
    {
      "Vendor Name": "Supplier X",
      "Supplier Name":"supplier 1",
      "Product/Service Name": "Office Supplies",
      "Old Pricing": "$20/unit",
      "Current Quotation": "$22/unit",
      "Saving from Honoring Old Pricing": "$4,000",
      "Status": "Pending",
    },
    {
      "Vendor Name": "Supplier X",
      "Supplier Name":"Supplier 2",
      "Product/Service Name": "Laptops",
      "Old Pricing": "$800/unit",
      "Current Quotation": "$850/unit",
      "Saving from Honoring Old Pricing": "$10,000",
      "Status": "Approved",
    },
    {
      "Vendor Name": "Supplier Y",
      "Supplier Name":"Supplier 3",
      "Product/Service Name": "Office Supplies",
      "Old Pricing": "$20/unit",
      "Current Quotation": "$22/unit",
      "Saving from Honoring Old Pricing": "$4,000",
      "Status": "Pending",
    },
    {
      "Vendor Name": "Supplier X",
      "Supplier Name":"Supplier 4",
      "Product/Service Name": "Office Supplies",
      "Old Pricing": "$20/unit",
      "Current Quotation": "$22/unit",
      "Saving from Honoring Old Pricing": "$4,000",
      "Status": "Denied",
    },
  ];

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
          Honoring Old Pricing
        </h3>
        <Link to="/addoldpricehonering">
        <button className="p-2 rounded "style={{backgroundColor:'#578e7e',color:'white',border:'none', width:'120px'}}>Add Honoring</button>
        </Link>
        </div>
        <h5 className="mt-5"
          style={{
            lineHeight: "24px",
          }}
        >
          <u className="fw-bold">Historical Contracts</u>
        </h5>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Vendor Name</th>
              <th>Supplier Name</th>
              <th>Product/Service Name</th>
              <th>Old Pricing</th>
              <th>Current Quotation</th>
              <th>Saving from Honoring Old Pricing</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row["Vendor Name"]}</td>
                <td>{row["Supplier Name"]}</td>
                <td>{row["Product/Service Name"]}</td>
                <td>{row["Old Pricing"]}</td>
                <td>{row["Current Quotation"]}</td>
                <td>{row["Saving from Honoring Old Pricing"]}</td>
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
              <a className="page-link text-secondary" href="#" style={{ border: "none" }}>
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
              <a className="page-link text-secondary" href="#" style={{ border: "none" }}>
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
                    label: "Spend with Supplier X",
                    data: [46000, 37000, 36000, 40000],
                    backgroundColor: "#518bbb",
                  },
                  {
                    label: "Spend with Supplier Y",
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
                  tooltip: {
                    callbacks: {
                      label: (context) => `$${context.raw / 1000}K`,
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 60000,
                    ticks: {
                      stepSize: 10000,
                      callback: (value) => `$${value / 1000}K`,
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

export default HonoringOldPricing;

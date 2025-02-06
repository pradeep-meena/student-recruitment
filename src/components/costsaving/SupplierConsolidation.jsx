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

function SupplierConsolidation() {
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
          Supplier Consolidation
        </h3>
        <Link to="/supplieredit">
        <button className="p-2 rounded "style={{backgroundColor:'#578e7e',color:'white',border:'none', width:'120px'}}>Add Supplier</button>
        </Link>
        </div>
        <h5 className="mt-5"
          style={{
            lineHeight: "24px",
          }}
        >
          <u  className="fw-bold">Total Suppliers Identified For Consolidation</u>
        </h5>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Category Name</th>
              <th>Supplier Name</th>
              <th>Current Suppliers</th>
              <th>Spend with Each Supplier</th>
              <th>Recommended Supplier</th>
              <th>Potential Savings</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                category: "Office Furniture",
                SupplierName:"Supplier A",
                suppliers: "Supplier X, Supplier Y",
                spend: "$50,000, $40,000",
                recommended: "Supplier X",
                savings: "$10,000",
                status: "New Opportunity",
              },
              {
                category: "IT Software",
                SupplierName:"Supplier B",
                suppliers: "Supplier A, Supplier B",
                spend: "$150,000, $130,000",
                recommended: "Supplier A",
                savings: "$10,000",
                status: "Under Review",
              },
              {
                category: "Office Furniture",
                SupplierName:"Supplier C",
                suppliers: "Supplier X, Supplier Y",
                spend: "$150,000, $130,000",
                recommended: "Supplier C",
                savings: "$10,000",
                status: "New Opportunity",
              },
              {
                category: "Marketing Services",
                SupplierName:"Supplier D",
                suppliers: "Supplier M, Supplier N, Supplier O",
                spend: "$60,000, $40,000, $30,000",
                recommended: "Supplier X",
                savings: "$10,000",
                status: "Approved",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.category}</td>
                <td>{row.SupplierName}</td>
                <td>{row.suppliers}</td>
                <td>{row.spend}</td>
                <td>{row.recommended}</td>
                <td>{row.savings}</td>
                <td>{row.status}</td>
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
                    data: [46000, 37000, 36000, 40000],
                    backgroundColor: "#518bbb",
                    label: "Spend with Supplier X",
                  },
                  {
                    data: [27000, 23000, 25000, 18000],
                    backgroundColor: "#c47088",
                    label: "Spend with Supplier Y",
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
                    max: 60000,
                    ticks: {
                      stepSize: 10000,
                      callback: (value) =>
                        `$${new Intl.NumberFormat("en-US", {
                          notation: "compact",
                          compactDisplay: "short",
                        }).format(value)}`,
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

export default SupplierConsolidation;

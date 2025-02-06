import React from 'react'

function CostOther() {
  return (
    <div>
      <div className="costother-section my-5">
        <div className="container">
            <h3>Other For Saving Apporchnity</h3>
              {/* Table Section */}
      <div className="table-responsive mt-4">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>Category Name</th>
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
                category: "Other",
                suppliers:  " Other Supplier",
                spend: "$50,000, $40,000",
                recommended: "Supplier X",
                savings: "$10,000",
                status: "New Opportunity",
              },
              {
                category: " Other",
                suppliers: " Other Supplier A",
                spend: "$150,000, $130,000",
                recommended: "Supplier A",
                savings: "$10,000",
                status: "Under Review",
              },
              {
                category: "Other",
                suppliers: "Other Supplier Y",
                spend: "$150,000, $130,000",
                recommended: "Supplier C",
                savings: "$10,000",
                status: "New Opportunity",
              },
              {
                category: "Other",
                suppliers: "Other Supplier N",
                spend: "$60,000, $40,000, $30,000",
                recommended: "Supplier X",
                savings: "$10,000",
                status: "Approved",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.category}</td>
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
        </div>
      </div>
    </div>
  )
}

export default CostOther

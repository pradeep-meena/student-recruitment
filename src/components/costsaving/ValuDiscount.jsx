import React from 'react'

const ValuDiscount = () => {
  return (
<>
<div className="container">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className=" heading">
      <h2 className="mb-3 fw-bold">Volume Discounts</h2>

    
    </div>

  </div>
  <div className="totalheading mt-4">
    <h5>
      <u className='fw-bold'>Total Estimated Savings</u>
    </h5>
  </div>
  <div className="table-responsive mt-3">
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>Category Name</th>
          <th>Supplier Name</th>
          <th>
            Historical Volume <br /> Purchased (last 12 months)
          </th>
          <th>Discount Threshold</th>
          <th>Estimated Savings</th>
          <th>Recommended Supplier</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Office Supplies</td>
          <td>Supplier A</td>
          <td>10,000 units</td>
          <td>12,000 units (10%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>New Opportunity</td>
        </tr>
        <tr>
          <td>Laptop Computers</td>
          <td>Supplier B</td>
          <td>200 units</td>
          <td>250 units (8%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>New Opportunity</td>
        </tr>
        <tr>
          <td>Cloud Storage</td>
          <td>Supplier C</td>
          <td>500 TB</td>
          <td>600 TB (15%)</td>
          <td>$2,000</td>
          <td>Supplier B</td>
          <td>Under Review</td>
        </tr>
        <tr>
          <td>Office Supplies</td>
          <td>Supplier D</td>
          <td>10,000 units</td>
          <td>12,000 units (10%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Office Supplies</td>
          <td>Supplier X</td>
          <td>10,000 units</td>
          <td>12,000 units (10%)</td>
          <td>$2,000</td>
          <td>Supplier C</td>
          <td>New Opportunity</td>
        </tr>
        <tr>
          <td>Cloud Storage</td>
          <td>Supplier Y</td>
          <td>500 TB</td>
          <td>600 TB (15%)</td>
          <td>$2,000</td>
          <td>Supplier B</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>Laptop Computers</td>
          <td>Supplier Z</td>
          <td>200 units</td>
          <td>250 units (8%)</td>
          <td>$2,000</td>
          <td>Supplier A</td>
          <td>Under Review</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* Pagination */}
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
</>
  )
}

export default ValuDiscount

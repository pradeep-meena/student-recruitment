import React from "react";
import { Link } from 'react-router-dom'

const Servicesow = () => {
 
  return (
    <>
    <div className="service-sow-edit-section">
    <div className="container">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className="heading">
      <h3 className="mb-3 fw-bold">Service/SOW Consolidation</h3>
    </div>
    <div className="mt-3 mt-md-0">
      <Link to="/sowedit">
      <button
        type="button"
        className="btn ms-3 px-4 py-1 rounded-3 fw-semibold text-white "
        style={{ backgroundColor: "#578e7e" }}
      >
        <span>
          <i className="fa-solid fa-book me-2" />
        </span>{" "}
        Create New SOW
      </button>
      </Link>
    </div>
  </div>
  {/* Summary Cards */}
  <div className="row text-center mb-4 mt-4">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card sowcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff6567" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-3">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fdabab" }}
            />
          </div>
          <div className="text ms-4 text-start fw-semibold">
            <h2 className="card-title mb-0 fw-bold">7</h2>
            <p>Number of New Service Requests</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card sowcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff9318" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-3">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fcc586" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">40</h2>
            <p>Potential Consolidation Identified</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="selection">
    <h5>
      <u className="fw-bold">Consolidation Opportunities</u>
    </h5>
  </div>
  <div className="table-responsive mt-3">
    <table className="table table-striped table-bordered text-center">


       <thead>
        <tr>
          <th>Requesting Team/ Department</th>
          <th>Supplier Name</th>
          <th>Requested Service/Tool</th>
          <th>
            Existing Suppliers Offering <br /> Similar Service
          </th>
          <th>
            Savings from Consolidating <br /> Under an Existing Supplier
          </th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IT Department</td>
          <td>Supplier 1</td>
          <td>Research Tools</td>
          <td>Supplier D</td>
          <td>$7,000</td>
          <td>Under Review</td>
        </tr>
        <tr>
          <td>Marketing Team</td>
          <td>Supplier 2</td>
          <td>Social Media Analytics</td>
          <td>Supplier D</td>
          <td>$7,000</td>
          <td>Approved</td>
        </tr>
        <tr>
          <td>IT Department</td>
          <td>Supplier 3</td>
          <td>Research Tools</td>
          <td>Supplier D</td>
          <td>$7,000</td>
          <td>Under Review</td>
        </tr>
        <tr>
          <td>Finance Team</td>
          <td>Supplier 4</td>
          <td>Budget Management Tool</td>
          <td>Supplier E</td>
          <td>$7,000</td>
          <td>Implemented</td>
        </tr>
        <tr>
          <td>Finance Team</td>
          <td>Supplier 5</td>
          <td>Budget Management Tool</td>
          <td>Supplier D</td>
          <td>$7,000</td>
          <td>Approved</td>
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
    </div>
    </>
  )
}

export default Servicesow

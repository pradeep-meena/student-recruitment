import React from 'react'
import { Link } from 'react-router-dom'

const IntakeManagement = () => {
  return (
    <>
        <div className="container">
    <div className="top d-flex flex-wrap justify-content-between align-items-center">
      <div className="heading">
        <h3 className="mb-3 fw-bold">
          Welcome to the Intake Management Portal
        </h3>
        <p className="text-dark">
          Centralize your procurement requests and track approvals seamlessly
        </p>
      </div>
      <div className="dropdown mt-3 mt-md-0">
        <button
          className="btn dropdown-toggle fw-semibold px-4 text-white"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ backgroundColor: "#578e7e" }}
        >
          <span>
            <i className="fa-solid fa-book pe-3" />
          </span>
          Requests
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link className="dropdown-item fw-semibold" to="/intakenewreq">
              New Request
            </Link>
          </li>
          <li>
            <Link className="dropdown-item fw-semibold" to="/intakemyrequ">
              My Requests
            </Link>
          </li>
        </ul>
      </div>
    </div>
    {/* Summary Cards */}
    <div className="row text-center mb-4 mt-5">
  {/* Card 1 */}
  <div className="col-12 col-sm-6 col-lg-3 mb-3">
    <div
      className="card portalcard text-white fw-semibold h-100 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#ff6567" }}
    >
      <div className="content d-flex justify-content-start align-items-center p-3">
        <div className="icon">
          <i
            className="fa-regular fa-user rounded-circle p-3"
            style={{ backgroundColor: "#fdabab" }}
          />
        </div>
        <div className="text ms-4">
          <h2 className="card-title mb-0 fw-bold text-start">7</h2>
          <p>Total Requests</p>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="col-12 col-sm-6 col-lg-3 mb-3">
    <div
      className="card portalcard status-pending text-white fw-semibold h-100 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#ff9318" }}
    >
      <div className="content d-flex justify-content-start align-items-center p-3">
        <div className="icon">
          <i
            className="fa-regular fa-user rounded-circle p-3"
            style={{ backgroundColor: "#fcc586" }}
          />
        </div>
        <div className="text ms-4">
          <h2 className="card-title mb-0 fw-bold text-start">40</h2>
          <p>Pending Approvals</p>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-12 col-sm-6 col-lg-3 mb-3">
    <div
      className="card portalcard status-approved text-white fw-semibold h-100 d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#39bf1b" }}
    >
      <div className="content d-flex justify-content-start align-items-center p-3">
        <div className="icon">
          <i
            className="fa-regular fa-user rounded-circle p-3"
            style={{ backgroundColor: "#74d25f" }}
          />
        </div>
        <div className="text ms-4">
          <h2 className="card-title mb-0 fw-bold text-start">16</h2>
          <p>Approved</p>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* Recent Activity Table */}
    <h4 className="fw-semibold" style={{ borderBottom: "5px soild black" }}>
      <u className="underline fw-bold">Recent Activity</u>
    </h4>
    <div className="table-responsive">
      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Supplier Name</th>
            <th>Request Name</th>
            <th>Department</th>
            <th>Status</th>
            <th>Request Type</th>
            <th>Submission Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Supplier A</td>
            <td>Mayank</td>
            <td>IT</td>
            <td>
              <span className="status-pending">Pending</span>
            </td>
            <td>Goods</td>
            <td>2024-12-18</td>
          </tr>
          <tr>
            <td>006</td>
            <td>Supplier B</td>
            <td>tushar</td>
            <td>Marketing</td>
            <td>
              <span className="status-approved">Approved</span>
            </td>
            <td>Goods</td>   
            <td>2024-12-20</td>
          </tr>
          <tr>
            <td>007</td>
            <td>Supplier C</td>
            <td>Kunal</td>
            <td>IT</td>
            <td>
              <span className="status-pending">Pending</span>
            </td>
            <td>Services</td>
            <td>2024-12-20</td>
          </tr>
          <tr>
            <td>008</td>
            <td>Supplier D</td>
            <td>Kushal</td>
            <td>Marketing</td>
            <td>
              <span className="status-rejected">Rejected</span>
            </td>
            <td>Goods</td>
            <td>2024-12-18</td>
          </tr>
          <tr>
            <td>009</td>
            <td>Supplier E  </td>
            <td>Dipanshu</td>
            <td>IT</td>
            <td>
              <span className="status-approved">Approved</span>
            </td>
            <td>Services</td>
            <td>2024-12-20</td>
          </tr>
          <tr>
            <td>010</td>
            <td>Supplier F</td>
            <td>Pradeep</td>
            <td>Marketing</td>
            <td>
              <span className="status-pending">Pending</span>
            </td>
            <td>Goods</td>
            <td>2024-12-18</td>
          </tr>
          <tr>
            <td>011</td>
            <td>Supplier G</td>
            <td>Vishal</td>
            <td>IT</td>
            <td>
              <span className="status-rejected">Rejected</span>
            </td>
            <td>Services</td>
            <td>2024-12-20</td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Pagination */}
    <nav aria-label="Page navigation" className="mt-4">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link
            className="page-link text-secondary"
            to="#"
            style={{ border: "none" }}
          >
            Previous
          </Link>
        </li>
        <li className="page-item active mx-3">
          <Link
            className="page-link rounded text-white fw-semibold"
            to="#"
            style={{ backgroundColor: "#0096d4" }}
          >
            1
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link rounded text-dark fw-semibold"
            to="#"
            style={{ backgroundColor: "rgb(212, 212, 212)" }}
          >
            2
          </Link>
        </li>
        <li className="page-item mx-3">
          <Link
            className="page-link rounded text-dark fw-semibold"
            to="#"
            style={{ backgroundColor: "rgb(212, 212, 212)" }}
          >
            3
          </Link>
        </li>
        <li className="page-item">
          <Link
            className="page-link text-secondary"
            to="#"
            style={{ border: "none" }}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <button
    style={{
      width: '120px',
      height: '50px', // Corrected '65' to '65px'
      backgroundColor: '#578e7e',
      color: 'white',
      textAlign: 'center',
      borderRadius: '5px',
      border:'none'
    }}
  >
    View All
  </button>
</div>

  </div>
    </>
  )
}

export default IntakeManagement

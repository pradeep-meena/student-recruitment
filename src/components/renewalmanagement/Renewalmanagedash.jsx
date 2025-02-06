import React from "react";
import { Link } from "react-router-dom";
const Renewalmanagedash = () => {
  return (
    <>
      <div className="container">
        <div className="renual-top">
          <h3 className="mb-4 fw-bold">Renewals Dashboard</h3>
        </div>
        <div className="table-responsive mt-5">
          <table className="table table-bordered text-center align-middle table-striped">
            <thead className="table-light">
              <tr>
                <th>Contract ID</th>
                <th>Supplier Name</th>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Supplier C</td>
                <td>Procurement</td>
                <td>2024-12-18</td>
                <td>2024-12-20</td>
                <td>Pending Renewal</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload"
                    data-bs-placement="top" title="Download"
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>006</td>
                <td>Supplier D</td>
                <td>Vendor</td>
                <td>2024-12-20</td>
                <td>2024-12-18</td>
                <td>Renewed</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload" 
                    data-bs-placement="top" title="Download"
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>007</td>
                <td>Supplier E</td>
                <td>Procurement</td>
                <td>2024-12-20</td>
                <td>2024-12-20</td>
                <td>Pending Renewal</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload"
                    data-bs-placement="top" title="Download"
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>008</td>
                <td>Supplier W</td>
                <td>Procurement</td>
                <td>2024-12-18</td>
                <td>2024-12-18</td>
                <td>Renewed</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload" 
                    data-bs-placement="top" title="Download"
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>009</td>
                <td>Supplier x</td>
                <td>Vendor</td>
                <td>2024-12-20</td>
                <td>2024-12-20</td>
                <td>Renewed</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload" 
                    data-bs-placement="top" title="Download"
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>010</td>
                <td>Supplier Y</td>
                <td>Procurement</td>
                <td>2024-12-18</td>
                <td>2024-12-18</td>
                <td>Pending Renewal</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload"
                    data-bs-placement="top" title="Download" 
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>011</td>
                <td>Supplier Z</td>
                <td>Vendor</td>
                <td>2024-12-20</td>
                <td>2024-12-20</td>
                <td>Renewed</td>
                <td>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i
                      className="fa-regular fa-eye approvalicon "
                      style={{ color: "#0d99ff" }}
                      data-bs-placement="top" title="View"
                    />
                  </button>
                  <a href="download.pdf" download="pdf">
                    <i className="fa-solid fa-download mx-2 renewaldownload" 
                    data-bs-placement="top" title="Download"
                    />
                  </a>
                  <Link to="/renewalform">
                    <button className="btn btn-renewal" data-bs-placement="top" title="Renewal From">Renew</button>
                  </Link>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
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

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            {" "}
            {/* Add `modal-lg` for larger screens */}
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  More Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table table-bordered text-center align-middle table-striped">
                    <thead className="table-light">
                      <tr>
                        <th>Contract ID</th>
                        <th>Supplier Name</th>
                        <th>Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td>Supplier X</td>
                        <td>Procurement</td>
                        <td>2024-12-18</td>
                        <td>2024-12-20</td>
                        <td>Pending Renewal</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{ backgroundColor: "#578e7e", color: "white" }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Renewalmanagedash;

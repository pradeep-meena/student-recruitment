import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllContractWearehouse = () => {
  const [selectedContract, setSelectedContract] = useState(null);

  const contracts = [
    {
      id: "001",
      supplier:"supplier X ",
      department: "IT",
      businessStackholder: "Stackholder 1",
      type: "Procurment",
      sourcingLead: "Lead 1",
      sourcingDirector: "Director 1",
      status: "Active",
    },
    {
      id: "006",
      supplier:"supplier Y",
      department: "Sales",
      businessStackholder: "Stackholder 2",
      type: "Vendor",
      sourcingLead: "Lead 2",
      sourcingDirector: "Director 2",
      status: "Expired",
    },
    {
      id: "007",
      supplier:"supplier Z",
      department: "IT",
      businessStackholder: "Stackholder 3",
      type: "Procurment",
      sourcingLead: "Lead 3",
      sourcingDirector: "Director 3",
      status: "Under Renewal",
    },
    {
      id: "008",
      supplier:"supplier A",
      department: "Security",
      businessStackholder: "Stackholder 4",
      type: "Procurment",
      sourcingLead: "Lead 4",
      sourcingDirector: "Director 4",
      status: "Terminated",
    },
    // Add more contracts if needed
  ];

  const handleViewDetails = (contract) => {
    setSelectedContract(contract);
  };

  return (
    <>
      <div className="container">
        <div className="top d-flex flex-wrap justify-content-between align-items-center">
          <div className="heading">
            <h2 className="mb-3 fw-bold">All Contract warehouse</h2>
          </div>
        </div>

        <div
          className="mt-4 mb-4"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="searchcontracts">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="upload d-column">
            <button
              className="btn btn-success d-flex align-items-center justify-content-center contrabtn"
              style={{
                borderRadius: "5px",
                width: "100%",
                maxWidth: "337px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
              }}
            >
              <i className="fa-solid fa-file-upload me-2"></i>
              Upload Contract
            </button>
            <button
              style={{
                width: "120px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
                borderRadius: "5px",
                marginTop:'10px'
              }}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
          </div>
        </div>
        <div className="table-responsive contracttable">
          <table className="table table-striped table-bordered text-center">
            <thead>
              <tr>
                <th>Contract ID</th>
                <th>Supplier Name</th>
                <th>Department</th>
                <th>Business Stackholder</th>
                <th>Type</th>
                <th>Sourcing Lead</th>
                <th>Sourcing Director</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id}>
                  <td>{contract.id}</td>
                  <td>{contract.supplier}</td>
                  <td>{contract.businessStackholder}</td>
                  <td>{contract.department}</td>
                  <td>{contract.type}</td>
                  <td>{contract.sourcingLead}</td>
                  <td>{contract.sourcingDirector}</td>
                  <td>
                    <span
                      className={`badge rounded-pill px-5 py-1 ${
                        contract.status === "Active"
                          ? "activebadge"
                          : contract.status === "Expired"
                          ? "expiredbadge"
                          : contract.status === "Under Renewal"
                          ? "renewalbadge"
                          : contract.status === "Terminated"
                          ? "terminatedbadge"
                          : ""
                      }`}
                    >
                      {contract.status}
                    </span>
                  </td>

                  <td>
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <i
                        className="fa-regular fa-eye approvalicon me-2"
                        style={{ color: "#0d99ff" }}
                        data-bs-placement="top"
                        title="View"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleViewDetails(contract)}
                      />

                      <i
                        className="fa-regular fa-comment approvalicon me-2"
                        style={{ color: "#0d99ff" }}
                        data-bs-placement="top"
                        title="Comments"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      />
                      <a href="download.pdf" download="pdf">
                        <i
                          className="fa-solid fa-download mx-2 renewaldownload"
                          data-bs-placement="top"
                          title="Download"
                        />
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
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
                {selectedContract ? (
                  <ul>
                    <li>
                      <strong>Contract ID:</strong> {selectedContract.id}
                    </li>
                    <li>
                      <strong>Contract ID:</strong> {selectedContract.supplier}
                    </li>
                    <li>
                      <strong>Type of Contract:</strong> {selectedContract.type}
                    </li>
                    <li>
                      <strong>Department:</strong> {selectedContract.department}
                    </li>
                    <li>
                      <strong>Last Update:</strong>{" "}
                      {selectedContract.lastUpdate}
                    </li>
                    <li>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`badge rounded-pill px-5 py-1 ${
                          selectedContract.status === "Active"
                            ? "activebadge"
                            : selectedContract.status === "Expired"
                            ? "expiredbadge"
                            : selectedContract.status === "Under Renewal"
                            ? "renewalbadge"
                            : selectedContract.status === "Terminated"
                            ? "terminatedbadge"
                            : ""
                        }`}
                      >
                        {selectedContract.status}
                      </span>
                    </li>
                    <li>
                      <strong>Description:</strong>{" "}
                      {selectedContract.description}
                    </li>
                  </ul>
                ) : (
                  <p>No contract selected.</p>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link
                to=""
                className="page-link text-secondary"
                href="#"
                style={{ border: "none" }}
              >
                Previous
              </Link>
            </li>
            <li className="page-item active mx-3">
              <Link
                to=""
                className="page-link rounded text-white fw-semibold"
                href="#"
                style={{ backgroundColor: "#0096d4" }}
              >
                1
              </Link>
            </li>
            <li className="page-item">
              <Link
                to=""
                className="page-link rounded text-dark fw-semibold"
                href="#"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}
              >
                2
              </Link>
            </li>
            <li className="page-item mx-3">
              <Link
                to=""
                className="page-link rounded text-dark fw-semibold"
                href="#"
                style={{ backgroundColor: "rgb(212, 212, 212)" }}
              >
                3
              </Link>
            </li>
            <li className="page-item">
              <Link
                to=""
                className="page-link text-secondary"
                href="#"
                style={{ border: "none" }}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>

        <div
          class="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2">
                  Enter Comments
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="form-floating">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Comments</label>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class="btn"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                  style={{ backgroundColor: "#578e7e", color: "white" }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContractWearehouse;

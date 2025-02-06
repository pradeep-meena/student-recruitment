import React, { useState } from "react";
import { Link } from "react-router-dom";
const Contractmanage = () => {
  const [selectedContract, setSelectedContract] = useState(null);

  const contracts = [
    {
      id: "001",
      supplier:"supplier A",
      department: "IT",
      businessStackholder: "Stackholder 1",
      type: "Procurment",
      sourcingLead: "Lead 1",
      sourcingDirector: "Director 1",
      status: "Active",
    },
    {
      id: "006",
      supplier:"supplier B",
      department: "Sales",
      businessStackholder: "Stackholder 2",
      type: "Vendor",
      sourcingLead: "Lead 2",
      sourcingDirector: "Director 2",
      status: "Expired",
    },
    {
      id: "007",
      supplier:"supplier C",
      department: "IT",
      businessStackholder: "Stackholder 3",
      type: "Procurment",
      sourcingLead: "Lead 3",
      sourcingDirector: "Director 3",
      status: "Under Renewal",
    },
    {
      id: "008",
      supplier:"supplier X",
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
      <div className="container mt-5">
        <div className="top d-flex flex-wrap justify-content-between align-items-center">
          <div className="heading">
            <h3 className="mb-3 fw-bold">Contract Dashboard</h3>
          </div>
          <div className="dropdown mt-3 mt-md-0">
            <form className="d-flex">
              <input
                className="form-control me-2 p-2 text-secondary  border-secondary"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
        {/* Summary Cards */}
        <div className="row text-center mb-4 mt-4">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div
              className="card portalcard text-white fw-semibold h-100 d-flex justify-content-center"
              style={{ backgroundColor: "#ff6567" }}
            >
              <div className="content d-flex justify-content-start align-items-center p-2">
                <div className="icon">
                  <i
                    className="fa-regular fa-user rounded-circle p-2"
                    style={{ backgroundColor: "#fdabab" }}
                  />
                </div>
                <div className="text ms-4 text-start">
                  <h2 className="card-title mb-0 fw-bold">7</h2>
                  <p>Total Contracts</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div
              className="card portalcard text-white fw-semibold h-100 d-flex justify-content-center"
              style={{ backgroundColor: "#ff9318" }}
            >
              <div className="content d-flex justify-content-start align-items-center p-2">
                <div className="icon">
                  <i
                    className="fa-regular fa-user rounded-circle p-2"
                    style={{ backgroundColor: "#fcc586" }}
                  />
                </div>
                <div className="text ms-4 text-start">
                  <h2 className="card-title mb-0 fw-bold">40</h2>
                  <p>Contracts Expiring Soon</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3 mb-3">
            <div
              className="card portalcard text-white fw-semibold h-100 d-flex justify-content-center"
              style={{ backgroundColor: "#39bf1b" }}
            >
              <div className="content d-flex justify-content-start align-items-center p-2">
                <div className="icon">
                  <i
                    className="fa-regular fa-user rounded-circle p-2"
                    style={{ backgroundColor: "#74d25f" }}
                  />
                </div>
                <div className="text ms-4 text-start">
                  <h2 className="card-title mb-0 fw-bold">16</h2>
                  <p>Pending Approvals</p>
                </div>
              </div>
            </div>
          </div>
          {/* Btn */}
          <div className="col-12 col-sm-6 col-lg-3 mb-3 d-flex align-items-end">
            <div className="content">
              <button
                type="button"
                className="btn ms-3 px-4 py-2 rounded-3 fw-semibold text-white "
                style={{ backgroundColor: "#578e7e" }}
              >
                <div class="dropdown d-flex">
                  <button
                    class="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ backgroundColor: "#578E7E", color: "white" }}
                  >
                   <span><i class="fa-solid fa-book"></i></span> Add New Contarct
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link to="/addnewcontact" class="dropdown-item">
                        Add New Contract
                      </Link>
                    </li>
                    <li>
                      <Link to="/contractdetail" class="dropdown-item" href="#">
                        Contract Detail
                      </Link>
                    </li>
                    <li>
                      <Link to="/contracttemplate" class="dropdown-item">
                        Contract Template Selection
                      </Link>
                    </li>
                    <li>
                      <Link to="/costumeagent" class="dropdown-item">
                        Path Selection
                      </Link>
                    </li>
                  </ul>
                </div>
              </button>
              <button
              className="btn btn-success ms-3  mt-2 d-flex align-items-center justify-content-center contrabtn"
              style={{
                borderRadius: "5px",
                width: "240px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
              }}
            >
              <i className="fa-solid fa-file-upload me-2"></i>
              Upload Contract
            </button>
            </div>
          </div>
        </div>
        <div className="table-responsive mt-5 contracttable">
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
                <Link to="/editpage">
                     <i
                        className="fa-regular fa-pen-to-square me-2"
                        style={{ color: "#624de3" }}
                        data-bs-placement="top"
                        title="Edit"
                      />
                  </Link>
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
                        style={{ color: "	#32CD32" }}
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

        {/* Modal for Details */}
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
                      <strong>Supplier Name:</strong> {selectedContract.supplier}
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

export default Contractmanage;

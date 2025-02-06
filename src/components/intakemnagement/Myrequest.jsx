import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Myrequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Multiple input fields ke liye ek object state
  const [formValues, setFormValues] = useState({
    id: "",
    supplier:"",
    item: "",
    date: "",
    status: "",
  });

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  // Input change handle karne ke liye function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Data:", formValues);
    setIsModalOpen(false); // Modal close karna
  };

  const handleOpenModal = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRequest(null);
  };

  // Sample request data
  const requests = [
    { id: "001", supplier:"Supplier A", type: "Goods", date: "2024-12-18", status: "Pending" },
    { id: "006", supplier:"Supplier B",type: "Services", date: "2024-12-20", status: "Pending" },
    { id: "008", supplier:"Supplier C", type: "Services", date: "2024-12-20", status: "Approved" },
    { id: "010", supplier:"Supplier D",type: "Goods", date: "2024-12-18", status: "Pending" },
    { id: "011", supplier:"Supplier E", type: "Services", date: "2024-12-20", status: "Rejected" },
  ];

  return (
    <>
      <div className="container mt-5">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
          <div>
            <h3 className="fw-bold">My Requests</h3>
            <p className="text-dark mb-0">
              Track the status of your submitted requests
            </p>
          </div >
          <div>
              <Link to="/intakenewreq">
              <button
                style={{
                  width: '209px',
                  height: '49px',
                  border: 'none',
                  opacity: '1',
                  backgroundColor: '#578E7E',
                  color: 'white',
                  borderRadius: '5px',
                  fontSize: '16px', // Ensures text scales well
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px', // Adds spacing between icon and text
                }}
              >
                <i className="fa-solid fa-book"></i> My Request
              </button></Link>
              <Link to="/intakemanagement">
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
                      </Link>
            </div>
        </div>

        {/* Filters Section */}
        <div className="row mb-4 mt-5 gx-3">
          <h5>Filters</h5>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <select className="form-select p-3 text-secondary fw-semibold">
              <option defaultValue>Request Type</option>
              <option value="1">Goods</option>
              <option value="2">Services</option>
            </select>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <select className="form-select p-3 text-secondary fw-semibold">
              <option defaultValue>Status</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
              <option value="3">Rejected</option>
            </select>
          </div>
        </div>

        {/* Table Section */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered text-center">
            <thead className="table-light">
              <tr>
                <th>Request ID</th>
                <th>Supplier Name</th>
                <th>Request Type</th>
                <th>Submission Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.supplier}</td>
                  <td>{request.type}</td>
                  <td>{request.date}</td>
                  <td>{request.status}</td>
                  <td className="action-icons">
                    <i
                      className="fa-regular fa-eye me-2 myrequesteye"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleOpenModal(request)}
                      data-bs-placement="top"
                      title="View"
                    />
                    <i
                      className="fa-regular fa-pen-to-square me-2 myrequestedit"
                      style={{ fontSize: "15px", cursor: "pointer" }}
                      onClick={handleIconClick}
                      data-bs-placement="top"
                      title="Edit"
                    />
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      <i
                        class="fa-regular fa-comment"
                        style={{ color: "	#32CD32" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Section */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>More Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedRequest ? (
              <>
                <ul>
                  <li>
                    <strong> Request ID:</strong> {selectedRequest.id}
                  </li>

                  <li>
                    <strong> Request Name:</strong> {selectedRequest.supplier}
                  </li>
                  <li>
                    <strong>Request Type:</strong> {selectedRequest.type}
                  </li>
                  <li>
                    <strong>Submission Date:</strong> {selectedRequest.date}
                  </li>
                  <li>
                    <strong>Status:</strong> {selectedRequest.status}
                  </li>
                </ul>
              </>
            ) : (
              <p>No request selected</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Pagination Section */}
        <nav aria-label="Page navigation" className="mt-4">
          <ul className="pagination justify-content-center flex-wrap">
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

        {/* Modal */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              zIndex: 1000,
            }}
          >
            <h3>Edit Request</h3>
            {/* Inputs */}
            <input
              type="text"
              name="id"
              value={formValues.id}
              onChange={handleInputChange}
              placeholder="001"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
             <input
              type="text"
              name="id"
              value={formValues.supplier}
              onChange={handleInputChange}
              placeholder="001"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              type="text"
              name="item"
              value={formValues.item}
              onChange={handleInputChange}
              placeholder="Goods"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              type="text"
              name="date"
              value={formValues.date}
              onChange={handleInputChange}
              placeholder="2024-12-18"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              type="text"
              name="status"
              value={formValues.status}
              onChange={handleInputChange}
              placeholder="Pending"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />

            <input
              type="text"
              name="item"
              value={formValues.item}
              onChange={handleInputChange}
              placeholder="Request Type"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              type="text"
              name="date"
              value={formValues.date}
              onChange={handleInputChange}
              placeholder="Submission Date"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <input
              type="text"
              name="status"
              value={formValues.status}
              onChange={handleInputChange}
              placeholder="Status"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />

            {/* Buttons */}
            <div style={{ textAlign: "right" }}>
              <button
                onClick={handleCancelModal}
                style={{
                  padding: "8px 12px",
                  marginRight: "10px",
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}

        {/* Overlay */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={handleCancelModal}
          />
        )}
        {/* Overlay */}
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={handleCancelModal}
          />
        )}

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

export default Myrequest;

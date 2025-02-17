import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Add Counselor Component
const AddCounselor = ({ onAdd }) => {
  const [counselorName, setCounselorName] = useState("");
  const [counselorEmail, setCounselorEmail] = useState("");
  const [counselorPhone, setCounselorPhone] = useState("");
  const [counselors, setCounselors] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      date: "02/15/2025",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      date: "02/14/2025",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddCounselor = () => {
    if (counselorName && counselorEmail && counselorPhone) {
      const newCounselor = {
        name: counselorName,
        email: counselorEmail,
        phone: counselorPhone,
        date: new Date().toLocaleDateString(),
      };
      setCounselors([...counselors, newCounselor]);
      onAdd(newCounselor);
      setCounselorName("");
      setCounselorEmail("");
      setCounselorPhone("");
      setShowModal(false); // Close the modal after adding
    }
  };

  const filteredCounselors = counselors.filter((counselor) =>
    counselor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-3">
      {/* Search input on the left and Add button on the right */}
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 text-end">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add Counselor
          </button>
        </div>
      </div>

      {/* Modal for adding counselor */}
      {showModal && (
        <div
          className="modal show"
          tabIndex="-1"
          style={{
            display: "block",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1050,
          }}
          aria-hidden="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Counselor</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter counselor name..."
                  value={counselorName}
                  onChange={(e) => setCounselorName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter counselor email..."
                  value={counselorEmail}
                  onChange={(e) => setCounselorEmail(e.target.value)}
                />
                <input
                  type="tel"
                  className="form-control mb-2"
                  placeholder="Enter counselor phone..."
                  value={counselorPhone}
                  onChange={(e) => setCounselorPhone(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleAddCounselor}
                >
                  Add Counselor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Counselors Table */}
      {filteredCounselors.length > 0 && (
        <div className="mt-4">
          <h5>Counselor List</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {filteredCounselors.map((c, index) => (
                <tr key={index}>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{c.phone}</td>
                  <td>{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddCounselor;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

const ApprovalWork = () => {
  const [visible, setVisible] = useState(false);

  // Placeholder functions for accept and reject actions
  const acceptFunc = () => {
    console.log("Action accepted");
  };

  const rejectFunc = () => {
    console.log("Action rejected");
  };

  const confirm = () => {
    setVisible(true); // Show the dialog
  };

  // Sample data for table rows
  const approvalData = [
    {
      id: "001",
      supplier:"Supplier A",
      requester: "John Doe",
      department: "IT",
      category: "Software Purchase",
      date: "2024-12-20",
      status: "Pending",
      urgency: "High",
      approvers: "Jane Smith, Mark Brown",
    },
    {
      id: "002",
      supplier:"Supplier B",
      requester: "Sarah Lee",
      department: "Marketing",
      category: "Vendor Service",
      date: "2024-12-18",
      status: "Approved",
      urgency: "Medium",
      approvers: "Emily White",
    },
    // Add more rows as needed
  ];

  return (
    <>
      <div className="container">
        <h3 className="mb-4 fw-bold">Approval Requests</h3>
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle table-striped">
            <thead className="table-light">
              <tr>
                <th>Request ID</th>
                <th>Supplier Name</th>
                <th>Requester Name</th>
                <th>Department</th>
                <th>Category</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Urgency</th>
                <th>Approver(s)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {approvalData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.supplier}</td>
                  <td>{item.requester}</td>
                  <td>{item.department}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>{item.urgency}</td>
                  <td>{item.approvers}</td>
                  <td className="approvalicon">
                    <Link to="/contractapproval">
                      <i
                        className="fa-regular fa-eye"
                        style={{ color: "#0d99ff" }} 
                        data-bs-placement="top" title="View"
                      />
                    </Link>
                    <i
                      className="fa-solid fa-circle-check text-success mx-2"
                      onClick={confirm}
                      style={{ cursor: "pointer" }}
                      data-bs-placement="top" title="Confirm"
                    />
                    <i
                      className="fa-solid fa-xmark text-danger"
                      onClick={() => setVisible(true)} // Show dialog for reject action
                      style={{ cursor: "pointer" }}
                      data-bs-placement="top" title="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
      </div>

      {/* Confirmation Dialog */}
      <ConfirmDialog
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={acceptFunc}
        reject={rejectFunc}
        acceptLabel="Yes"
        rejectLabel="No"
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        style={{
          maxWidth: "90%",
          width: "20vw",
        }}
      />
    </>
  );
};

export default ApprovalWork;

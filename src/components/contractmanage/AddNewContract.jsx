import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddNewContract = () => {
  const [milestones, setMilestones] = useState([
    { id: 1, name: "", dueDate: "", responsible: "" },
  ]);

  // Handle input change
  const handleChange = (index, field, value) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index][field] = value;
    setMilestones(updatedMilestones);
  };

  // Add new milestone row
  const addMilestone = (e) => {
    e.preventDefault(); // Prevent page refresh
    setMilestones([
      ...milestones,
      { id: milestones.length + 1, name: "", dueDate: "", responsible: "" },
    ]);
  };

  // Remove milestone row
  const removeMilestone = (index, e) => {
    e.preventDefault(); // Prevent page refresh
    const updatedMilestones = milestones.filter((_, i) => i !== index);
    setMilestones(updatedMilestones);
  };
  return (
    <div className="container mt-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
        }}>
        <div>
          <h2 style={{ textAlign: "start" }}>Add New Contract</h2>
        </div>
        <div>
          <Link to="/contractmanage">
            <button
              style={{
                width: "120px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
                borderRadius: "5px",
              }}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
      </div>

      <form>
        {/* Contract Information */}
        <div className="row mb-3 mt-5">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Contract Name*"
              className="form-control p-3"
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Description"
              className="form-control p-3"
            />
          </div>
          <div className="col-md-4 mb-3">
            <select
              className="form-select p-3"
              style={{
                fontSize: "16px",
                fontFamily: "inherit",
                color: "gray",
              }}>
              <option>Contract Type*</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <select
              className="form-select p-3"
              style={{
                fontSize: "16px",
                fontFamily: "inherit",
                color: "gray",
              }}>
              <option>Department*</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Start Date"
              className="form-control p-3"
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="End Date"
              className="form-control p-3"
            />
          </div>
        </div>

        <div className="row mb-3 ">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Sourcing Lead Name"
              className="form-control p-3"
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Sourcing Director Name"
              className="form-control p-3"
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Business Stackholder NAme"
              className="form-control p-3"
            />
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Supplier Name"
              className="form-control p-3"
            />
          </div> </div>

        {/* Financial Details */}
        <h5
          style={{
            borderBottom: "1px solid black",
            textAlign: "start",
            marginBottom: "15px",
          }}>
          Financial Details
        </h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              placeholder="Budget *"
              className="form-control p-3"
            />
          </div>
          <div className="col-md-4 mb-3">
            <select
              id="category"
              className="form-select p-3"
              style={{
                fontSize: "16px",
                fontFamily: "inherit",
                color: "gray",
              }}>
              <option>Currency*</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              id="subcategory"
              className="form-select p-3"
              style={{
                fontSize: "16px",
                fontFamily: "inherit",
                color: "gray",
              }}>
              <option>Payment Term *</option>
            </select>
          </div>
        </div>

        {/* Request Details */}
        <h5
          style={{
            borderBottom: "1px solid black",
            textAlign: "start",
            marginBottom: "15px",
          }}>
          Milestones
        </h5>
        <div className="container mt-4">
        <div className="row">
            <div className="col-md-9 ">
            <h3 className="mb-4">Milestone Form</h3>
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary w-100" onClick={addMilestone}>
                + Add Milestone
              </button>
            </div>
          </div>
          

          {milestones.map((milestone, index) => (
            <div className="row align-items-center mb-3" key={milestone.id}>
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder="Milestone Name"
                  className="form-control p-3"
                  value={milestone.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="date"
                  placeholder="Due Date"
                  className="form-control p-3"
                  value={milestone.dueDate}
                  onChange={(e) =>
                    handleChange(index, "dueDate", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder="Responsible Party"
                  className="form-control p-3"
                  value={milestone.responsible}
                  onChange={(e) =>
                    handleChange(index, "responsible", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3">
                {milestones.length > 1 && (
                  <button
                    className="btn btn-danger w-100"
                    onClick={(e) => removeMilestone(index, e)}>
                    - Delete
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Single Add Button at the Bottom */}
        </div>

        {/* Attachments */}
        <h5
          style={{
            borderBottom: "1px solid black",
            textAlign: "start",
            marginBottom: "15px",
          }}>
          Attachments
        </h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3 ">
            <button
              className="text-secondary text-start w-100 p-3"
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                border: "none",
                padding: "10px 20px",
                color: "black",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",

                gap: "8px",
              }}>
              <i className="fa-solid fa-file-import pe-2"></i>
              Click to Upload
              <input type="file" style={{ display: "none" }} />
            </button>
          </div>
        </div>

        {/* Approval Workflow */}
        <h5
          style={{
            borderBottom: "1px solid black",
            textAlign: "start",
            marginBottom: "15px",
          }}>
          Approval Workflow
        </h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            <select
              className="form-select p-3"
              style={{
                fontSize: "16px",
                fontFamily: "inherit",
                color: "gray",
              }}>
              <option>Approvers</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select
              className="form-select p-3"
              style={{
                fontSize: "16px",
                fontFamily: "inherit",
                color: "gray",
              }}>
              <option>Approval Levels</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Threshold Rules"
              className="form-control p-3"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn me-3"
            style={{
              backgroundColor: "white",
              border: "1px solid #578e7e",
              color: "#578e7e",
              padding: "10px",
              width: "150px",
            }}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: "#578E7E",
              color: "white",
              padding: "10px",
              width: "150px",
            }}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewContract;

import React from "react";
import { Link } from "react-router-dom";

function MultiYearEdit() {
  return (
    <>
      <div className="multiyear-edit-section my-5">
        <div className="container">
          <div className="multi-section d-flex justify-content-between">
          <h3>Multi Year Edit Page</h3>
          <Link to="/multiyear">
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
          <form className="row g-3 mt-4">
            <div className="col-md-6">
              <label className="form-label">Vendor Name </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Current Contract Duration </label>
              <input
                type="text"
                className="form-control"
                placeholder="Entar The Duration"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Multi Year </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Year"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Current Year</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Current Year"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Saving</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Saving"
              />
            </div>

            <div className="col-12">
              <button
                type="submit"
                className="btn "
                style={{ backgroundColor: "#578e7e", color: "white" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default MultiYearEdit;

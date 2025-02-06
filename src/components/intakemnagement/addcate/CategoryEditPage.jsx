import React from "react";
import { Link } from "react-router-dom";

function CategoryEditPage() {
  return (
    <>
      <div className="cateedit-section">
        <div className="container">
          <div className="category-section d-flex justify-content-between mt-5">
          <h3>Add Category</h3>
          <Link to="/intakemanagement">
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
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Category Name </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter The Category Name "
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Category Description</label>
              <input
                type="text"
                className="form-control"
                
                placeholder="Enter The Category Description "
              />
            </div>
            <div className="col-6">
              <label className="form-label">Category Type</label>
              <input
                type="text"
                className="form-control"
                
                placeholder="Category type"
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

export default CategoryEditPage;

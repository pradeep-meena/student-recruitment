import React from "react";
import { Link } from "react-router-dom";

function PriceComparisonsform() {
  return (
    <>
      <div className="priceeditcompr-section my-5">
        <div className="container">
          <div className="pricecom-section d-flex justify-content-between">
          <h3> Price Comparisons Edit Page</h3>
          <Link to="/pricecomp">
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
              <label className="form-label">Product Service</label>
              <input
                type="text"
                className="form-control"
                placeholder="Select The Product"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Deratment</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enetr The department"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Select Comparisons 1</label>
              <select className="form-select">
                <option>Select 1</option>
                <option>Supplier A</option>
                <option>Supplier B</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Select Comparisons 2</label>
              <select className="form-select">
                <option>Select 2</option>
                <option>Supplier X</option>
                <option>Supplier Y</option>
              </select>
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

export default PriceComparisonsform;

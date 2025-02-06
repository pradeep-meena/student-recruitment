import React, { useState } from "react";
import { Link } from "react-router-dom";
function SowEditPage() {
  const [formData, setFormData] = useState({
    RequestingTeam: "",
    RequestedService: "",
    ExistingSuppliersOffering: "",
    SavingsfromConsolidating: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    const existingData = JSON.parse(localStorage.getItem("sowFormData")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("sowFormData", JSON.stringify(updatedData));

    
    alert("Data submitted and saved as an array in local storage!");
    setFormData({
      RequestingTeam: "",
      RequestedService: "",
      ExistingSuppliersOffering: "",
      SavingsfromConsolidating: "",
    });
  };

  return (
    <div>
      <div className="sowedit-section my-5">
        <div className="container">
          <div className="service-section d-flex justify-content-between">
          <h3>Service And Sow Edit Page</h3>
          <Link to="/serviceswo">
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
          <form className="row g-3 mt-4" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label className="form-label">Create New Sow</label>
              <input
                type="text"
                name="RequestingTeam"
                value={formData.RequestingTeam}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter The Create New Sow"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Type Of Service</label>
              <input
                type="text"
                name="RequestedService"
                value={formData.RequestedService}
                onChange={handleChange}
                className="form-control"
                placeholder="Choice The Type"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Requester Team</label>
              <input
                type="text"
                name="ExistingSuppliersOffering"
                value={formData.ExistingSuppliersOffering}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter The Requester Team"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Requester Service</label>
              <input
                type="text"
                name="SavingsfromConsolidating"
                value={formData.SavingsfromConsolidating}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter The Current Service"
              />
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#578e7e", color: "white" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
  );
}

export default SowEditPage;

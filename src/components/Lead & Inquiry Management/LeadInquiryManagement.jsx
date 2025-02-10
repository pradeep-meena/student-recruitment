import React, { useState } from "react";
const LeadInquiryManagement = () => {

  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Add New Patient</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  <div className="add-patient-section">
    <div className="container px-4">
      <div className="add-patient-main bg-white p-5 shadow-sm rounded-3">
        {/* Header Section */}
        <div className="row align-items-center mb-4">
          <div className="col-9">
            <h1> Inquiry Management
</h1>
            <p className="mb-0">Home / Patient Management / Registration</p>
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-dark px-4 py-1">
              <i className="bi bi-arrow-left-short" /> Back
            </button>
          </div>
        </div>
        {/* Form Section */}
        <div className="add-new-patient-main">
          <form>
            {/* Personal Information Section */}
            <div className="form-section my-4">
              <div className="section-title border-bottom fw-bold">
                Personal Information
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Full Name*"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      id="dob"
                      placeholder="DOB"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <select className="form-control" id="gender">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder="Contact"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="emergencyContact"
                      placeholder="Emergency Contact"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="aadharNo"
                      placeholder="Aadhar No."
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="uniqueHealthID"
                      placeholder="Unique Health ID"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="pastMedicalHistory"
                      placeholder="Past Medical History"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="pastSurgicalHistory"
                      placeholder="Past Surgical History"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="socialHistory"
                      placeholder="Social History"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="medications"
                      placeholder="Medications"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="labs"
                      placeholder="Labs"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="imaging"
                      placeholder="Imaging"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="allergies"
                      placeholder="Allergies"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="previousDocuments"
                      placeholder="Previous Medical Documents"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="insuranceProvider"
                      placeholder="Insurance Provider"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="idNumber"
                      placeholder="ID Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Form Buttons */}
            <div className="  my-2 w-25 d-flex" >
              <button type="button" className="btn btn-outline-dark mr-3 px-3 col-sm-12">
                CANCEL
              </button>
              <button type="submit" className="btn btn-primary px-4 ms-2 col-sm-12 ">
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default LeadInquiryManagement;

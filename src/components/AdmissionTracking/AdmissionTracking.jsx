import React from "react";

const AdmissionTracking = () => {
  return (
    <div className="container p-2">
      {/* student admission */}
      <div className="d-flex justify-content-between flex-wrap">
        <h3>Admission Tracking</h3>
        {/* <button className="px-3 rounded btn btn-primary">Import Student</button> */}
      </div>
      <hr />
      <form>
        <div className="row">
          {/* Admission No */}
          <div className="col-md-12 col-sm-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="admission_no" className="fw-bold">
                Admission No <small className="req text-danger">*</small>
              </label>
              <input
                id="admission_no"
                name="admission_no"
                type="text"
                className="form-control"
                autoComplete="off"
              />
              <span className="text-danger"></span>
            </div>
          </div>

          {/* Roll Number */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="roll_no" className="fw-bold">
                Roll Number
              </label>
              <input
                id="roll_no"
                name="roll_no"
                type="text"
                className="form-control"
                autoComplete="off"
              />
              <span className="text-danger"></span>
            </div>
          </div>

          {/* Class */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="class_id" className="fw-bold">
                Class <small className="req text-danger">*</small>
              </label>
              <select name="class_id" id="class_id" className="form-control">
                <option value="">Select</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
              </select>
              <span className="text-danger"></span>
            </div>
          </div>

          {/* Section */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="section_id" className="fw-bold">
                Section <small className="req text-danger">*</small>
              </label>
              <select
                name="section_id"
                id="section_id"
                className="form-control"
              >
                <option value="">Select</option>
              </select>
              <span className="text-danger"></span>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          {/* first name */}
          <div className="col-md-12 col-sm-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="admission_no" className="fw-bold">
                First Name <small className="req text-danger">*</small>
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                className="form-control"
                autoComplete="off"
              />
              <span className="text-danger"></span>
            </div>
          </div>

          {/* last Name */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="roll_no" className="fw-bold">
                Last name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                className="form-control"
                autoComplete="off"
              />
              <span className="text-danger"></span>
            </div>
          </div>

          {/* Class */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="class_id" className="fw-bold">
                Gender <small className="req text-danger">*</small>
              </label>
              <select name="gender" id="gender" className="form-control">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span className="text-danger"></span>
            </div>
          </div>

          {/* Section */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="section_id" className="fw-bold">
                Date of Birth <small className="req text-danger">*</small>
              </label>
              <input type="date" className="form-control" />
              <span className="text-danger"></span>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          {/* category */}
          <div className="col-md-12 col-sm-12 col-lg-2 mt-2">
            <div className="form-group">
              <label htmlFor="category" className="fw-bold">
                Category
              </label>
              <select name="class_id" id="class_id" className="form-control">
                <option value="">Select</option>
                <option value="1">General</option>
                <option value="2">OBC</option>
                <option value="3">Special</option>
                <option value="4">Physically Challeged</option>
              </select>
            </div>
          </div>

          {/* Religion */}
          <div className="col-sm-12 col-md-12 col-lg-2 mt-2">
            <div className="form-group">
              <label htmlFor="Religion" className="fw-bold">
                Religion
              </label>
              <input
                id=""
                name="religion"
                type="text"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-2 mt-2">
            <div className="form-group">
              <label htmlFor="cast" className="fw-bold">
                Cast
              </label>
              <input
                id="cast"
                name="cast"
                type="text"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>

          {/* mobile */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="mobile" className="fw-bold">
                Mobile
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                className="form-control"
                autoComplete="off"
              />
            </div>
          </div>

          {/* email */}
          <div className="col-sm-12 col-md-12 col-lg-3 mt-2">
            <div className="form-group">
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
              <input type="email" className="form-control" autoComplete="off" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="bg-light">Transport Details</h4>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-4 mt-2">
              <div className="form-group">
                <label htmlFor="route" className="fw-bold">
                  Route List
                </label>
                <input
                  id="route"
                  name="route"
                  type="text"
                  className="form-control"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-4 mt-2">
              <div className="form-group">
                <label htmlFor="admission_no" className="fw-bold">
                  Pickup point
                </label>
                <select name="" id="" className="form-control">
                  <option value>Select</option>
                </select>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-4 mt-2">
              <div className="form-group">
                <label htmlFor="fees" className="fw-bold">
                  Fees Month
                </label>
                <select name="" id="" className="form-control">
                  <option value>Select</option>
                  <option value="1">April</option>
                  <option value="2">May</option>
                  <option value="3">June</option>
                  <option value="4">July</option>
                  <option value="5">August</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end m-2">
          <button className="p-2">submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionTracking;

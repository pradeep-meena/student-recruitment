import React from "react";

function AddDepartmenet() {
  return (
    <div>
      <div className="adddepart-section my-5">
        <div className="container">
          <h3> Add Department Page</h3>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Department Id
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter Your Id"
              />
            </div>
            <div className="col-6">
              <label for="inputAddress2" className="form-label">
                Password
              </label>
              <input
                type="Password"
                className="form-control"
                id="inputAddress2"
                placeholder="Enter Your Department Password"
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Department Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="col-6">
              <label for="inputAddress" className="form-label">
                Departmenet Member
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Your Member "
              />
            </div>
            <div className="col-6">
              <label for="inputAddress2" className="form-label">
                Department Category{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Enter Your Category "
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Adding Surpluse
              </label>
              <input type="text" className="form-control" id="inputCity" />
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
    </div>
  );
}

export default AddDepartmenet;

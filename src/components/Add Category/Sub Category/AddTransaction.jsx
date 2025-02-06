import React from "react";

function AddTransaction() {
  return (
    <div>
      <div className="addtrans-section my-5">
        <div className="container">
          <h3>Add Transaction Page</h3>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Contract Id
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter Your Contract Id"
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Requester Id
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Enter Your Requester Id"
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Request Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="col-md-6">
              <label for="inputZip" className="form-label">
                Lead Source Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                Enter
                Your
                Lead
              />
            </div>
            <div className="col-6">
              <label for="inputAddress" className="form-label">
                Contract Value
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Your Value"
              />
            </div>

            <div className="col-6">
              <label for="inputAddress2" className="form-label">
                Sub Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Enter Your Amount "
              />
            </div>

            <div className="col-6">
              <label for="inputAddress" className="form-label">
                Fill The Date
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter Your Date"
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
    </div>
  );
}

export default AddTransaction;

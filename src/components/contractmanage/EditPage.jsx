import React from 'react'

function EditPage() {
  return (
    <div>
       <div className="multiyear-edit-section my-5">
        <div className="container">
          <div className="editpage-section">
          <h3>Edit Page</h3>
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
            </div>
          <form className="row g-3 mt-4">
            <div className="col-md-6">
              <label className="form-label">Contract Id </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Id"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Department </label>
              <input
                type="text"
                className="form-control"
                placeholder="Entar Your Department"
              />
            </div>
            <div className="col-6">
              <label className="form-label">Business Stackholder </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Business Stackholder "
              />
            </div>
            <div className="col-6">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Type"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Sourcing Lead</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Lead"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Sourcing Director</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter The Director"
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
  )
}

export default EditPage

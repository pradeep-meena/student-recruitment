import React from 'react'
import { Link } from 'react-router-dom'
const RenewalRequestForm = () => {
  return (
    <>
        <div className="container">
          <div className="renewal-section d-flex justify-content-between">
  <h3 className="mb-4 fw-semibold">Renewal Request Form</h3>
  <Link to="/renewalmanage">
  <button
              style={{
                width: "120px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
                borderRadius: "5px",
                marginTop:'10px',
                marginBottom:'10px'
              }}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            </Link>
            </div>
  <div className="row">
    <div className="col-md-4">
      <div className="mb-3">
        <input
          type="email"
          className="form-control p-3"
          id="exampleInputEmail1"
          placeholder="Contact ID*"
          aria-describedby="emailHelp"
          style={{ backgroundColor: "#e6e6e6", borderColor: "gray" }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <input
          type="email"
          className="form-control p-3"
          id="exampleInputEmail1"
          placeholder="Description"
          aria-describedby="emailHelp"
          style={{ backgroundColor: "#e6e6e6", borderColor: "gray" }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <input
          type="email"
          className="form-control p-3"
          id="exampleInputEmail1"
          placeholder="Amendments"
          aria-describedby="emailHelp"
          style={{ backgroundColor: "#e6e6e6", borderColor: "gray" }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <input
          type="email"
          className="form-control p-3"
          id="exampleInputEmail1"
          placeholder="Previous Expiration Date"
          aria-describedby="emailHelp"
          style={{ backgroundColor: "#e6e6e6", borderColor: "gray" }}
        />
      </div>
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-4">
      <div className="mb-3">
        <input
          type="email"
          className="form-control p-3"
          id="exampleInputEmail1"
          placeholder="New Expiration Date"
          aria-describedby="emailHelp"
          style={{ borderColor: "gray" }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <input
          type="email"
          className="form-control p-3"
          id="exampleInputEmail1"
          placeholder="Additional Notes"
          aria-describedby="emailHelp"
          style={{ borderColor: "gray" }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <select
        className="form-select p-3 text-secondary"
        aria-label="Default select example"
        style={{ borderColor: "gray" }}
      >
        <option selected="">Select Department</option>
        <option value={1}>One</option>
        <option value={2}>Two</option>
        <option value={3}>Three</option>
      </select>
    </div>
  </div>
  <div className="selection mt-3">
    <h5 className="fw-semibold" style={{ borderBottom: "2px solid" }}>
      Attachments
    </h5>
    <div className="row mb-3 mt-3">
    <div className="col-md-4 mb-3 " style={{marginTop:'-16'}}>
  <Link to="/renewaldocument" >
  <button
    className="text-secondary text-center p-3 w-100"
    style={{
      backgroundColor: 'white',
      borderRadius: '5px',
      border: 'none',
      color: 'black',
      cursor: 'pointer',
      fontSize: '16px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      display: 'flex', 
      alignItems: 'center', 
    }}
  >
    <label
      className="text-secondary m-0"
      htmlFor="fileInput"
      style={{
        cursor: 'pointer',
        color: 'black',
        marginLeft:'50px',
        textAlign:'center', 
        gap: '8px',
         
      }}
    >
     <i class="fa-solid fa-file-import pe-2"></i>
      Click to Upload
    </label>
  </button>
  </Link>
  </div>
    </div>
  </div>
  <div className="actionbtn d-flex justify-content-center mt-5">
    <button
      type="button"
      className="btn px-5 py-2 me-2 fw-semibold rounded-3"
      style={{
        borderColor: "#578e7e",
        color: "#578e7e",
        borderWidth: 2,
        backgroundColor: "white"
      }}
    >
      CANCEL
    </button>
    <button
      type="button"
      className="btn text-white fw-semibold px-5 py-2 rounded-3"
      style={{ backgroundColor: "#578e7e" }}
    >
      SAVE
    </button>
  </div>
</div>
    </>
  )
}

export default RenewalRequestForm
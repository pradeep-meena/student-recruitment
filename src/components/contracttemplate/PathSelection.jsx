import React from "react";
import { Link } from "react-router-dom";

function PathSelection() {
  return (
    <div style={{paddingLeft:"20px"}} className="container">
      {/* Header Section */}
      <div className="mb-4 d-flex justify-content-between">
      <div>
        <h1
          className="fw-bold"
          style={{
            width:'224px',
            height:'42px',
            top:'108px',
            left:'348px',
            fontFamily: "Urbanist",
            fontWeight:'700px',
            fontSize: "35px",
            lineHeight: "42px",
          }}
        >
          Path Selection
        </h1>
        <p
          style={{
            width:'321px',
            height:'18px',
            top:'150px',
            left:'348px',
            fontWeight:'400',
            fontFamily: "Urbanist",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#6c757d",
          }}
        >
          Define the type of engagement for your contract.
        </p>
        </div>
        <Link to="/contracttemplate">
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
    

      {/* New Engagement Section */}
      <div className="mb-5">
        <h4
          className="fw-bold"
          style={{
            fontFamily: "Urbanist",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          New Engagement
        </h4>
        <p
          style={{
            fontFamily: "Urbanist",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#6c757d",
            borderBottom:'1px solid black'
          }}
        >
          Create a new contract with a new or existing supplier.
        </p>

        {/* Buttons for New Engagement */}
        <div className="row g-3">
          <div className="col-sm-4">
            <button
              className="btn w-100 py-3"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                color: "#000",
              }}
            >
              New Supplier
            </button>
          </div>
          <div className="col-sm-4">
            <button
              className="btn w-100 py-3"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                color: "#000",
              }}
            >
              Existing Supplier
            </button>
          </div>

        
        </div>
      </div>

      {/* Renewal Section */}
      <div className="mb-5">
        <h4
          className="fw-bold"
          style={{
            fontFamily: "Urbanist",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Renewal
        </h4>
        <p
          style={{
            fontFamily: "Urbanist",
            fontSize: "15px",
            lineHeight: "18px",
            color: "#6c757d",
            borderBottom:'1px solid black'
          }}
        >
          Renew or amend an existing contract with a current supplier.
        </p>

        {/* Buttons for Renewal */}
        <div className="row g-3">
          <div className="col-sm-4">
            <button
              className="btn w-100 py-3"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                color: "#000",
              }}
            >
              Extend/Amend Existing Contract
            </button>
          </div>
          <div className="col-sm-4">
            <button
              className="btn w-100 py-3"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                color: "#000",
              }}
            >
              Letter of Extension
            </button>
          </div>
        </div>
      </div>
      <div className="mb-5">
      <h4
          className="fw-bold"
          style={{
            fontFamily: "Urbanist",
            fontSize: "20px",
            lineHeight: "24px",
            borderBottom:"1px solid black"
          }}
        >
          Add agreement
        </h4>
        <div className="col-sm-4">
            <button
              className="btn w-100 py-3 mt-3"
              style={{
                border: "1px solid #6c757d",
                backgroundColor: "#f8f9fa",
                borderRadius: "5px",
                color: "#000",
                
              }}
            >
              Add agreement
            </button>
          </div>
      </div>

      {/* Footer Section */}
      <div className="d-flex justify-content-center align-items-end  " style={{height:'250px'}}>
        <button
          className="btn btn-outline-secondary px-5 py-2 me-2"
          style={{
            width:'120px',
            borderRadius: "5px",
          }}
        >
          Back
        </button>
        <button
          className="btn px-5 py-2"
          style={{
            width:'120px',
            borderRadius: "5px",
            backgroundColor:'#578E7E'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PathSelection;
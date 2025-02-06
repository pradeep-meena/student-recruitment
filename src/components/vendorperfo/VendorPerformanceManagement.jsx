import React from "react";
import { Link } from "react-router-dom";
const VendorPerformanceManagement = () => {
  return (
    <div className="container mt-5">
<div className="d-flex justify-content-between align-items-center mb-4">
  {/* Title Section */}
  <p
    className="fw-bold text-start"
    style={{
      fontFamily: "Urbanist, sans-serif",
      fontSize: "1.5rem",
    }}
  >
    Vendor Performance Management
  </p>

  {/* Search Bar */}
  <div className="d-column align-items-center">
    <input
      type="text"
      className="form-control"
      placeholder="Search by Category"
      style={{
        maxWidth: "250px",
        marginRight: "10px",
      }}
    />
       
     <Link to="/vendorcom">
        <button className="p-2 rounded mt-3"style={{backgroundColor:'#578e7e',color:'white',border:'none', width:'120px'}}>Add Supplier</button>
        </Link>
  </div>
</div>

     
      <div className="table-responsive overflow-auto">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>
              <div className="d-flex flex-column align-items-center">
    <img
    src="https://i.ibb.co/CBBdKcg/mc.jpg"
      alt="McConsult Logo"
      className="mb-1 img-fluid"
      style={{ maxWidth: "30px", height: "auto" }}
    />
    <span className="text-wrap text-center">McConsult...</span>
    <small className="text-muted">Total Score 65/140</small>
  </div>
              </th>
              <th>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://i.ibb.co/Rv1Kg9v/bcd.jpg"
                    alt="BCD Logo"
                    className="mb-1 img-fluid"
                    style={{ maxWidth: "30px", height: "auto" }}
                  />
                  <span className="text-wrap text-center">BCD</span>
                  <small className="text-muted">Total Score 121/140</small>
                </div>
              </th>
              <th>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src="https://i.ibb.co/XxST6Mh/chain.jpg"
                    alt="Cain Logo"
                    className="mb-1 img-fluid"
                    style={{ maxWidth: "30px", height: "auto" }}
                  />
                  <span className="text-wrap text-center">Cain</span>
                  <small className="text-muted">Total Score 94/140</small>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>KPI 1</td>
              <td className="table-danger">12 / 50</td>
              <td className="table-success">47 / 50</td>
              <td className="table-success">45 / 50</td>
            </tr>
            <tr>
              <td>KPI 2</td>
              <td className="table-danger">2 / 5</td>
              <td className="table-success">5 / 5</td>
              <td className="table-warning">3 / 5</td>
            </tr>
            <tr>
              <td>KPI 3</td>
              <td className="table-danger">11 / 25</td>
              <td className="table-success">22 / 25</td>
              <td className="table-warning">14 / 25</td>
            </tr>
            <tr>
              <td>KPI 4</td>
              <td className="table-warning">31 / 50</td>
              <td className="table-success">38 / 50</td>
              <td className="table-warning">31 / 50</td>
            </tr>
           
            <tr>
    <td rowSpan="3">Total</td>
    <td >BCD</td> 
  </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default VendorPerformanceManagement;


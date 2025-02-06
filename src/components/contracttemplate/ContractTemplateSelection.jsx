import React from "react";
import { Link } from "react-router-dom";

function ContractTemplateSelection() {
  return (
    <div className="container" style={{height:'100vh'}}>
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        {/* Left Side Content */}
        <div className="mb-3 mb-md-0">
          <h3
            className="fw-bold mb-1"
            style={{
              lineHeight: "42px",
            }}
          >
            Contract Template Selection
          </h3>
          <p
            style={{
              lineHeight: "18px",
              color: "#6c757d",
            }}
          >
            Choose a template for your agreement.
          </p>
        </div>

        {/* Upload Button */}
        <div>
        <Link to="/costumeagent">
          <button
            className="btn btn-success d-flex align-items-center justify-content-center contrabtn"
            style={{
              borderRadius: "5px",
              width: "100%",
              maxWidth: "337px",
              height: "49px",
              border:'none',
              backgroundColor:'#578E7E',
              color:'white'
            }}
          >
            <i className="fa-solid fa-file-upload me-2"></i>
            Upload Custom Agreement
          </button>
          </Link>
          <Link to="/contractmanage"> 
                     <button
                       style={{
                         width: "120px",
                         height: "49px",
                         border: "none",
                         backgroundColor: "#578E7E",
                         color: "white",
                         borderRadius: "5px",
                         marginTop:'10px'
                       }}>
                       <i className="fa-solid fa-arrow-left"></i> Back
                     </button>
                     </Link>
                     </div>
      </div>

      {/* Cards Section */}
      <div className="row g-4 justify-content-center">
  {/* Card 1 */}
  <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-3">
    <div
      className="border p-3 text-center shadow-sm"
      style={{
        width: "100%",
        height: "209px",
        border: "1px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <i
        className="fa-solid fa-file fs-1 mb-3 text-secondary"
        style={{ fontSize: "60px" }}
      ></i>
      <h5 className="mb-3">Master Service Agreement</h5>
      <div className="d-flex justify-content-between mt-auto">
        <button className="btn  btn-sm w-100 me-1" style={{backgroundColor:'#39BF1B',color:'white'}}>Select</button>
        <div className="w-100">
        <Link to="/documentpre"> <button className="btn  btn-sm w-100" style={{backgroundColor:'#0D99FF',color:'white'}}>View</button></Link>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-3">
    <div
      className="border p-3 text-center shadow-sm"
      style={{
        width: "100%",
        height: "209px",
        border: "1px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <i
        className="fa-solid fa-file fs-1 mb-3 text-secondary"
        style={{ fontSize: "60px" }}
      ></i>
      <h5 className="mb-3">Master Consulting Agreement</h5>
      <div className="d-flex justify-content-between mt-auto">
       
        <button className="btn  btn-sm w-100 me-1" style={{backgroundColor:'#39BF1B',color:'white'}}>Select</button>
        <div className="w-100">
        <Link to="/documentpre"> <button className="btn  btn-sm w-100" style={{backgroundColor:'#0D99FF',color:'white'}}>View</button></Link>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-3">
    <div
      className="border p-3 text-center shadow-sm"
      style={{
        width: "100%",
        height: "209px",
        border: "1px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <i
        className="fa-solid fa-file fs-1 mb-3 text-secondary"
        style={{ fontSize: "60px" }}
      ></i>
      <h5 className="mb-3">Master Purchase Agreement</h5>
      <div className="d-flex justify-content-between mt-auto">
        <button className="btn  btn-sm w-100 me-1" style={{backgroundColor:'#39BF1B',color:'white'}}>Select</button>
        <div className="w-100">
        <Link to="/documentpre"> <button className="btn  btn-sm w-100" style={{backgroundColor:'#0D99FF',color:'white'}}>View</button></Link>
        </div>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-3">
    <div
      className="border p-3 text-center shadow-sm"
      style={{
        width: "100%",
        height: "209px",
        border: "1px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <i
        className="fa-solid fa-file fs-1 mb-3 text-secondary"
        style={{ fontSize: "60px" }}
      ></i>
      <h5 className="mb-3">Statement of Work</h5>
      <div className="d-flex justify-content-between mt-auto">
        <button className="btn  btn-sm w-100 me-1" style={{backgroundColor:'#39BF1B',color:'white'}}>Select</button>
        <div className="w-100">
        <Link to="/documentpre"> <button className="btn  btn-sm w-100" style={{backgroundColor:'#0D99FF',color:'white'}}>View</button></Link>
        </div>
      </div>
    </div>
  </div>

  {/* Card 5 */}
  <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-3">
    <div
      className="border p-3 text-center shadow-sm"
      style={{
        width: "100%",
        height: "209px",
        border: "1px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <i
        className="fa-solid fa-file fs-1 mb-3 text-secondary"
        style={{ fontSize: "60px" }}
      ></i>
      <h5 className="mb-3">Amendment</h5>
      <div className="d-flex justify-content-between mt-auto">
        <button className="btn  btn-sm w-100 me-1" style={{backgroundColor:'#39BF1B',color:'white'}}>Select</button>
        <div className="w-100">
        <Link to="/documentpre"> <button className="btn  btn-sm w-100" style={{backgroundColor:'#0D99FF',color:'white'}}>View</button></Link>
        </div>
      </div>
    </div>
  </div>

  {/* Card 6 */}
  <div className="col-12 col-sm-6 col-md-4 col-lg-2 mx-3">
    <div
      className="border p-3 text-center shadow-sm"
      style={{
        width: "100%",
        height: "209px",
        border: "1px solid transparent",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <i
        className="fa-solid fa-file fs-1 mb-3 text-secondary"
        style={{ fontSize: "60px" }}
      ></i>
      <h5 className="mb-3">Letter of Extension</h5>
      <div className="d-flex justify-content-between mt-auto">
        <button className="btn  btn-sm w-100 me-1" style={{backgroundColor:'#39BF1B',color:'white'}}>Select</button>
        <div className="w-100">
        <Link to="/documentpre"> <button className="btn  btn-sm w-100" style={{backgroundColor:'#0D99FF',color:'white'}}>View</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Footer Section */}
      <div className="d-flex justify-content-center mt-4">
        <button className="btn s px-5" style={{backgroundColor:'#578E7E',color:'white'}}>Next</button>
      </div>
    </div>
  );
}

export default ContractTemplateSelection;
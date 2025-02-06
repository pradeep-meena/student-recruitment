import React from "react";
import { Link } from "react-router-dom";

const ContractapprovalWorkflow = () => {
  return (
    <>
      <div className="container py-5">
        <div className="contractworkflow-section d-flex
        justify-content-between">
        <h3 className="fw-semibold">Contract Approval Workflow</h3>
        <Link to="/approvalworkflow">
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
        <div className="position-absulate">
        <div className="row gy-7 "style={{marginTop:'190px'}}> 
          {/* First Column */}
          <div className="col-md-2 ">
            <div className="workflow-card"style={{top:'30px'}}>
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Procurement review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Andrew Brown
              </small>
            </div>
           
          </div>
          
          
          <div className="col-md-2 " style={{top: "-28px"}}> 
         
          
          <i className="fa-solid fa-arrow-right " style={{zIndex:' 3',color:"silver"}}></i>
          
            <div className="workflow-card" >
           
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> FPSA review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Paola Martinez
              </small>
            </div>
            
            </div>
           
           
           
          {/* Second Column */}
        
          <div className="col-md-2 position-relative " style={{top: "-160px"}}>
          <i className="fa-solid fa-arrow-right " style={{marginLeft:'7px',zIndex:' 3' ,color:"silver"}}></i>
            <div className="workflow-card" >
            <span>
                <i className="fa-solid fa-i bg-success rounded-circle px-2 py-1 text-white " />
              </span>{" "}
              <br /> Legal review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Jonathan Garwood
              </small>
            </div>
            
            <i className="fa-solid fa-arrow-right " style={{marginLeft:'7px',zIndex:' 3' ,color:"silver"}}></i>
            <div className="workflow-card">
              <span>
                <i className="fa-brands fa-atlassian bg-primary rounded-circle p-2 text-white " />
              </span>{" "}
              <br /> IT review
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Ciara Dakota
              </small>
            </div>
           
            <i className="fa-solid fa-arrow-right  " style={{marginLeft:'7px',zIndex:' 3',color:"silver"}}></i>
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-lock bg-success rounded-circle px-2 py-2 text-white " />
              </span>{" "}
              <br /> Fraud & Insurance
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Richard Roe
              </small>
            </div>
            <div className="workflow-line" style={{ borderRight: '2px solid silver',
                height: '830px',
                position: 'absolute',
                 Right: '100%',
                 marginLeft: '-13px',
                 top:'85px'
                
               }}>
             
            </div>
            <i className="fa-solid fa-arrow-right  z-index-1" style={{marginLeft:'7px',zIndex:' 3', color:"silver"}}></i>
            <div className="workflow-card">
              <span>
              <i className="fa-solid fa-i bg-success rounded-circle px-2 py-1 text-white " />
              </span>{" "}
              <br /> Ai & Analytics
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                 Jonathan Garwood
              </small>
            </div>
           
            <i className="fa-solid fa-arrow-right  z-index-1" style={{marginLeft:'7px',zIndex:' 3', color:"silver"}}></i>
            <div className="workflow-card">
              <span>
              <i className="fa-brands fa-atlassian bg-primary rounded-circle p-2 text-white " />
              </span>{" "}
              <br /> Cyber Security 
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Clara Dakota 
              </small>
            </div>
            
            <i className="fa-solid fa-arrow-right  " style={{marginLeft:'7px',zIndex:' 3', color:"silver"}}></i>
            <div className="workflow-card">
              <span>
                <i className="fa-solid fa-lock bg-success rounded-circle px-2 py-2 text-white " />
              </span>{" "}
              <br /> Data Regulatory 
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Richard Roe
              </small>
            </div>
          </div>
          {/* Third Column */}
          <div className="col-md-2">
          <i className="fa-solid fa-arrow-right " style={{zIndex:' 3', color:"silver"}}></i>

            <div className="workflow-card " style={{height:'103px'}}>
          

              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Send vendor portal
            </div>
            <div className="workflow-line">
            
            </div>
         
            
          
          </div>
          {/* Fourth Column */}
          <div className="col-md-2">
          <i className="fa-solid fa-arrow-right " style={{zIndex:' 3',color:"silver"}}></i>
         
          <div className="workflow-card"  style={{height:'103px'}}>
            

            <span>
              <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
            </span>{" "}
            <br /> Create vendor record in NetSuite
           
          </div> 
          
          </div>
          
         
          
          <div className="col-md-2 position-relative "style={{top:'-80px'}} >
         
       
            <div className="row">
          
              <div className="col-md-12">
             
              <i className="fa-solid fa-arrow-right " style={{marginLeft:'7px',zIndex:' 3',color:"silver"}}></i>
             
              <div className="workflow-line" style={{ borderRight: '2px solid silver',
                height: '180px',
                position: 'absolute',
                 Right: '30%',
                 marginLeft: '-16px',
               
                top: '77px',
               }}>
             
            </div>
              <div className="workflow-card" >
             
           
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Contract signature
              <br />
              <small>
                <span>
                  <i className="fa-regular fa-user me-2" />
                </span>{" "}
                Jimmy Zhang
              </small>
             
            </div>
            
              </div>
              
              <div className="col-md-12">
              <i className="fa-solid fa-arrow-right " style={{marginLeft:'7px',zIndex:' 3', color:"silver"}}></i>
              <div className="workflow-card"  style={{height:'103px' }}>
              <span>
                <i className="fa-solid fa-check bg-success rounded-circle p-1 text-white " />
              </span>{" "}
              <br /> Create PO in NetSuite
            </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default ContractapprovalWorkflow;
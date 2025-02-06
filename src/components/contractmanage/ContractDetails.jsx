import React from 'react';
import { Link } from 'react-router-dom';
const ContractDetails = () => {
  return (
    <>
    <div className="contract-details-container">
      <div className="contact">
      <header className="header">
        <div><h1 className="title">Contract Details</h1><strong>#001</strong></div>
        <Link to="/contractmanage"><button
      className="btn btn-success text-white d-flex align-items-center"
      style={{
        width: '120px',
        height: '49px',
        top: '101px',
        left: '1191px',
        gap: '0px',
        border: 'none', 
        opacity: '1', 
        backgroundColor: '#578E7E',
        color: 'white',
        borderRadius: '10px',
        display:'flex',
        justifyContent:'center',
        gap:'5px'
      }}
    >
    <i className="fa-solid fa-arrow-left ms-2"></i>  Back 
    </button></Link>
      </header>
      </div>

      <section className="contract-info1">
        <h2 className="section-title"><u>Contract Information</u></h2>
        <div className="info-item">
          <p>
          <strong>Description:</strong>
           <p className="par" style={{marginLeft:'85px', marginTop:'-20px'}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis nunc et semper feugiat.
            Duis bibendum massa arcu, in cursus purus tempus non. Aliquam eu nibh et purus posuere luctus. Duis
            vehicula ante nec pharetra imperdiet.
           </p>
          </p>
        </div>
        <div className="info-item">
          <strong>Type:</strong> Procurement
        </div>
        <div className="info-item">
          <strong>Start Date:</strong> 01/01/2024
        </div>
        <div className="info-item">
          <strong>End Date:</strong> 31/12/2024
        </div>
        <div className="info-item">
        
        <strong>Milestones:</strong>
          <ul style={{marginLeft:'90px', marginTop:'-22px'}}>
            <li>1. Milestone a</li>
            <li>2. Milestone b</li>
            <li>3. Milestone c</li>
          </ul>
      
        </div>
      </section>
    </div>
    </>
  );
};

export default ContractDetails;
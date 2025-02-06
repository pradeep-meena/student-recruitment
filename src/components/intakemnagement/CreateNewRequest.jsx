import React from "react";
import { Link } from "react-router-dom";

const CreateNewRequest = () => {
  return (
    <div className="container mt-5">
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
  <div>
    <h3 className="fw-bold" style={{ textAlign: 'start', margin: 0 }}>Create New Request</h3>
    <p style={{ textAlign: 'start', margin: 0 }}>Please Provide the details of your request</p>
  </div>
  <div>
    <Link to="/intakemyrequ">
    <button
      style={{
        width: '209px',
        height: '49px',
        border: 'none',
        opacity: '1',
        backgroundColor: '#578E7E',
        color: 'white',
        borderRadius: '5px',
        fontSize: '16px', // Ensures text scales well
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px', // Adds spacing between icon and text
      }}
    >
      <i className="fa-solid fa-book"></i> My Request
    </button></Link>
    <Link to="/intakemanagement">
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
            </button></Link>
    
  </div>
  <style>
    {`
      @media (max-width: 768px) {
        div[style*="display: flex"] {
          flex-direction: column; /* Stack items vertically */
          align-items: flex-start; /* Align items to start */
        }
        button {
          width: 100%; /* Full-width button on smaller screens */
          margin-top: 15px; /* Add spacing between sections */
        }
      }
    `}
  </style>
</div>

      <form>
        {/* Request Type */}
        
          {/* <label htmlFor="requestType" className=" col-md-4 form-labe ">Request Type</label> */}
          <div className="row mb-3 mt-5">
          <div className="col-md-4 mb-3">
          <select id="requestType" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
            <option value="">Request Type</option>
            <option value="1">Type 1</option>
            <option value="2">Type 2</option>
          </select>
          </div>
        </div>

        {/* Category and Subcategory */}
        <h5 style={{borderBottom:'1px solid black',textAlign:'start',marginBottom:'15px'}}>What is the category of your resquest ?</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
        
            <select id="category" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value=""> Category</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="subcategory" className="form-label">Subcategory</label> */}
            <select id="subcategory" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value=""> Subcategory</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
  <select id="category" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
    <option value="" >Engagement Type</option>
  </select>
</div>
        </div>

        {/* Request Details */}
        <h5 style={{borderBottom:'1px solid black',textAlign:'start',marginBottom:'15px'}}>Request Details</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
         
            <input type="text" id="itemDescription" placeholder="Item Description" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="quantity" className="form-label">Quantity (for Goods)</label> */}
            <input type="number" id="quantity" placeholder="Quantity (for Goods"className="form-control p-3" />
          </div>
          <div className="col-md-4">
            {/* <label htmlFor="duration" className="form-label">Duration (for Services)</label> */}
            <input type="text" id="duration"placeholder="Duration (for Services)" className="form-control p-3" />
          </div>
          
        </div>
        <div className="row">
             <div className=" col-md-4 mb-4">
          {/* <label htmlFor="deliveryDate" className="form-label">Expected Delivery Date</label> */}
          <input type="text" id="deliveryDate" placeholder="Expected Delivery Date" className="form-control p-3" />
        </div>
        <div className=" col-md-4 mb-4">
          {/* <label htmlFor="deliveryDate" className="form-label">Expected Delivery Date</label> */}
          <input type="text" id="deliveryDate" placeholder="Execution Timeline" className="form-control p-3" />
        </div>
        <div className=" col-md-4 mb-4">
          {/* <label htmlFor="deliveryDate" className="form-label">Expected Delivery Date</label> */}
          <input type="text" id="deliveryDate" placeholder="Reason for earlier execution (IF Services)" className="form-control p-3" />
        </div>
        
        </div>

        <div className="row">
             <div className=" col-md-4 mb-4">
          {/* <label htmlFor="deliveryDate" className="form-label">Expected Delivery Date</label> */}
          <input type="text" id="deliveryDate" placeholder="Service Duration (in months/years)" className="form-control p-3" />
        </div>
        <div className="col-md-4 mb-3">
            {/* <label htmlFor="contact" className="form-label">Choose Your Contact</label> */}
            <select id="contact" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="">Renewal</option>
            </select>
          </div>
        <div className="col-md-4 mb-3 " style={{marginTop:'-16'}}>
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
      Upload Contract Document
    </label>
  </button>
  <input
    type="file"
    id="fileInput"
    style={{
      display: 'none',
    }}
  />
  </div>
        
        </div>
       

        {/* Budget Information */}
        <h5 style={{borderBottom:'1px solid black', textAlign:'start' ,marginBottom:'15px'}}>Budget Information</h5>
        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="budgetCode"   placeholder="Budget Code" className="form-label">Budget Code</label> */}
            <input type="text" id="budgetCode"  placeholder="Budget Code" className="form-control p-3" />
          </div>
          <div className="col-md-4">
            {/* <label htmlFor="requestedAmount" className="form-label">Requested Amount</label> */}
            <input type="number" id="requestedAmount"  placeholder="Requested Amount" className="form-control p-3" />
          </div>
        </div>

        {/* Requester Information */}
        <h5 style={{borderBottom:'1px solid black',textAlign:'start',marginBottom:'15px'}}>Requester Information</h5>
        <div className="row mb-3">
               <div className="col-md-4 mb-3">
            <input 
             type="text"  id="name" placeholder="Name" className="form-control p-3" />
          </div>
           <div className="col-md-4 mb-3">
           <input  type="text" id="department"placeholder="Department" className="form-control p-3" />
            </div>
           <div className="col-md-4 mb-3">
            <input type="email"id="email" placeholder="Email"className="form-control p-3"/>
          </div>
           </div>
        <div className="row">
        <div className=" col-md-4 mb-3">
          {/* <label htmlFor="contactNumber" className="form-label">Contact Number</label> */}
          <input type="text" id="contactNumber" placeholder="Contact Number" className="form-control p-3" />
        </div>
        <div className=" col-md-8 mb-3">
          {/* <label htmlFor="contactNumber" className="form-label">Contact Number</label> */}
          <input type="text" id="contactNumber" placeholder="Additional Description" className="form-control p-3" />
        </div>
        </div>
       

        {/* Attachments */}
        <h5 style={{borderBottom:'1px solid black',textAlign:'start',marginBottom:'15px'}}>Attachments</h5>
        <div className="row mb-3">
        <div className="col-md-4 mb-3" >
  <button
    className="text-secondary text-center p-3 w-100 "
    style={{
      backgroundColor: 'white',
      
      borderRadius: '5px',
      border: 'none',
      color: 'black',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      
    }}
  >
    <label
      className="text-secondary"
      htmlFor="fileInput"
      style={{
        cursor: 'pointer',
        color: 'black',
        textAlign:'center',
        gap: '8px', 
      }}
    >
      <i class="fa-solid fa-file-import pe-2"></i>
      Click to Upload
    </label>
  </button>
  <input
    type="file"
    id="fileInput"
    style={{
      display: 'none',
      
    }}
  />
</div>

</div>
     {/*Supplier Information */ }
<h5 style={{borderBottom:'1px solid black',textAlign:'start',marginBottom:'15px'}}>Supplier Information</h5>
        <div className="row mb-3">
               <div className="col-md-4 mb-3">
            <input 
             type="text"  id="name" placeholder="Authorized Singnatory" className="form-control p-3" />
          </div>
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="contact" className="form-label">Choose Your Contact</label> */}
            <select id="contact" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="">Choose Your Contact</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <input 
             type="text"  id="name" placeholder="Supplier Name" className="form-control p-3" />
          </div>
           </div>
           
        <div className="row mb-3">
               <div className="col-md-4 mb-3 ">
            <input 
             type="checkbox" className="me-2"/><span>is there a subcontractor involved </span>
          </div>
           <div className="col-md-8 mb-3">
           <input  type="text" id="department"placeholder="Additional information about the subcontractor(if checked)" className="form-control p-3" />
            </div>
           
           </div>


        {/* Some More Information */}
        <h5 style={{borderBottom:'1px solid black',textAlign:'start',marginBottom:'15px'}}>Some More Information</h5>
        <div className="row mb-3 mt-3">
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="vendor" className="form-label">Choose Your Vendor</label> */}
            <select id="vendor" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="" >Choose Your Vendor</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="contact" className="form-label">Choose Your Contact</label> */}
            <select id="contact" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="">Choose Your Contact</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="help" className="form-label">How Can We Help You?</label> */}
            <select id="licenses" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="">How Can We Help You?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 mb-3">
            {/* <label htmlFor="help" className="form-label">How Can We Help You?</label> */}
            <select id="licenses" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="">What do you need to boy ?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="col-md-8 mb-3">
          {/* Do You Need to Add Licenses for an Existing Product? */}
            <select id="licenses" className="form-select p-3" style={{fontSize:'16px',fontFamily:'inherit', color:'gray'}}>
              <option value="">Do You Need to Add Licenses for an Existing Product?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

        </div>
        
        <input type="checkbox" className="me-2"/>Does it involve cloud?<br/>
        <input type="checkbox" className="me-2"/>Does this contract need to share customer or employee information?

        {/* Buttons */}
        <div className="d-flex justify-content-center ">
          <button type="button" className="btn me-3 " style={{backgroundColor:'white',border:'1px solid #578e7e', color:'#578e7e',padding:'10px',width:'150px'}}>Cancel</button>
          <button type="submit" className="btn "style={{backgroundColor:'#578E7E', color:'white',padding:'10px',width:'150px'}}>Save</button>
        </div>
      </form>
    </div>
    
  );
};

export default CreateNewRequest;
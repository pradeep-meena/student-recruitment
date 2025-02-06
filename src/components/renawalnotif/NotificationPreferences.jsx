import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NotificationPreferences = () => {
  

  const [selectedOption, setSelectedOption] = useState("");
  const [otherInput, setOtherInput] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    if (e.target.value !== "Other") {
      setOtherInput(""); // Clear other input when a predefined option is selected
    }
  };

  const handleOtherInputChange = (e) => {
    setOtherInput(e.target.value);
  };


  const handleReset = () => {
    setLeaseAgreement(true);
    setServiceContract(false);
    setMaintenanceAgreement(false);
  };

  const handleSave = () => {
    alert('Preferences Saved!');
  };

  return (
    <>
     {/* <div>
      <label htmlFor="providerType" className="form-label">
        Select Provider Type
      </label>
      <select
        className="form-select"
        id="providerType"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" selected hidden>
          Select provider type
        </option>
        <option value="Caregiver">Caregiver</option>
        <option value="Nurse">Nurse</option>
        <option value="Physical Therapist">Physical Therapist</option>
        <option value="Occupational Therapist">Occupational Therapist</option>
        <option value="Other">Other</option>
      </select>

      {selectedOption === "Other" && (
        <div className="mt-3">
          <label htmlFor="otherProviderType" className="form-label">
            Please specify:
          </label>
          <input
            type="text"
            className="form-control"
            id="otherProviderType"
            value={otherInput}
            onChange={handleOtherInputChange}
            placeholder="Enter provider type"
          />
        </div>
      )}
    </div> */}
    <div className="notification-container">
      <div className="header">
        <div className="noti-main-head">
        <h1 className="title">Set Your Notification Preferences</h1>
        <p className="subtitle">
          Customize when and how you want to receive renewal reminders
        </p>
        </div>
        <Link to="/editrenewalnoti"> 
        <button className="email-template-btn">Email Template <i className="fa-solid fa-arrow-right"></i></button>
        </Link>
       
      </div>

      <div className="form">
        <div className="form-group">
          <label className="form-label">Remind me before renewal</label>
          <div className="row g-3">
        {/* First Select Box */}
        <div className="col-12 col-md-4">
          <select
            id="renewalDays"
            value={selectedOption}
            onChange={handleSelectChange}
            className="form-select"
          >
            <option value="" disabled hidden>
              Select renewal Days
            </option>
            <option value="180">180 Days</option>
            <option value="120">120 Days</option>
            <option value="60">60 Days</option>
            <option value="Other">Custom</option>
          </select>
        </div>

        {/* Second Select Box */}
        <div className="col-12 col-md-4">
          <select
            id="renewalType"
            value={selectedOption}
            onChange={handleSelectChange}
            className="form-select"
          >
            <option value="" disabled hidden>
              Renewal or New Engagement
            </option>
            <option value="Renewal">Renewal</option>
            <option value="NewEngagement">New Engagement</option>
          </select>
        </div>
      </div>
          {selectedOption === "Other" && (
        <div className=" mt-3">
        
          <label htmlFor="otherProviderType" className="form-label">
            Please specify:
          </label>
          <input
            type="text"
            className="form-control"
            id="otherProviderType"
            value={otherInput}
            onChange={handleOtherInputChange}
            placeholder="Enter custom days"
          />
        
        </div>
      )}
        </div>


        <div className="form-group">
          <label className="form-label">Enable/Disable Reminders by Contract Type</label>
          <div className="toggle-group">
          <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" checked id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">Lease Agreements</label>
          </div>
          <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
               <label class="form-check-label" for="flexSwitchCheckDefault">Service Contracts</label>
          </div>
          <div class="form-check form-switch">
             <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
             <label class="form-check-label" for="flexSwitchCheckDefault">Maintenance Agreements</label>
         </div>
          </div>
        </div>

        <div className="notifi-button-group">
          <button className="reset-button" onClick={handleReset}>
            RESET
          </button>
          <button className="save-button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotificationPreferences;
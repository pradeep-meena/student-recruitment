
  import React, { useState } from 'react';

  const AdmissionTracking= () => {
    const [formData, setFormData] = useState({
      fullName: '',
      dob: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      highSchool: '',
      highSchoolYear: '',
      highSchoolGrade: '',
      undergraduate: '',
      certifications: '',
      desiredProgram: '',
      preferredUniversity: '',
      startDate: '',
      terms: false,
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked, files } = e.target;
      if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
      } else if (type === 'file') {
        // For file inputs, you can process files as needed
        setFormData({ ...formData, [name]: files });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Add submission logic here (e.g., API call)
    };
  
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Admission Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="card p-4 mb-4">
            <h4>Personal Information</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="gender">Gender</label>
                <select
                  className="form-control"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="address">Residential Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
  
          {/* Educational Background */}
          <div className="card p-4 mb-4">
            <h4>Educational Background</h4>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="highSchool">High School</label>
                <input
                  type="text"
                  className="form-control"
                  id="highSchool"
                  name="highSchool"
                  value={formData.highSchool}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="highSchoolYear">Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="highSchoolYear"
                  name="highSchoolYear"
                  value={formData.highSchoolYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="highSchoolGrade">Grade</label>
                <input
                  type="text"
                  className="form-control"
                  id="highSchoolGrade"
                  name="highSchoolGrade"
                  value={formData.highSchoolGrade}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="undergraduate">Undergraduate (if applicable)</label>
                <input
                  type="text"
                  className="form-control"
                  id="undergraduate"
                  name="undergraduate"
                  value={formData.undergraduate}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="certifications">Additional Certifications/Courses</label>
                <input
                  type="text"
                  className="form-control"
                  id="certifications"
                  name="certifications"
                  value={formData.certifications}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
  
          {/* Program & Course Selection */}
          <div className="card p-4 mb-4">
            <h4>Program & Course Selection</h4>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="desiredProgram">Desired Program</label>
                <input
                  type="text"
                  className="form-control"
                  id="desiredProgram"
                  name="desiredProgram"
                  value={formData.desiredProgram}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="preferredUniversity">Preferred University/College</label>
                <input
                  type="text"
                  className="form-control"
                  id="preferredUniversity"
                  name="preferredUniversity"
                  value={formData.preferredUniversity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="startDate">Preferred Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
  
          {/* Document Upload */}
          <div className="card p-4 mb-4">
            <h4>Document Upload</h4>
            <div className="mb-3">
              <label htmlFor="passportPhoto">Passport Photo</label>
              <input
                type="file"
                className="form-control-file"
                id="passportPhoto"
                name="passportPhoto"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="documents">Academic Transcripts & Certificates</label>
              <input
                type="file"
                className="form-control-file"
                id="documents"
                name="documents"
                onChange={handleChange}
                multiple
              />
            </div>
          </div>
  
          {/* Declaration & Consent */}
          <div className="card p-4 mb-4">
            <h4>Declaration & Consent</h4>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the terms and conditions
              </label>
            </div>
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </div>
    );
  };
  
  export default  AdmissionTracking;
  
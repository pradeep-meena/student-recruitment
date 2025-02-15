import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleShow = (student) => {
    setSelectedStudent(student);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const students = [
    {
      admissionNo: 1001,
      name: "Hudson",
      rollNo: "0201",
      class: "Class 1(A)",
      fatherName: "Emrys",
      dob: "02/06/2019",
      gender: "Male",
      category: "General",
      mobile: "16514840184",
    },
    {
      admissionNo: 1020,
      name: "Marlie",
      rollNo: "0204",
      class: "Class 1(A)",
      fatherName: "Lester",
      dob: "05/22/2019",
      gender: "Female",
      category: "General",
      mobile: "6595084801",
    },
    {
      admissionNo: 120036,
      name: "Ayan Desai",
      rollNo: "23620",
      class: "Class 1(A)",
      fatherName: "Abhinand",
      dob: "10/15/2015",
      gender: "Male",
      category: "General",
      mobile: "9067875674",
    },
    {
      admissionNo: 2152,
      name: "Kaylen",
      rollNo: "0205",
      class: "Class 1(A)",
      fatherName: "Lyndon",
      dob: "06/19/2019",
      gender: "Female",
      category: "General",
      mobile: "54180185420",
    },
    {
      admissionNo: 7663,
      name: "Paul S. Bealer",
      rollNo: "6230",
      class: "Class 1(A)",
      fatherName: "McMahon",
      dob: "08/13/2005",
      gender: "Male",
      category: "General",
      mobile: "789067867",
    },
    {
      admissionNo: 96302,
      name: "Jacob Bethell",
      rollNo: "221002",
      class: "Class 1(A)",
      fatherName: "Brydon",
      dob: "08/19/2016",
      gender: "Male",
      category: "General",
      mobile: "065758878",
    },
  ];

  return (
    <div className="container mt-3">
      <h5>Select Criteria</h5>
      <div className="row g-2 align-items-center">
        <div className="col-md-3">
          <label className="form-label">
            Class <span className="text-danger">*</span>
          </label>
          <select className="form-select">
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label">Section</label>
          <select className="form-select">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Search By Keyword</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search By Student Name, Roll Number, Enroll Number, etc."
          />
        </div>

        <div className="col-md-2 d-flex">
          <button className="btn btn-secondary mt-4 w-100">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to="/studentDetails">
            List View
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/manaDetails">
            Details View
          </Link>
        </li>
      </ul>

      <input
        type="text"
        className="form-control my-3"
        placeholder="Search..."
      />

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Student Name</th>
              <th>Admission No</th>
              <th>Roll No.</th>
              <th>Class</th>
              <th>Father Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Category</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="text-center">
                  <Link
                    to={{
                      pathname: `/studentProfile/${student.admissionNo}`,
                      state: { selectedStudent: student },
                    }}
                    className="text-decoration-none text-nowrap"
                  >
                    {student.name}
                  </Link>
                </td>
                <td>{student.admissionNo}</td>

                <td>{student.rollNo}</td>
                <td>{student.class}</td>
                <td>{student.fatherName}</td>
                <td>{student.dob}</td>
                <td>{student.gender}</td>
                <td>{student.category}</td>
                <td>{student.mobile}</td>
                <td>
                  <button
                    className="btn btn-light btn-sm me-1"
                    onClick={() => handleShow(student)}
                  >
                    ☰
                  </button>
                  <button className="btn btn-light btn-sm me-1">✎</button>
                  <button className="btn btn-light btn-sm">$</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;

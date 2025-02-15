import React from "react";
import { useParams } from "react-router-dom";

const students = [
  {
    admissionNo: 1001,
    name: "Hudson",
    rollNo: "0201",
    class: "Class 1(A)",
    fatherName: "Emrys",
    dob: "02/06/2019",
    gender: "Male",
    guardianName: "Emrys",
    guardianPhone: "16514840184",
  },
  {
    admissionNo: 1020,
    name: "Marlie",
    rollNo: "0204",
    class: "Class 1(A)",
    fatherName: "Lester",
    dob: "05/22/2019",
    gender: "Female",
    guardianName: "Lester",
    guardianPhone: "6595084801",
  },
];
function StudentDetailsPage() {
  const { admissionNo } = useParams();
  const selectedStudent = students.find(
    (student) => student.admissionNo.toString() === admissionNo
  );

  return (
    <div className="container mt-3">
      <h2>Student Details</h2>
      {selectedStudent ? (
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary">{selectedStudent.name}</h5>
            <p className="card-text">
              <strong>Class:</strong> {selectedStudent.class}
            </p>
            <p className="card-text">
              <strong>Admission No:</strong> {selectedStudent.admissionNo}
            </p>
            <p className="card-text">
              <strong>Date of Birth:</strong> {selectedStudent.dob}
            </p>
            <p className="card-text">
              <strong>Gender:</strong> {selectedStudent.gender}
            </p>
            <p className="card-text">
              <strong>Guardian Name:</strong> {selectedStudent.guardianName}
            </p>
            <p className="card-text">
              <strong>Guardian Phone:</strong> {selectedStudent.guardianPhone}
            </p>
          </div>
        </div>
      ) : (
        <p>No student selected.</p>
      )}
    </div>
  );
}

export default StudentDetailsPage;

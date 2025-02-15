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
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Student Details - Hazel</title>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .details-container {\n            max-width: 1200px;\n            margin: 20px auto;\n            padding: 20px;\n            border: 1px solid #ddd;\n            border-radius: 5px;\n            \n        }\n\n        .details-container h1 {\n            margin-bottom: 20px;\n        }\n\n        .details-container h2 {\n            margin-top: 20px;\n            margin-bottom: 10px;\n        }\n\n        .navbar-nav {\n            flex-direction: row;\n            flex-wrap: wrap;\n        }\n\n        .nav-item {\n            margin-right: 10px;\n        }\n\n        .profile-image {\n            max-width: 100%;\n            height: auto;\n            border-radius: 50%;\n        }\n\n        .table-borderless td,\n        .table-borderless th {\n            border: none;\n            padding: 8px;\n        }\n\n        .table-spacing td,\n        .table-spacing th {\n            padding: 12px;\n        }\n    ",
        }}
      />
      <div className="container">
        <div className="details-container">
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="row mt-5">
                <div className="col-4 mb-3">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Image"
                    className="profile-image"
                  />
                </div>
                <div className="col-8">
                  Hazel <br />
                  Admission No: 1205 Roll Number: 02030203
                </div>
              </div>
              <table className="mt-3 table table-borderless table-spacing">
                <tbody>
                  <tr>
                    <td>
                      <strong>Class:</strong>
                    </td>
                    <td>Class 1 (2024:25)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Section:</strong>
                    </td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>RTE:</strong>
                    </td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Gender:</strong>
                    </td>
                    <td>Female</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-8">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Fees
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Exam
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        CBSE Examination
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Documents
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="m-3 p-4 border">
                <table className="table table-borderless table-spacing">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Admission Date</strong>
                      </td>
                      <td>04/02/2024</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Date of Birth</strong>
                      </td>
                      <td>06/19/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Category</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Mobile Number</strong>
                      </td>
                      <td>6595048420</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Caste</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Religion</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Email</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Medical History</strong>
                      </td>
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <strong>Note</strong>
                      </td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="m-3 p-4 border">
                <p className="fw-bold border-bottom bg-light">Address</p>
                <table className="table table-borderless table-spacing">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Current Address:</strong>
                      </td>
                      <td>[Current Address Placeholder]</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Permanent Address:</strong>
                      </td>
                      <td>[Permanent Address Placeholder]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentDetailsPage;

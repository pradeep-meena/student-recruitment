import React, { useState } from "react";

const CourseUniversityDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const universities = [
    {
      id: 1,
      name: "University of XYZ",
      programs: ["Engineering", "Medicine", "Arts"],
    },
    { id: 2, name: "ABC University", programs: ["Law", "Science", "Business"] },
    // Add more universities as needed
  ];

  const courseDetails = [
    {
      universityId: 1,
      program: "Engineering",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      fee: "$10,000/year",
    },
    {
      universityId: 2,
      program: "Law",
      eligibility: "Undergraduate degree with minimum 50%",
      fee: "$15,000/year",
    },
    // Add more courses as needed
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUniversityChange = (event) => {
    setSelectedUniversity(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCourses = courseDetails.filter(
    (course) =>
      (selectedUniversity
        ? course.universityId === parseInt(selectedUniversity)
        : true) && (selectedCourse ? course.program === selectedCourse : true)
  );

  return (
    <div className="container">
      <h1>Course & University Database</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a university"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* University Selector */}
      <div className="mb-4">
        <select
          className="form-control"
          value={selectedUniversity}
          onChange={handleUniversityChange}
        >
          <option value="">Select University</option>
          {universities.map((university) => (
            <option key={university.id} value={university.id}>
              {university.name}
            </option>
          ))}
        </select>
      </div>

      {/* Program Selector */}
      {selectedUniversity && (
        <div className="mb-4">
          <select
            className="form-control"
            value={selectedCourse}
            onChange={handleCourseChange}
          >
            <option value="">Select Program</option>
            {universities
              .find((u) => u.id === parseInt(selectedUniversity))
              .programs.map((program, idx) => (
                <option key={idx} value={program}>
                  {program}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Courses List */}
      <div>
        {filteredCourses.length > 0 ? (
          <ul className="list-group">
            {filteredCourses.map((course, idx) => (
              <li key={idx} className="list-group-item">
                <h5>{course.program}</h5>
                <p>
                  <strong>Eligibility:</strong> {course.eligibility}
                </p>
                <p>
                  <strong>Fee:</strong> {course.fee}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default CourseUniversityDatabase;

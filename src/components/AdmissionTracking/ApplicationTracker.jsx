import { useState } from "react";
import { Table, Container, Form } from "react-bootstrap";

const ApplicationTracker = () => {
  const initialApplications = [
    { id: 101, name: "John Doe", stage: "submitted", deadline: "2025-02-10" },
    { id: 102, name: "Alice Smith", stage: "reviewed", deadline: "2025-02-15" },
    { id: 103, name: "Bob Johnson", stage: "approved", deadline: "2025-02-20" },
    { id: 104, name: "Emma Brown", stage: "rejected", deadline: "2025-02-25" },
  ];

  const [applications, setApplications] = useState(initialApplications);
  const [filterStage, setFilterStage] = useState("all");

  // Filter applications by stage
  const filteredApplications = applications.filter(
    (app) => filterStage === "all" || app.stage === filterStage
  );

  // Update application stage
  const updateStage = (id, newStage) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, stage: newStage } : app
      )
    );
  };

  return (
    <Container className="p-3"  >
      <h4 className="fw-bold mb-4">Application Tracker</h4>

      {/* Filter Dropdown */}
      <Form.Group className="mb-3">
        <Form.Label>Filter by Stage</Form.Label>
        <Form.Select
          onChange={(e) => setFilterStage(e.target.value)}
          value={filterStage}
        >
          <option value="all">All Stages</option>
          <option value="submitted">Submitted</option>
          <option value="reviewed">Reviewed</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </Form.Select>
      </Form.Group>

      {/* Applications Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>Applicant Name</th>
            <th>Stage</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>
                <Form.Select
                  value={app.stage}
                  onChange={(e) => updateStage(app.id, e.target.value)}
                >
                  <option value="submitted">Submitted</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </Form.Select>
              </td>
              <td>{app.deadline}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ApplicationTracker;

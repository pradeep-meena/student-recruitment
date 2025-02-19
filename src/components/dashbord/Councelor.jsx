import React, { useState } from "react";
import { Card, Table, Button, Container, Row, Col } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummyLeads = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", status: "Pending" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", status: "Converted" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "555-555-5555", status: "Pending" },
];

const counselorProfile = {
  name: "Sarah Williams",
  email: "sarah.williams@example.com",
  phone: "999-888-7777",
  role: "Senior Counselor",
};

const CounselorDashboard = () => {
  const [leads, setLeads] = useState(dummyLeads);

  const pendingLeads = leads.filter((lead) => lead.status === "Pending").length;
  const convertedLeads = leads.filter((lead) => lead.status === "Converted").length;

  const chartData = {
    labels: ["Pending", "Converted"],
    datasets: [
      {
        data: [pendingLeads, convertedLeads],
        backgroundColor: ["#FFCE56", "#36A2EB"],
      },
    ],
  };

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <Col md={4}>
          <Card className="p-3 text-center">
            <h5>Total Leads</h5>
            <h3>{leads.length}</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center">
            <h5>Pending Follow-ups</h5>
            <h3>{pendingLeads}</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 text-center">
            <h5>Converted Leads</h5>
            <h3>{convertedLeads}</h3>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Card className="p-3 text-center">
            <h5>Lead Distribution</h5>
            <Pie data={chartData} />
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Card className="p-3 text-center">
            <h5>Counselor Profile</h5>
            <p><strong>Name:</strong> {counselorProfile.name}</p>
            <p><strong>Email:</strong> {counselorProfile.email}</p>
            <p><strong>Phone:</strong> {counselorProfile.phone}</p>
            <p><strong>Role:</strong> {counselorProfile.role}</p>
          </Card>
        </Col>
      </Row>

      <h3>Lead List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.status}</td>
              <td>
                <Button variant="primary">Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CounselorDashboard;

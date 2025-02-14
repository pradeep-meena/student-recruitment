import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Dropdown, Breadcrumb, Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const Contact  = () => {
  // State for contracts
  const [contracts, setContracts] = useState([
    { id: "CON00002", subject: "Software Development Contract", client: "Mick Aston", project: "Bootstrap Framework", type: "Marketing", value: "USD 80,00", startDate: "07-10-2024", endDate: "08-12-2024" },
    { id: "CON00003", subject: "Marketing Campaign Project Agreement", client: "Jennifer Ellison", project: "Website Redesign", type: "Planning", value: "USD 5.000,00", startDate: "08-10-2024", endDate: "21-01-2025" },
    { id: "CON00004", subject: "Consulting Project Contract", client: "Kelly Brook", project: "Payment Integration", type: "Marketing", value: "USD 800.000,00", startDate: "08-09-2024", endDate: "14-01-2025" }
  ]);

  const [show, setShow] = useState(false);

  // Functions to handle modal visibility
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [contractData, setContractData] = useState({
    subject: "",
    client: "",
    project: "",
    contractType: "Marketing",
    contractValue: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setContractData({ ...contractData, [e.target.name]: e.target.value });
  };

  const handleAddContract = () => {
    const newContract = {
      id: `CON0000${contracts.length + 1}`,
      subject: contractData.subject,
      client: contractData.client,
      project: contractData.project,
      type: contractData.contractType,
      value: contractData.contractValue,
      startDate: contractData.startDate,
      endDate: contractData.endDate,
    };
    setContracts([...contracts, newContract]);
    handleClose();
    setContractData({
      subject: "",
      client: "",
      project: "",
      contractType: "Marketing",
      contractValue: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleDeleteContract = (id) => {
    setContracts(contracts.filter(contract => contract.id !== id));
  };

  return (
    <div className="container p-0">
      {/* Breadcrumb Navigation */}
      <Row className="mb-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Contract</Breadcrumb.Item>
          </Breadcrumb>
          <h5 className="fw-bold">Manage Contract</h5>
        </Col>

        {/* Action Buttons */}
        <Col className="text-end">
          <Button variant="info" className="me-2">
            <i className="bi bi-grid-3x3-gap"></i>
          </Button>
          <Button variant="primary" onClick={handleShow}>
            + Add
          </Button>
        </Col>
      </Row>

      {/* Dropdown and Search Bar */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            10
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>10</Dropdown.Item>
            <Dropdown.Item>25</Dropdown.Item>
            <Dropdown.Item>50</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control type="text" placeholder="Search..." className="w-25" />
      </div>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>SUBJECT</th>
            <th>CLIENT</th>
            <th>PROJECT</th>
            <th>CONTRACT TYPE</th>
            <th>CONTRACT VALUE</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract, index) => (
            <tr key={contract.id}>
              <td>
                <span className="badge bg-success text-white">{contract.id}</span>
              </td>
              <td>{contract.subject}</td>
              <td>{contract.client}</td>
              <td>{contract.project}</td>
              <td>{contract.type}</td>
              <td>{contract.value}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td className="d-grid gap-1">
                                  <Button  className="btn btn-light btn-sm me-1">
                                   👁
                                 </Button>
                                 <Button className="btn btn-light btn-sm me-1">
                                   ✏
                                 </Button>
                                 <Button className="btn btn-light btn-sm me-1" onClick={() => handleDelete(index)}>
                                   🗑
                                 </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Footer */}
      <div className="d-flex justify-content-between">
        <span>Showing 1 to {contracts.length} of {contracts.length} entries</span>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Contract</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="success" className="mb-3">
            <i className="bi bi-robot"></i> Generate with AI
          </Button>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Subject*</Form.Label>
                  <Form.Control type="text" name="subject" placeholder="Enter Subject" onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Client*</Form.Label>
                  <Form.Select name="client" onChange={handleChange}>
                    <option>Select Client</option>
                    <option value="client1">Client 1</option>
                    <option value="client2">Client 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Projects</Form.Label>
                  <Form.Select name="project" onChange={handleChange}>
                    <option>Select Project</option>
                    <option value="project1">Project 1</option>
                    <option value="project2">Project 2</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Contract Type*</Form.Label>
                  <Form.Select name="contractType" onChange={handleChange}>
                    <option>Marketing</option>
                    <option>Planning</option>
                    <option>Consulting</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Contract Value</Form.Label>
                  <Form.Control type="text" name="contractValue" placeholder="Enter Contract Value" onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Start Date*</Form.Label>
                  <Form.Control type="date" name="startDate" onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>End Date*</Form.Label>
                  <Form.Control type="date" name="endDate" onChange={handleChange} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" name="description" placeholder="Enter Description" onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAddContract}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact ;
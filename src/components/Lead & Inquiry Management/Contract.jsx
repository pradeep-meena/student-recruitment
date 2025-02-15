import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Breadcrumb, Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const Contract = () => {
  const [show, setShowModal] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  // State for contracts
  const [contracts, setContracts] = useState([
    {
      id: "CON00002",
      subject: "Software Development Contract",
      client: "Mick Aston",
      project: "Bootstrap Framework",
      contractType: "Marketing",
      value: "USD 80,000",
      startDate: "2024-05-20",
      endDate: "2024-05-20",
      description: "Contract for software development services.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },
    {
      id: "CON00003",
      subject: "Marketing Campaign Project Agreement",
      client: "Jennifer Ellison",
      project: "Website Redesign",
      contractType: "Planning",
      value: "USD 5,000",
      startDate: "2024-09-20",
      endDate: "2024-03-23",
      description: "Agreement for marketing campaign execution.",
    },

  ]);

  const [contractData, setContractData] = useState({
    subject: "",
    client: "",
    project: "",
    contractType: "Marketing",
    value: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setContractData({ ...contractData, [e.target.name]: e.target.value });
  };

  const handleShow = () => {
    setSelectedContract(null);
    setContractData({
      subject: "",
      client: "",
      project: "",
      contractType: "Marketing",
      value: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setShowModal(true);
  };

  // Handle Closing Modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedContract(null);
  };

  // Handle Adding New Contract
  const handleData = () => {
    setContracts([
      ...contracts,
      {
        id: `CON000${contracts.length + 1}`,
        subject: contractData.subject,
        client: contractData.client,
        project: contractData.project,
        contractType: contractData.contractType,
        value: contractData.value,
        startDate: contractData.startDate,
        endDate: contractData.endDate,
        description: contractData.description,
      },
    ]);
    handleClose();
  };

  // Handle Editing a Contract
  const handleEdit = (contract) => {
    setSelectedContract(contract);
    setContractData(contract);
    setShowModal(true);
  };

  // Handle Updating an Existing Contract
  const handleUpdate = () => {
    setContracts(
      contracts.map((contract) =>
        contract.id === selectedContract.id
          ? { ...contract, ...contractData }
          : contract
      )
    );
    handleClose();
  };

  // Handle Deleting a Contract
  const handleDelete = (id) => {
    setContracts(contracts.filter((contract) => contract.id !== id));
  };

  return (
    <div className="container p-3">
      {/* Breadcrumb Navigation */}
      <h4 className="fw-bold">Contact</h4>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-success text-decoration-none">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Leads
          </li>
        </ol>
      </nav>
      <Row className="mb-3">
        <Form.Select className="w-auto">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Form.Select>

        <Col className="text-end gap-2">
          <Button variant="outline-dark" onClick={handleShow}>
            + Add
          </Button>
        </Col>
      </Row>

      {/* Table */}
      <Table striped bordered hover responsive>
        <thead className="table-light text-nowrap">
          <tr>
            <th>#</th>
            <th>SUBJECT</th>
            <th>LEARNER</th>
            <th>PROJECT</th>
            <th>TYPE</th>
            <th>PAYMENT</th>
            <th>START DATE</th>
            <th>END DATE</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <td>
                <span className="badge bg-success text-white">
                  {contract.id}
                </span>
              </td>
              <td>{contract.subject}</td>
              <td>{contract.client}</td>
              <td>{contract.project}</td>
              <td>{contract.contractType}</td>
              <td>{contract.value}</td>
              <td>{contract.startDate}</td>
              <td>{contract.endDate}</td>
              <td>{contract.description}</td>
              <td className="text-nowrap">
                <Button size="sm" className="btn btn-light btn-sm me-1">
                  👁️
                </Button>
                <Button
                  size="sm"
                  className="btn btn-light btn-sm me-1"
                  onClick={() => handleEdit(contract)}
                >
                  ✏️
                </Button>
                <Button
                  size="sm"
                  className="btn btn-light btn-sm me-1"
                  onClick={() => handleDelete(contract.id)}
                >
                  🗑️
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedContract ? "Edit Contract" : "Create New Contract"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Subject*</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={contractData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Client*</Form.Label>
                  <Form.Control
                    type="text"
                    name="client"
                    value={contractData.client}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Project*</Form.Label>
                  <Form.Control
                    type="text"
                    name="project"
                    value={contractData.project}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Contract Type*</Form.Label>
                  <Form.Select
                    name="contractType"
                    value={contractData.contractType}
                    onChange={handleChange}
                  >
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
                  <Form.Label>Contract Value*</Form.Label>
                  <Form.Control
                    type="number"
                    name="value"
                    value={contractData.value}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Start Date*</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={contractData.startDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>End Date*</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={contractData.endDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={contractData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={selectedContract ? handleUpdate : handleData}
          >
            {selectedContract ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contract;

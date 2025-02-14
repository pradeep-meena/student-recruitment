import React, { useState } from "react";
import { Table, FormControl, InputGroup } from "react-bootstrap";
import { Card, Button, Row, Col, Dropdown } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const dealsData = [
  {
    title: "Total Deals",
    amount: "$232,000.00",
    color: "text-success",
    iconBg: "bg-success",
  },
  {
    title: "This Month Total Deals",
    amount: "$0.00",
    color: "text-primary",
    iconBg: "bg-primary",
  },
  {
    title: "This Week Total Deals",
    amount: "$0.00",
    color: "text-warning",
    iconBg: "bg-warning",
  },
  {
    title: "Last 30 Days Total Deals",
    amount: "$71,000.00",
    color: "text-danger",
    iconBg: "bg-danger",
  },
];

const initialData = [
  {
    name: "Smart Agriculture Project",
    price: "$50,000.00",
    stage: "Open",
    tasks: "0/0",
    users: ["https://via.placeholder.com/30"],
  },
  {
    name: "Hybrid",
    price: "$40,000.00",
    stage: "Proposal",
    tasks: "4/3",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Stella",
    price: "$35,000.00",
    stage: "Meeting",
    tasks: "3/0",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Refocus",
    price: "$30,000.00",
    stage: "Close",
    tasks: "3/1",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Whitecoat",
    price: "$25,000.00",
    stage: "Initial Contact",
    tasks: "4/2",
    users: ["https://via.placeholder.com/30", "https://via.placeholder.com/30"],
  },
  {
    name: "Tailwinds",
    price: "$15,000.00",
    stage: "Initial Contact",
    tasks: "4/2",
    users: ["https://via.placeholder.com/30"],
  },
  {
    name: "Discover Financial",
    price: "$10,000.00",
    stage: "Close",
    tasks: "0/0",
    users: ["https://via.placeholder.com/30"],
  },
];

const Deal = () => {
  const [dealName, setDealName] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(initialData); // Manage data with state

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new deal to the data array
    const newDeal = {
      name: dealName,
      price: `$${price}.00`,
      stage: "Open", // Default stage
      tasks: "0/0", // Default tasks
      users: ["https://via.placeholder.com/30"], // Default user
    };
    setData([...data, newDeal]); // Update data state
    setDealName(""); // Reset form fields
    setPhone("");
    setPrice(0);
    handleClose(); // Close modal
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index); // Remove the deal at the specified index
    setData(updatedData); // Update data state
  };

  return (
    <>
      <div className="container p-3">
        <h4 className="fw-bold">Manage Deals - Plan</h4>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
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
          <div className="d-flex gap-2">
            <Dropdown>
              <Dropdown.Toggle variant="light" className="border">
                Plan
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Basic</Dropdown.Item>
                <Dropdown.Item href="#">Premium</Dropdown.Item>
                <Dropdown.Item href="#">Enterprise</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-dark" onClick={handleShow}>
              + Add
            </Button>
          </div>
        </div>
        <br />
        <Row className="mt-3">
          {dealsData.map((deal, index) => (
            <Col key={index} md={3} sm={6} xs={12} className="mb-3">
              <Card className="shadow-sm border-0">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title className="fw-bold">{deal.title}</Card.Title>
                    <h4 className={`fw-bold ${deal.color}`}>{deal.amount}</h4>
                  </div>
                  <div className={`p-3 rounded-circle ${deal.iconBg}`}>🚀</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <InputGroup className="mb-3 w-50">
          <FormControl placeholder="Search..." />
        </InputGroup>

        <Table responsive bordered hover className="table text-center">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stage</th>
              <th>Tasks</th>
              <th>Users</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.stage}</td>
                <td>{row.tasks}</td>
                <td>
                  {row.users.map((user, i) => (
                    <img
                      key={i}
                      src={user}
                      alt="User"
                      className="rounded-circle"
                      width="30"
                      height="30"
                    />
                  ))}
                </td>
                <td className="text-nowrap">
                  <Button  className="btn btn-light btn-sm me-1">
                    👁
                  </Button>
                  <Button size="sm" className="btn btn-light btn-sm me-1">
                    ✏️
                  </Button>
                  <Button
                    size="sm"
                    className="btn btn-light btn-sm me-1"
                    onClick={() => handleDelete(index)}
                  >
                    🗑️
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create Deal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Deal Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Deal Name"
                  value={dealName}
                  onChange={(e) => setDealName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone No"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  className="me-2"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="success">
                  Create
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Deal;

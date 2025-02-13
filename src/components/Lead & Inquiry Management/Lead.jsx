import { Dropdown, Button, Table, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const Lead = () => {
  const initialData = [
    {
      name: "Encoure",
      subject: "Encoure",
      stage: "Sent",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
    {
      name: "Alexandria",
      subject: "Alexandria",
      stage: "Open",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
    {
      name: "Netpoints",
      subject: "Netpoints",
      stage: "Sent",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
    {
      name: "Starburst",
      subject: "Starburst",
      stage: "Sent",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
    {
      name: "Sophia Francis",
      subject: "Tasha Sanford",
      stage: "Sent",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
  ];

  const [data, setData] = useState(initialData);
  const [show, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    user: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      name: formData.name,
      subject: formData.subject,
      stage: "Open", // Default stage for new leads
      users: ["user1.jpg", "user2.jpg", "user3.jpg"], // Default users for new leads
    };
    setData([...data, newLead]);
    setFormData({
      subject: "",
      user: "",
      name: "",
      email: "",
      phone: "",
    });
    handleClose();
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index); // Remove the lead at the specified index
    setData(updatedData);
  };

  return (
    <div className="container p-3">
      <h4 className="fw-bold">Manage Leads - Plan</h4>

      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-success text-decoration-none">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Leads</li>
          </ol>
        </nav>
        <div className="d-flex gap-2">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="border">Plan</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Basic</Dropdown.Item>
              <Dropdown.Item href="#">Premium</Dropdown.Item>
              <Dropdown.Item href="#">Enterprise</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="outline-dark" onClick={handleShow} style={{background:"rgb(38 29 167)", color:"white"}}>+ Add</Button>
        </div>
      </div>
      <br/>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Select className="w-auto">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Form.Select>
        <Form.Control type="text" placeholder="Search..." className="w-25" />
      </div>

      <Table responsive bordered hover className="text-center">
        <thead className="table-light">
          <tr>
            <th style={{background:"rgb(38 29 167)", color:"white"}}>NAME</th>
            <th style={{background:"rgb(38 29 167)", color:"white"}}>SUBJECT</th>
            <th style={{background:"rgb(38 29 167)", color:"white"}}>STAGE</th>
            <th style={{background:"rgb(38 29 167)", color:"white"}}>USERS</th>
            <th style={{background:"rgb(38 29 167)", color:"white"}}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.stage}</td>
              <td>
                {item.users.map((user, idx) => (
                  <img
                    key={idx}
                    src={`https://via.placeholder.com/30`}
                    alt="user"
                    className="rounded-circle me-1"
                    style={{ width: 30, height: 30 }}
                  />
                ))}
              </td>
              <td>
                <Button variant="warning" size="sm" className="me-1">👁️</Button>
                <Button variant="info" size="sm" className="me-1">✏️</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>🗑️</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Subject<span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    placeholder="Enter Subject Name"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>User<span className="text-danger">*</span></Form.Label>
                  <Form.Select name="user" value={formData.user} onChange={handleChange} required>
                    <option value="">Select User</option>
                    <option value="User1">User 1</option>
                    <option value="User2">User 2</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Lead Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>Phone No<span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter Phone No"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="success" onClick={handleSubmit}>Create</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default  Lead;
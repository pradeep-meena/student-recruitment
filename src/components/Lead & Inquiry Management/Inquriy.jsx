import { Dropdown, Button, Table, Modal, Form } from "react-bootstrap";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Inquriy = () => {
  const initialData = [
    {
      name: "Encoure",
      phone: 890567673,
      source: "Admission Campaign",
      enquirydate: "2024-07-19",
      lastdate: "2024-07-19",
      nextdate: "2024-07-19",
      status: "Active",
    },
    {
      name: "Alexandria",
      phone: 789806786,
      source: "	Online Front Site",
      enquirydate: "	2024-07-19",
      lastdate: "2025-09-30",
      nextdate: "2024-07-19",
      status: "Active",
    },
    {
      name: "Netpoints",
      phone: 789806786,
      source: "	Google Ads",
      enquirydate: "	2024-07-19",
      lastdate: "2024-07-19",
      nextdate: "2024-07-19",
      status: "Active",
    },
  ];

  const [data, setData] = useState(initialData);
  const [selectedContract, setSelectedContract] = useState(null);
  const [show, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    source: "",
    enquirydate: "",
    email: "",
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
      phone: formData.phone,
      stage: "Open", // Default stage for new leads
      source: "Google Ads", // Default users for new leads
      enquirydate: formData.date,
    };
    setData([...data, newLead]);
    setFormData({
      phone: "",
      source: "",
      name: "",
      enquirydate: "",
    });
    handleClose();
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index); // Remove the lead at the specified index
    setData(updatedData);
  };

  return (
    <div className="container p-3">
      <h4 className="fw-bold">Admission Enquiry</h4>
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
      <div className="row g-2">
        <div className="col-md-2">
          <label className="form-label">Class</label>
          <select className="form-select">
            <option>Select</option>
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Source</label>
          <select className="form-select">
            <option>Select</option>
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Enquiry From Date *</label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-md-2">
          <label className="form-label">Enquiry To Date *</label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-md-2">
          <label className="form-label">Status</label>
          <select className="form-select">
            <option>Active</option>
          </select>
        </div>

        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-dark w-100">
            <i className="bi bi-search"></i> Search
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center flex-wrap"></div>
      <br />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Form.Select className="w-auto">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Form.Select>
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

      <Table responsive bordered hover className="text-center">
        <thead className="table-light text-nowrap">
          <tr>
            <th>NAME</th>
            <th>Phone</th>
            <th>Source</th>
            <th>Enquiry Date</th>
            <th>Last Follow Up Date </th>
            <th>Next Follow Up Date </th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.source}</td>
              <td>{item.enquirydate}</td>
              <td>{item.lastdate}</td>
              <td>{item.nextdate}</td>
              <td>{item.status}</td>
              <td>
                <Button size="sm" className="btn btn-light btn-sm me-1">
                  👁️
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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Phone<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    source<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select source</option>
                    <option value="source1">source 1</option>
                    <option value="source">source 2</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Name<span className="text-danger">*</span>
                  </Form.Label>
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
                  <Form.Label>
                    Enquiry date<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    placeholder="Enter Enquirydate"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Phone No<span className="text-danger">*</span>
                  </Form.Label>
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
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Inquriy;

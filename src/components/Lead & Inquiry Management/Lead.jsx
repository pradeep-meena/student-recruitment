import { Dropdown, Button, Table, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [editIndex, setEditIndex] = useState(null); // Track the index of the lead being edited

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null); // Reset edit index when modal is closed
    setFormData({
      subject: "",
      user: "",
      name: "",
      email: "",
      phone: "",
    });
  };

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

    if (editIndex !== null) {
      // If editing an existing lead
      const updatedData = [...data];
      updatedData[editIndex] = newLead;
      setData(updatedData);
    } else {
      // If adding a new lead
      setData([...data, newLead]);
    }

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

  const handleEdit = (index) => {
    const lead = data[index];
    setFormData({
      subject: lead.subject,
      user: "", // You can set this if you have user data in the lead
      name: lead.name,
      email: "", // You can set this if you have email data in the lead
      phone: "", // You can set this if you have phone data in the lead
    });
    setEditIndex(index);
    handleShow();
  };

  return (
    <div className="container p-3">
      <h4 className="fw-bold">Manage Leads - Plan</h4>

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
            <th>NAME</th>
            <th>SUBJECT</th>
            <th>STAGE</th>
            <th>USERS</th>
            <th>ACTION</th>
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
                <Button size="sm" className="btn btn-light btn-sm me-1">
                  👁️
                </Button>
                <Button
                  size="sm"
                  className="me-1 btn btn-light btn-sm"
                  onClick={() => handleEdit(index)}
                >
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
          <Modal.Title>
            {editIndex !== null ? "Edit Lead" : "Create Lead"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Subject<span className="text-danger">*</span>
                  </Form.Label>
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
                  <Form.Label>
                    User<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select User</option>
                    <option value="User1">User 1</option>
                    <option value="User2">User 2</option>
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
                    Email<span className="text-danger">*</span>
                  </Form.Label>
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
            {editIndex !== null ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Lead;
import { Dropdown, Button, Table, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Lead = () => {
  const initialData = [
    {
      name: "Encoure",
      subject: "sagar",
      stage: "Sent",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
    {
      name: "Alexandria",
      subject: "Aakash",
      stage: "Open",
      learner: "Ravi, Rihan, Ram",
      leadsource:"Watsapp",
    },
    {
      name: "Netpoints",
      subject: "lavkush",
      stage: "Sent",
      users: ["user1.jpg", "user2.jpg", "user3.jpg"],
    },
  ];

  const [data, setData] = useState(initialData);
  const [showLeadModal, setShowLeadModal] = useState(false); // State for Create/Edit Lead modal
  const [showLeadSourceModal, setShowLeadSourceModal] = useState(false); // State for Create Lead Source modal
  const [formData, setFormData] = useState({
    course: "",
    user: "",
    name: "",
    stage: "",
  });
  const [editIndex, setEditIndex] = useState(null); // Track the index of the lead being edited
  const [leadSourceName, setLeadSourceName] = useState(""); // State for Lead Source Name
  const [leadSources, setLeadSources] = useState(["whatsaap", "facebook"]); // State for Lead Sources

  // Handle modal open/close for Create/Edit Lead modal
  const handleCloseLeadModal = () => {
    setShowLeadModal(false);
    setEditIndex(null); // Reset edit index when modal is closed
    setFormData({
      course: "",
      user: "",
      name: "",
      stage: "",
    });
  };

  const handleShowLeadModal = () => setShowLeadModal(true);

  // Handle modal open/close for Create Lead Source modal
  const handleCloseLeadSourceModal = () => {
    setShowLeadSourceModal(false);
    setLeadSourceName(""); // Reset lead source name when modal is closed
  };

  const handleShowLeadSourceModal = () => setShowLeadSourceModal(true);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for Create/Edit Lead modal
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      name: formData.name,
      subject: formData.subject,
      stage: formData.stage, // Default stage for new leads
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
      course: "",
      user: "",
      name: "",
      stage: "",
    });
    handleCloseLeadModal();
  };

  // Handle form submission for Create Lead Source modal
  const handleSubmitLeadSource = (e) => {
    e.preventDefault();
    setLeadSources([...leadSources, leadSourceName]); // Add the new lead source to the state
    setLeadSourceName(""); // Reset lead source name
    handleCloseLeadSourceModal(); // Close the modal after submission
  };

  // Handle delete lead
  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index); // Remove the lead at the specified index
    setData(updatedData);
  };

  // Handle edit lead
  const handleEdit = (index) => {
    const lead = data[index];
    setFormData({
      course: lead.course,
      user: "", // You can set this if you have user data in the lead
      name: lead.name,
      stage: lead.stage,
    });
    setEditIndex(index);
    handleShowLeadModal();
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
          <Button variant="outline-dark" onClick={handleShowLeadModal}>
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
            <th>Course</th>
            <th>STAGE</th>
            <th>Lead Source</th>
            <th>Learner</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.course}</td>
              <td>{item.stage}</td>
              <td>{item.leadsource}</td>
              <td>{item.learner}</td>
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

      {/* Modal for Create/Edit Lead */}
      <Modal show={showLeadModal} onHide={handleCloseLeadModal} centered>
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
                  course<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="course"
                    placeholder="Enter  course Name"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                  Learner<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="learner"
                    placeholder="Enter learner Name"
                    value={formData.learner}
                    onChange={handleChange}
                    required
                  />
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
                    Stage<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name=" stage"
                    placeholder="Enter Stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                  stage<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="stage"
                    name="stage"
                    placeholder="Enter stage"
                    value={formData.stage}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label>
                    Lead Source<span className="text-danger">*</span>
                  </Form.Label>
                  <Button
                    variant="primary"
                    style={{ marginLeft: "10px", marginBottom:"10px"}}
                    onClick={handleShowLeadSourceModal}
                    
                  >
                    +
                  </Button>
                  <Form.Select
                    name="leadsource"
                    value={formData.leadsource}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Lead Source</option>
                    {leadSources.map((source, index) => (
                      <option key={index} value={source}>
                        {source}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLeadModal}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Create Lead Source */}
      <Modal show={showLeadSourceModal} onHide={handleCloseLeadSourceModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Lead Source</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitLeadSource}>
            <Form.Group controlId="leadSourceName">
              <Form.Label>Lead Source Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lead source name"
                value={leadSourceName}
                onChange={(e) => setLeadSourceName(e.target.value)}
                required
              />
            </Form.Group>
            <div className="mt-3">
              <Button variant="primary" type="submit">
                Create
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Lead;

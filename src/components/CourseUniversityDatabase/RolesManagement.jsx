
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import { TagFill, PencilFill, TrashFill } from "react-bootstrap-icons";

const permissionsData = [
  {
    module: 'Student Information',
    features: [
      'Student', 'Import Student', 'Student Categories', 'Student Houses', 'Disable Student', 'Student Timeline', 'Disable Reason'
    ]
  },
  {
    module: 'Fees Collection',
    features: [
      'Collect Fees', 'Fees Carry Forward', 'Fees Master', 'Fees Group', 'Fees Group Assign', 'Fees Type'
    ]
  }
];

const RolesManagement = () => {
  const [roles, setRoles] = useState([
    { name: "Admin", type: "System" },
    { name: "emplo", type: "customer" }

  ]);

 

  const [newRole, setNewRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPermissions, setShowPermissions] = useState(false); // State to control visibility

  const handleAddRole = () => {
    if (newRole.trim() !== "") {
      setRoles([...roles, { name: newRole, type: "Custom" }]);
      setNewRole("");
    }
  };

  const handleDeleteRole = (index) => {
    setRoles(roles.filter((_, i) => i !== index));
  };

  const handleTagClick = (roleName) => {
    if (roleName === "Admin") {
      // Toggle visibility of the permissions section
      setShowPermissions(!showPermissions);

    }
  };
  

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="p-4">
      <Row>
        {/* Left Side - Role Form */}
        <Col md={4} sm={12} className="mb-3">
          <h5>Create Role</h5>
          <Form>
            <Form.Group controlId="roleName">
              <Form.Label>
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                placeholder="Enter role name"
                className="mb-3"
              />
            </Form.Group>
            <Button className="w-100" variant="primary" onClick={handleAddRole}>
              Save Role
            </Button>
          </Form>
        </Col>

        {/* Right Side - Role List */}
        <Col md={8} sm={12}>
          <h5>Manage Roles</h5>
          <InputGroup className="mb-4">
            <Form.Control
              placeholder="Search roles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control-lg"
            />
          </InputGroup>

          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th>Role</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role, index) => (
                <tr key={index}>
                  <td>{role.name}</td>
                  <td>{role.type}</td>
                  <td>
                    <TagFill
                      className="text-dark me-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleTagClick(role.name)} // Add onClick handler
                    />
                    <PencilFill
                      className="text-primary me-2"
                      style={{ cursor: "pointer" }}
                    />
                    <TrashFill
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteRole(index)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Conditionally render the Assign Permission section */}
      {showPermissions && (
        <>
          <h2 className="mb-3">Assign Permission (Admin)</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Module</th>
                  <th>Feature</th>
                  <th>View</th>
                  <th>Add</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {permissionsData.map((module, index) => (
                  <React.Fragment key={index}>
                    {module.features.map((feature, idx) => (
                      <tr key={idx}>
                        {idx === 0 && (
                          <td rowSpan={module.features.length} className="align-middle">
                            <strong>{module.module}</strong>
                          </td>
                        )}
                        <td>{feature}</td>
                        <td><input type="checkbox" defaultChecked /></td>
                        <td><input type="checkbox" defaultChecked /></td>
                        <td><input type="checkbox" defaultChecked /></td>
                        <td><input type="checkbox" defaultChecked /></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </Container>
  );
};

export default RolesManagement; 


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Table,
//   Form,
//   Button,
//   Container,
//   Row,
//   Col,
//   InputGroup,
// } from "react-bootstrap";
// import { TagFill, PencilFill, TrashFill } from "react-bootstrap-icons";

// const permissionsData = [
//   {
//     module: "Student Information",
//     features: [
//       "Student",
//       "Import Student",
//       "Student Categories",
//       "Student Houses",
//       "Disable Student",
//       "Student Timeline",
//       "Disable Reason",
//     ],
//   },
//   {
//     module: "Fees Collection",
//     features: [
//       "Collect Fees",
//       "Fees Carry Forward",
//       "Fees Master",
//       "Fees Group",
//       "Fees Group Assign",
//       "Fees Type",
//     ],
//   },
// ];

// const PermissionsTable = () => {
//   const [permissions, setPermissions] = useState(
//     permissionsData.map((section) => ({
//       ...section,
//       features: section.features.map((feature) => ({
//         name: feature,
//         view: true,
//         add: true,
//         edit: true,
//         delete: true,
//       })),
//     }))
//   );

//   const handleCheckboxChange = (moduleIndex, featureIndex, permissionType) => {
//     const updatedPermissions = [...permissions];
//     updatedPermissions[moduleIndex].features[featureIndex][permissionType] =
//       !updatedPermissions[moduleIndex].features[featureIndex][permissionType];
//     setPermissions(updatedPermissions);
//   };

//   return (
//     <Container className="mt-4">
//       <h2>Assign Permission (Admin)</h2>
//       <Table striped bordered hover responsive>
//         <thead>
//           <tr>
//             <th>Module</th>
//             <th>Feature</th>
//             <th>View</th>
//             <th>Add</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {permissions.map((section, moduleIndex) => (
//             <React.Fragment key={moduleIndex}>
//               <tr>
//                 <td rowSpan={section.features.length + 1}><strong>{section.module}</strong></td>
//               </tr>
//               {section.features.map((feature, featureIndex) => (
//                 <tr key={featureIndex}>
//                   <td>{feature.name}</td>
//                   {["view", "add", "edit", "delete"].map((permType) => (
//                     <td key={permType}>
//                       <Form.Check
//                         type="checkbox"
//                         checked={feature[permType]}
//                         onChange={() =>
//                           handleCheckboxChange(moduleIndex, featureIndex, permType)
//                         }
//                       />
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default PermissionsTable;

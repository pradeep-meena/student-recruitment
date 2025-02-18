import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Form, Container, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

const permissionsData = [
  {
    module: "Student Information",
    features: [
      "Student",
      "Import Student",
      "Student Categories",
      "Student Houses",
      "Disable Student",
      "Student Timeline",
      "Disable Reason",
    ],
  },
  {
    module: "Fees Collection",
    features: [
      "Collect Fees",
      "Fees Carry Forward",
      "Fees Master",
      "Fees Group",
      "Fees Group Assign",
      "Fees Type",
    ],
  },
];

const PermissionsTable = () => {
  const { role } = useParams(); // Get the role from URL
  const [permissions, setPermissions] = useState(
    permissionsData.map((module) => ({
      ...module,
      features: module.features.map((feature) => ({
        name: feature,
        view: true,
        add: true,
        edit: true,
        delete: true,
      })),
    }))
  );

  const handleCheckboxChange = (moduleIndex, featureIndex, permissionType) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[moduleIndex].features[featureIndex][
      permissionType
    ] = !updatedPermissions[moduleIndex].features[featureIndex][permissionType];
    setPermissions(updatedPermissions);
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Assign Permission for {role}</h2>
        <Link to="/RolesManagement" className="btn btn-secondary mb-3">
          Back to Roles
        </Link>
      </div>
      <Table striped bordered hover responsive>
        <thead>
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
          {permissions.map((module, moduleIndex) => (
            <React.Fragment key={moduleIndex}>
              <tr>
                <td rowSpan={module.features.length + 1}>
                  <strong>{module.module}</strong>
                </td>
              </tr>
              {module.features.map((feature, featureIndex) => (
                <tr key={featureIndex}>
                  <td>{feature.name}</td>
                  {["view", "add", "edit", "delete"].map((permType) => (
                    <td key={permType}>
                      <Form.Check
                        type="checkbox"
                        checked={feature[permType]}
                        onChange={() =>
                          handleCheckboxChange(
                            moduleIndex,
                            featureIndex,
                            permType
                          )
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PermissionsTable;

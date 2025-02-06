import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed , menuItemClick}) => {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Tracks the open submenu
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

   // Function to check if a path is active
   const isActive = (path) => {
    return location.pathname === path;
  };

    // Function to check if any of the submenu items are active
    const isSubmenuActive = (paths) => {
      return paths.some((path) => location.pathname.startsWith(path));
    };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Dashboard Section */}
          <li className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/dashboard"); menuItemClick();} } >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Dashboard</span>
            </div>
          </li>

          {/* Intake Management Section */}
          <li
            className={`menu-item ${
              isActive("/contracttemplate") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/contracttemplate");menuItemClick();}}>
              <i className="fa-solid fa-file-contract"></i>
              <span className="menu-text">Student Profile Managemen</span>
            </div>
          </li>
          {/* Contract Template Section */}
          <li
            className={`menu-item ${
              isActive("/contracttemplate") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/contracttemplate");menuItemClick();}}>
              <i className="fa-solid fa-file-contract"></i>
              <span className="menu-text">Application & Admission Tracking</span>
            </div>
          </li>

          {/* Cost Saving Opportunities Section */}
          <li
            className={`menu-item ${
              isActive("/contracttemplate") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/contracttemplate");menuItemClick();}}>
              <i className="fa-solid fa-file-contract"></i>
              <span className="menu-text">Payment & Invoice Management</span>
            </div>
          </li>

          {/* Approval Workflow Section */}
          <li
            className={`menu-item ${
              isActive("/approvalworkflow") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/approvalworkflow");menuItemClick();}}>
              <i className="fa-solid fa-check-circle"></i>
              <span className="menu-text">Approval Workflow</span>
            </div>
          </li>

          {/* Renewal Notifications Section */}
          <li
            className={`menu-item ${
              isActive("/renewalnotifi") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/renewalnotifi");menuItemClick();}}>
              <i className="fa-regular fa-comment-dots"></i>
              <span className="menu-text">Renewal Notifications</span>
            </div>
          </li>

          {/* Renewal management Section */}
          <li
            className={`menu-item ${
              isActive("/renewalmanage") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/renewalmanage");menuItemClick();}}>
              <i className="fa-solid fa-envelope-open-text"></i>
              <span className="menu-text">Renewal Management</span>
            </div>
          </li>

          {/* Contract Management Section */}

          <li className={`menu-item ${isSubmenuActive(["/contractmanage","/contractwearhouse","/addnewcontact"]) ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("contractmanage")}>
              <i className="fa-solid fa-file-contract"></i>
              <span className="menu-text">Contract Management</span>
              <i
                className={`fa-solid fa-chevron-down submenu-arrow ${
                  openSubmenu === "contractmanage" ? "rotated" : ""
                }`}></i>
            </div>
          </li>
          <ul
            className={`submenu ${
              openSubmenu === "contractmanage" ? "expanded" : "collapsed"
            }`}>
            <li
              className={`submenu-item ${
                isActive("/contractmanage") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/contractmanage");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Contract Dashbord
            </li>
            <li
              className={`submenu-item ${
                isActive("/contractwearhouse") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/contractwearhouse");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> All Contract /
              Contract warehouse
            </li>
            <li
              className={`submenu-item ${
                isActive("/addnewcontact") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/addnewcontact");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Add Contract
            </li>
          </ul>

          {/* Vendor Performance Section */}
          <li className={`menu-item ${isActive("/vendorper") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/vendorper");menuItemClick();}}>
              <i className="fa-solid fa-file-signature"></i>
              <span className="menu-text">Vendor Performance</span>
            </div>
          </li>

          {/* Spend Analytics Section */}
          <li
            className={`menu-item ${isActive("/spendanalyt") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/spendanalyt");menuItemClick();}}>
              <i className="fa-solid fa-chart-line"></i>
              <span className="menu-text">Spend Analytics</span>
            </div>
          </li>
          {/* Add category and Sub Category */}
          <li className={`menu-item ${isSubmenuActive(["/adddepartment","/addtransaction"]) ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("addcategory")}>
              <i className="fa-solid fa-arrow-trend-up"></i>
              <span className="menu-text">Add Category/Sub Category</span>
              <i
                className={`fa-solid fa-chevron-down submenu-arrow ${
                  openSubmenu === "addcategory" ? "rotated" : ""
                }`}></i>
            </div>
          </li>
          <ul
            className={`submenu ${
              openSubmenu === "addcategory" ? "expanded" : "collapsed"
            }`}>
            <li
              className={`submenu-item ${
                isActive("/adddepartment") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/adddepartment");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Add Department
            </li>
            <li
              className={`submenu-item ${
                isActive("/addtransaction") ? "active" : ""
              }`}
              onClick={() => {
                navigate("/addtransaction");
                setOpenSubmenu(null);menuItemClick();
              }}>
              <i className="fa-solid fa-arrow-trend-up"></i> Add Transaction
            </li>
            </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

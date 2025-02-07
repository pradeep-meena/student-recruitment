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
              isActive("/Profile") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/Profile");menuItemClick();}}>
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
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

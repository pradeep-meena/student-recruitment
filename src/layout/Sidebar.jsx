import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { FaUsers, FaRegFileAlt } from "react-icons/fa"; // FontAwesome
import { BsFillPersonLinesFill } from "react-icons/bs"; // Bootstrap

const Sidebar = ({ collapsed, menuItemClick }) => {
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
              onClick={() => {
                navigate("/dashboard");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Dashboard</span>
            </div>
          </li>
          {/* Lead & Inquiry Management */}
          <li
            className={`menu-item ${
              isSubmenuActive([
                "/LeadInquiryManagement",
                "/inquiry",
                "/lead",
                "/deal",
                "/dashboard",
                "/contact",
              ])
                ? "active"
                : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("leadInquiry")}
            >
              <i className="fa-solid fa-file-contract"></i>
              <span className="menu-text">CRM</span>
              <i
                className={`fa-solid fa-chevron-${
                  openSubmenu === "leadInquiry" ? "up" : "down"
                } submenu-arrow`}
              ></i>
            </div>

            {openSubmenu === "leadInquiry" && (
              <ul className={`submenu `}>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/dashboard") ? "active" : ""
                  }`}
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/contact") ? "active" : ""
                  }`}
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/inquiry") ? "active" : ""
                  }`}
                  onClick={() => navigate("/inquiry")}
                >
                  Inquiry
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/lead") ? "active" : ""
                  }`}
                  onClick={() => navigate("/lead")}
                >
                  Lead
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/deal") ? "active" : ""
                  }`}
                  onClick={() => navigate("/deal")}
                >
                  Deal
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

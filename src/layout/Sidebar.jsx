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
          {/* Dashboard Section */}``
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
              <span className="menu-text">Lead & Inquiry Management</span>
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
                    isActive("/inquiry") ? "active" : ""
                  }`}
                  onClick={() => navigate("/inquiry")}
                >
                  <FaRegFileAlt className="submenu-icon me-1" />
                  Inquiry
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/lead") ? "active" : ""
                  }`}
                  onClick={() => navigate("/lead")}
                >
                  <BsFillPersonLinesFill className="submenu-icon me-1" />
                  Lead
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/deal") ? "active" : ""
                  }`}
                  onClick={() => navigate("/deal")}
                >
                  <FaUsers className="submenu-icon me-1" />
                  Deal
                </li>
              </ul>
            )}
          </li>
          {/* Student Profile Management */}
          <li className={`menu-item ${isActive("/Profile") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/Profile");
                menuItemClick();
              }}
            >
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span className="menu-text">Student Profile Management</span>
            </div>
          </li>
          {/*  Application & Admission Tracking */}
          <li
            className={`menu-item ${
              isActive("/AdmissionTracking") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/AdmissionTracking");
                menuItemClick();
              }}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              <span className="menu-text">
                {" "}
                Application & Admission Tracking
              </span>
            </div>
          </li>
          {/* Communication & Follow-up Management */}
          <li
            className={`menu-item ${
              isActive("/CommunicationFollowupManagement") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/CommunicationFollowupManagement");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-comments"></i>
              <span className="menu-text">
                Communication & Follow-up Management
              </span>
            </div>
          </li>
          {/* Task & Calendar Management */}
          <li
            className={`menu-item ${
              isActive("/TaskCalendarManagement") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/TaskCalendarManagement");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span className="menu-text">Task & Calendar Management</span>
            </div>
          </li>
          {/* Course & University Database */}
          <li
            className={`menu-item ${
              isActive("/CourseUniversityDatabase") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/CourseUniversityDatabase");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-university "></i>
              <span className="menu-text"> Course & University Database</span>
            </div>
          </li>
          {/* Reporting & Analytics */}
          <li
            className={`menu-item ${
              isActive("/ReportingAnalytics") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/ReportingAnalytics");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-chart-line "></i>
              <span className="menu-text">Reporting & Analytics</span>
            </div>
          </li>
          {/* Payment & Invoice Management */}
          <li
            className={`menu-item ${
              isActive("/PaymentInvoiceManagement") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/PaymentInvoiceManagement");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-receipt"></i>
              <span className="menu-text"> Payment & Invoice Management</span>
            </div>
          </li>
          {/* User Roles & Access Control */}
          <li
            className={`menu-item ${
              isActive("/UserRolesAccessControl") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/UserRolesAccessControl");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-users-cog "></i>
              <span className="menu-text"> User Roles & Access Control</span>
            </div>
          </li>
          {/* Cloud & Mobile Accessibility */}
          {/* <li
            className={`menu-item ${
              isActive("/") ? "active" : ""
            }`}>
            <div
              className="menu-link menu-i"
              onClick={() => {navigate("/dashboard");menuItemClick();}}>
              <i className="fa-solid fa-file-contract"></i>
              <span className="menu-text"> Cloud & Mobile Accessibility

              </span>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

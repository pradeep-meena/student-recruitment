import { useState } from "react";
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
              <i className="fa-solid fa-cubes"
              
                ></i>
              <span className="menu-text">Dashboard</span>
            </div>
          </li>
          <li className={`menu-item ${isActive("/StudentProfile") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/StudentProfile");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-cubes"></i>
              <span className="menu-text">Student Dashboard</span>
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
                // "/dashboard",
                "/contract",
                "/quotes",
                "/analytics",
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
              <span className="menu-text">Leads & Inquiries</span>
              <i
                className={`fa-solid fa-chevron-${
                  openSubmenu === "leadInquiry" ? "up" : "down"
                } submenu-arrow`}
              ></i>
            </div>

            {openSubmenu === "leadInquiry" && (
              <ul className={`submenu `}>
                {/* <li
                  className={`menu-item submenu-item ${
                    isActive("/dashboard") ? "active" : ""
                  }`}
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </li> */}
                <li
                  className={`menu-item submenu-item ${
                    isActive("/contract") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/contract");
                    menuItemClick();
                  }}
                >
                  Contact
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/inquiry") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/inquiry");
                    menuItemClick();
                  }}
                >
                  Inquiry
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/lead") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/lead");
                    menuItemClick();
                  }}
                >
                  Lead
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/deal") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/deal");
                    menuItemClick();
                  }}
                >
                  Deal
                </li>
                {/* <li
                  className={`menu-item submenu-item ${
                    isActive("/quotes") ? "active" : ""
                  }`}
                  onClick={() => navigate("/quotes")}
                >
                  Quotes
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/analytics") ? "active" : ""
                  }`}
                  onClick={() => navigate("/analytics")}
                >
                  Analytics
                </li> */}
              </ul>
            )}
          </li>
          {/* Student Management */}
          <li
            className={`menu-item ${
              isSubmenuActive([
               
                "/studentDetails",
                "/admission",
                "/communication",
              ])
                ? "active"
                : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("student")}
            >
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <span className="menu-text text-nowrap">Student Management</span>
              <i
                className={`fa-solid fa-chevron-${
                  openSubmenu === "student" ? "up" : "down"
                } submenu-arrow`}
              ></i>
            </div>

            {openSubmenu === "student" && (
              <ul className={`submenu `}>
               
                <li
                  className={`menu-item submenu-item ${
                    isActive("/studentDetails") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/studentDetails");
                    menuItemClick();
                  }}
                >
                  Student Details
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/admission") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/admission");
                    menuItemClick();
                  }}
                >
                  Student Admission
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/communication") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/communication");
                    menuItemClick();
                  }}
                >
                  Communication
                </li>
              </ul>
            )}
          </li>
          {/*  Application & Admission Tracking */}
          <li
            className={`menu-item ${
              isSubmenuActive([
                "/tracker",
                "/document",
                "/university",
                "/applications",
              ])
                ? "active"
                : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("application")}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
              <span className="menu-text text-nowrap"
              
              
              >Applications</span>
              <i
                className={`fa-solid fa-chevron-${
                  openSubmenu === "application" ? "up" : "down"
                } submenu-arrow`}
              ></i>
            </div>

            {openSubmenu === "application" && (
              <ul className={`submenu `}>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/tracker") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/tracker");
                    menuItemClick();
                  }}
                >
                  Application Tracker
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/document") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/document");
                    menuItemClick();
                  }}
                >
                  Document Upload
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/university") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/university");
                    menuItemClick();
                  }}
                >
                  University Details
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/applications") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/applications");
                    menuItemClick();
                  
                  }}
                >
                  Admission Decision
                </li>
              </ul>
            )}
          </li>

          {/* Communication & Follow-up Management */}
          <li
            className={`menu-item ${
              isSubmenuActive(["/followup", "/reminder"]) ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("communication")}
            >
              <i className="fa-solid fa-comments"></i>
              <span className="menu-text text-nowrap">Communication</span>
              <i
                className={`fa-solid fa-chevron-${
                  openSubmenu === "communiction" ? "up" : "down"
                } submenu-arrow`}
              ></i>
            </div>

            {openSubmenu === "communication" && (
              <ul className={`submenu `}>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/followup") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/followup");
                    menuItemClick();
                  }}
                >
                  Follow Up
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/reminder") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/reminder");
                    menuItemClick();
                  }}
                >
                  Reminder
                </li>
              </ul>
            )}
          </li>
          {/* Task & Calendar Management */}
          <li
            className={`menu-item ${
              isSubmenuActive(["/addcounselor", "/tasks", "/tasksreminder"])
                ? "active"
                : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => toggleSubmenu("tasks")}
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span className="menu-text text-nowrap">Task Management</span>
              <i
                className={`fa-solid fa-chevron-${
                  openSubmenu === "tasks" ? "up" : "down"
                } submenu-arrow`}
              ></i>
            </div>

            {openSubmenu === "tasks" && (
              <ul className={`submenu `}>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/addcounselor") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/addcounselor");
                    menuItemClick();
                  }}
                >
                  Counselor
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/tasks") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/tasks");
                    menuItemClick();
                  }}
                >
                  Tasks
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/tasksreminder") ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate("/tasksreminder");
                    menuItemClick();
                  }}
                >
                  Reminder
                </li>
              </ul>
            )}
          </li>
          {/* Course & University Database */}
          <li
            className={`menu-item ${
              isActive("/RolesManagement") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => {
                navigate("/RolesManagement");
                menuItemClick();
              }}
            >
              <i className="fa-solid fa-bolt"></i>
              <span className="menu-text"> Roles Permissions</span>
            </div>
          </li>
          {/* Reporting & Analytics */}
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
              <i className="fa-solid fa-receipt"></i>
              <span className="menu-text"> Reports & Analytics</span>
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
              <span className="menu-text">Payments & Invoices</span>
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
              <i className="fa-solid fa-university "></i>
              <span className="menu-text">Course & University</span>
            </div>
          </li>
          {/* User Roles & Access Control */}
          {/* <li
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
          </li> */}
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

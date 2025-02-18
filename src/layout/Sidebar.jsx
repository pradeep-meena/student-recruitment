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

  // Function to handle menu item clicks
  const handleMenuItemClick = (path) => {
    navigate(path); // Navigate to the selected path
    menuItemClick(); // Close the sidebar
  };

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar">
        <ul className="menu">
          {/* Dashboard Section */}
          <li className={`menu-item ${isActive("/dashboard") ? "active" : ""}`}>
            <div
              className="menu-link menu-i"
              onClick={() => handleMenuItemClick("/dashboard")}
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
              <ul className={`submenu`}>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/contract") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/contract")}
                >
                  Contact
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/inquiry") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/inquiry")}
                >
                  Inquiry
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/lead") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/lead")}
                >
                  Lead
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/deal") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/deal")}
                >
                  Deal
                </li>
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
              <ul className={`submenu`}>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/studentDetails") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/studentDetails")}
                >
                  Student Details
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/admission") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/admission")}
                >
                  Student Admission
                </li>
                <li
                  className={`menu-item submenu-item ${
                    isActive("/communication") ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick("/communication")}
                >
                  Communication
                </li>
              </ul>
            )}
          </li>

          {/* Other menu items follow the same pattern */}
          {/* ... */}

          {/* Roles Permissions */}
          <li
            className={`menu-item ${
              isActive("/RolesManagement") ? "active" : ""
            }`}
          >
            <div
              className="menu-link menu-i"
              onClick={() => handleMenuItemClick("/RolesManagement")}
            >
              <i className="fa-solid fa-bolt"></i>
              <span className="menu-text">Roles Permissions</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
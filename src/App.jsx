import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import { useState } from "react";

import Login from "./authtication/Login";
import Dashboard from "./components/dashbord/Dashbord";
import ChatBox from "./components/CommunicationFollowupManagement/ChatBox";
import Contract from "./components/Lead & Inquiry Management/Contract";
import Profile from "./components/Profile/Profile";
import StudentDetailsPage from "./components/Profile/StudentDetailsPage";
import Lead from "./components/Lead & Inquiry Management/Lead";
import Deal from "./components/Lead & Inquiry Management/Deal";
import ProfileDetails from "./components/Profile/ProfileDetails";
import Analytics from "./components/Lead & Inquiry Management/Analytics";
import LeadInquiryManagement from "./components/Lead & Inquiry Management/LeadInquiryManagement";
import StudentDetails from "./components/Profile/StudentDetails";
import AdmissionTracking from "./components/AdmissionTracking/AdmissionTracking";
import TaskCalendarManagement from "./components/Task Calendar Management/TaskCalendarManagement";
import CourseUniversityDatabase from "./components/CourseUniversityDatabase/CourseUniversityDatabase";
import PaymentInvoiceManagement from "./components/PaymentInvoiceManagement/PaymentInvoiceManagement";
import ReportingAnalytics from "./components/ReportingAnalytics/ReportingAnalytics";
import UserRolesAccessControl from "./components/UserRolesAccessControl/UserRolesAccessControl";
import CommunicationFollowupManagement from "./components/CommunicationFollowupManagement/CommunicationFollowupManagement";
import Inquriy from "./components/Lead & Inquiry Management/Inquriy";
import Quotes from "./components/Lead & Inquiry Management/Quotes";
import ApplicationTracker from "./components/AdmissionTracking/ApplicationTracker";
import DocumentUpload from "./components/AdmissionTracking/DocumentUpload";
import UniversitySubmissions from "./components/AdmissionTracking/UniversitySubmissions";
import AdmissionDecisions from "./components/AdmissionTracking/AdmissionDecisions";
import FollowUpScheduling from "./components/CommunicationFollowupManagement/FollowUpScheduling";
import AutomatedReminders from "./components/CommunicationFollowupManagement/AutomatedReminders";
import ManaDetails from "./components/Profile/ManaDetails";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const menusidebarcollaps = () => {
    setIsSidebarCollapsed(true);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  const location = useLocation();

  const hideLayout = location.pathname === "/";
  return (
    <>
      {/* navbar */}
      {!hideLayout && <Navbar toggleSidebar={toggleSidebar} />}
      {/* navbar end */}
      {/* sidebar start */}
      <div className={`main-content  ${hideLayout ? "" : ""}`}>
        {!hideLayout && (
          <Sidebar
            collapsed={isSidebarCollapsed}
            menuItemClick={menusidebarcollaps}
          />
        )}
        {/* sidebar end */}
        {/* right side  */}
        <div
          className={`right-side-content ${
            isSidebarCollapsed ? "collapsed " : ""
          }`}
        >
          <Routes>
            {/* login signup */}
            <Route path="/" element={<Login />} />
            {/* login signup */}

            {/* dashbord */}
            <Route path="/dashboard" element={<Dashboard />} />
            {/* dashbord */}

            <Route path="/Profile" element={<Profile />} />
            <Route
              path="/Profiledetails"
              element={<ProfileDetails></ProfileDetails>}
            ></Route>

            {/* LeadInquiryManagement */}
            <Route
              path="/LeadInquiryManagement"
              element={<LeadInquiryManagement />}
            />
            {/* Inquriy */}
            <Route path="/inquiry" element={<Inquriy></Inquriy>}></Route>
            {/* lead   */}
            <Route path="/lead" element={<Lead></Lead>}></Route>

            {/* deal */}
            <Route path="/deal" element={<Deal></Deal>}></Route>

            <Route path="/contract" element={<Contract></Contract>}></Route>

            <Route path="/analytics" element={<Analytics></Analytics>}></Route>

            <Route path="/quotes" element={<Quotes></Quotes>}></Route>

            {/* student management */}
            <Route
              path="/studentDetails"
              element={<StudentDetails></StudentDetails>}
            ></Route>
            <Route
              path="/manaDetails"
              element={<ManaDetails></ManaDetails>}
            ></Route>
            <Route
              path="/admission"
              element={<AdmissionTracking></AdmissionTracking>}
            ></Route>
            <Route
              path="/studentProfile/:admissionNo"
              element={<StudentDetailsPage></StudentDetailsPage>}
            ></Route>
            <Route
              path="/communication"
              element={
                <CommunicationFollowupManagement></CommunicationFollowupManagement>
              }
            ></Route>
            {/* AdmissionTracking */}
            <Route
              path="/tracker"
              element={<ApplicationTracker></ApplicationTracker>}
            ></Route>
            <Route
              path="/document"
              element={<DocumentUpload></DocumentUpload>}
            ></Route>
            <Route
              path="/university"
              element={<UniversitySubmissions></UniversitySubmissions>}
            ></Route>
            <Route
              path="/applications"
              element={<AdmissionDecisions></AdmissionDecisions>}
            ></Route>
            <Route path="/AdmissionTracking" element={<AdmissionTracking />} />

            {/* TaskCalendarManagement */}

            <Route
              path="/TaskCalendarManagement"
              element={<TaskCalendarManagement />}
            />

            {/* CourseUniversityDatabase */}

            <Route
              path="/CourseUniversityDatabase"
              element={<CourseUniversityDatabase />}
            />

            {/* PaymentInvoiceManagement */}

            <Route
              path="/PaymentInvoiceManagement"
              element={<PaymentInvoiceManagement />}
            />

            {/* ReportingAnalytics */}

            <Route
              path="/ReportingAnalytics"
              element={<ReportingAnalytics />}
            />

            {/* UserRolesAccessControl */}

            <Route
              path="/UserRolesAccessControl"
              element={<UserRolesAccessControl />}
            />

            {/* CommunicationFollowupManagement          */}
            <Route
              path="/followup"
              element={<FollowUpScheduling></FollowUpScheduling>}
            ></Route>
            <Route
              path="/reminder"
              element={<AutomatedReminders></AutomatedReminders>}
            ></Route>

            {/* chatbox route */}
            <Route path="/chatbox" element={<ChatBox />} />
          </Routes>
        </div>
        {/* right end  */}
      </div>
    </>
  );
}

export default App;

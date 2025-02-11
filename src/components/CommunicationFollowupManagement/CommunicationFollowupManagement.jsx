import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CommunicationFollowupManagement = () => {
  const sendEmail = (email) => {
    alert(`Email sent to: ${email}`); // ✅ Corrected Template Literal
  };

  const sendSMS = (phone) => {
    alert(`SMS sent to: ${phone}`); // ✅ Corrected
  };

  const sendWhatsApp = (phone) => {
    alert(`SMS sent to whatsapp: ${phone}`);
  };

  const openChat = () => {
    alert("Opening chat support...");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📩 Communication Follow-Up</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("john@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+1234567890")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+1234567890")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("john@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+1234567890")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+1234567890")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("john@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+1234567890")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+1234567890")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("john@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+1234567890")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+1234567890")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>+1234567890</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("john@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+1234567890")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+1234567890")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>
              
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("jane@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+9876543210")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+9876543210")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>
              
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("jane@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+9876543210")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+9876543210")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>
              
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("jane@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+9876543210")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+9876543210")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>+9876543210</td>
              
              <td>
                <button className="btn btn-primary me-2" onClick={() => sendEmail("jane@example.com")}>
                  📧 Email
                </button>
                <button className="btn btn-success me-2" onClick={() => sendSMS("+9876543210")}>
                  📩 SMS
                </button>
                <button className="btn btn-info me-2" onClick={() => sendWhatsApp("+9876543210")}>
                  📲 WhatsApp
                </button>
                <button className="btn btn-warning" onClick={openChat}>
                  💬 Chat
                </button>
              </td>
            </tr>
          
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunicationFollowupManagement;

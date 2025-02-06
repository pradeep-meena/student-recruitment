import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function EditRenewal() {
  const editorRef = useRef(null);

  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // Handle image upload

  // Handle text content input
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="text-start">
          <h3 className="fw-bold">Edit Renewal Notification Template</h3>
          <p>Customize the email templates for renewal reminders</p>
        </div>

        <div className="text-end mt-3 mt-sm-0">
          <Link to="/renewalnotifi">
            {" "}
            <button
              className="btn btn-success text-white d-flex align-items-center"
              style={{
                width: "120px",
                height: "49px",
                top: "101px",
                left: "1191px",
                gap: "0px",
                border: "none",
                opacity: "1",
                backgroundColor: "#578E7E",
                color: "white",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                gap: "5px",
              }}>
              <i className="fa-solid fa-arrow-left ms-2"></i> Back
            </button>
          </Link>
        </div>
      </div>

      <div className="my-4">
        <label className="fw-normal fs-6">Subject</label>
        <div className="row">
          <div className="col-md-4 col-sm-4 ">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Subject"
            />
          </div>
        </div>

        <p className="fw-normal fs-6 mt-3">Body</p>
        <div className="row">
          <div
            className=" col bg-white border rounded p-3 mb-4"
            style={{ maxWidth: "649px" }}>
            <div className="d-flex flex-wrap gap-1 mb-3 align-items-center">
              <select
                className="form-select border-0 d-inline-block me-2"
                style={{ width: "130px", fontSize: "15px" }}>
                <option>Normal text</option>
              </select>
              <select
                className="form-select border-0 d-inline-block me-2"
                style={{ width: "50px" }}>
                <option></option>
              </select>
              <select
                className="form-select border-0 d-inline-block me-2"
                style={{ width: "50px" }}>
                <option></option>
                <option></option>
              </select>

              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("bold")}>
                <b>B</b>
              </button>
              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("italic")}>
                <i>I</i>
              </button>
              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("underline")}>
                <u>U</u>
              </button>
              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("strikeThrough")}>
                <s>S</s>
              </button>
              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("superscript")}>
                <i className="fa-solid fa-greater-than"></i>
                <i className="fa-solid fa-less-than"></i>
              </button>
              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("insertHTML")}>
                <i className="fa-solid fa-code"></i>
              </button>
              <button
                className="btn btn-outline-secondary border-0 d-inline-block me-2"
                onClick={() => handleCommand("removeFormat")}>
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>

            {/* Editable content area */}
            <div
              ref={editorRef}
              contentEditable
              className="border p-3"
              style={{
                minHeight: "200px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}>
              Start typing here...
            </div>

            {/* <div className="bg-white border rounded p-3 mb-4" style={{ maxWidth: '649px' }}>
  <textarea
    placeholder={`Dear Recipient Name, \nThis is a reminder that your Contract Name is due for renewal on Renewal Date.\nPlease review the terms and take appropriate action.`}
    style={{
      border: 'none',
      width: '600px',
      height: 'auto',
      minHeight: '190px',
      resize: 'none', // To disable resizing
      outline: 'none', // Removes focus border
      fontSize: '15px',
    }}
  />
</div> */}
          </div>
          <div className="col-md-6 ">
            <h4>
              <u>Document Preview</u>
            </h4>
            <div
              className="border p-3 shadow-sm"
              style={{
                height: "290px",
                overflowY: "scroll",
                position: "relative",
              }}>
              {image ? (
                <img
                  src={image}
                  alt="User Uploaded"
                  className="img-fluid"
                  style={{ width: "100%" }}
                />
              ) : (
                <textarea
                  className="form-control"
                  value={content}
                  onChange={handleContentChange}
                  placeholder="Enter your text or upload an image..."
                  style={{
                    height: "100%",
                    width: "100%",
                    border: "none",
                    resize: "none",
                    outline: "none",
                    background: "transparent",
                  }}
                />
              )}
            </div>

            {/* Controls to add content */}
            {/* <div className="mt-3">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setContent("") || setImage(null)} // Reset content
        >
          Clear
        </button>
        <label className="btn btn-primary">
          Upload Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </label>
      </div> */}
          </div>
        </div>

        <div className="mt-3 d-flex gap-2 justify-content-center">
          <button
            className="btn "
            style={{
              width: "120px",
              border: "1px solid #578E7E",
              color: "#578E7E",
            }}>
            Reset
          </button>
          <button
            className="btn  text-white"
            style={{ width: "120px", backgroundColor: "#578E7E" }}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRenewal;

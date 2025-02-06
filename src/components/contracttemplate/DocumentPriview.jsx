import { useState } from "react";
import { Link } from "react-router-dom";

function DocumentPriview() {
      const [content, setContent] = useState(""); 
      const [image, setImage] = useState(null); 
    
      // Handle image upload
      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file)); 
        }
      };
    
      // Handle text content input
      const handleContentChange = (event) => {
        setContent(event.target.value);
      };
  return (
    <div>
             <div className="col-md-12 mt-5 ml-10">
              <div className="document-section d-flex justify-content-between">
      <h4>
        <u>Document Preview</u>
      </h4>
      <Link to="/contracttemplate">
      <button
              style={{
                width: "120px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
                borderRadius: "5px",
                marginBottom:'10px'
              }}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            </Link>
            </div>
      <div
        className="border p-3 shadow-sm"
        style={{ height: "700px", overflowY: "scroll", position: "relative" }}
      >
        {image ? (
          <img
            src=""
            alt="User Uploaded"
            className="img-fluid"
            style={{ width: "700px" }}
          />
        ) : (
          <textarea
            className="form-control"
            value={content}
            onChange={handleContentChange}
            placeholder="Document Priview..."
            style={{
              height: "100vh",
              width: "700px",
              border: "none",
             
              outline: "none",
              background: "transparent",
            }}
          />
        )}
      </div>

      {/* Controls to add content */}
     
    </div>
    </div>
  )
}

export default DocumentPriview


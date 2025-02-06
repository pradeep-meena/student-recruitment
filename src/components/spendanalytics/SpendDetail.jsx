import React from 'react'
import { Link } from 'react-router-dom'

const SpendDetail = () => {
  return (
    <>
    <div className="container">
  <div className="top d-flex flex-wrap justify-content-between align-items-center">
    <div className="heading">
      <h3 className="mb-3 fw-semibold">Spend Details</h3>
    </div>
    
    <div className="mt-3 mt-md-0 ">
      <a href="download.pdf" download="pdf">
      <button
        type="button"
        className="btn ms-3 px-4 py-1 rounded-3 fw-semibold text-white "
        style={{ backgroundColor: "#3276e8" }}
      >
        Export Data{" "}
        <span>
          <i className="fa-solid fa-arrow-down ms-2" />
        </span>
      </button>
      </a>
      <Link to="/spendanalyt">
      <button
              style={{
                width: "120px",
                height: "49px",
                border: "none",
                backgroundColor: "#578E7E",
                color: "white",
                borderRadius: "5px",
                marginTop:'10px',
                marginLeft:'5px'
                
              }}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            </Link>
    </div>
    
            
  </div>
  {/* Summary Cards */}
  <div className="row text-center mb-4 mt-4">
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card spendcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff6567" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-2">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fdabab" }}
            />
          </div>
          <div className="text ms-4 text-start fw-semibold">
            <p>Selected Category / Vendor</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card spendcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#ff9318" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-2">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#fcc586" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">40</h2>
            <p>Total Spend</p>
          </div>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-lg-3 mb-3">
      <div
        className="card spendcard text-white fw-semibold h-100 d-flex justify-content-center"
        style={{ backgroundColor: "#39bf1b" }}
      >
        <div className="content d-flex justify-content-start align-items-center p-2">
          <div className="icon">
            <i
              className="fa-regular fa-user rounded-circle p-3"
              style={{ backgroundColor: "#74d25f" }}
            />
          </div>
          <div className="text ms-4 text-start">
            <h2 className="card-title mb-0 fw-bold">16</h2>
            <p>Spend Change (%)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="selection">
    <h5 style={{ borderBottom: "2px solid" }}>Filters</h5>
    <div className="row mt-3">
    <div className="col-md-4">
        <select
          className="form-select p-3 mt-3"
          aria-label="Default select example"
        >
          <option selected="">Category</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-select p-3 mt-3"
          aria-label="Default select example"
        >
          <option selected="">Subcategory</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-select p-3 mt-3"
          aria-label="Default select example"
        >
          <option selected="">Approver</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-select p-3 mt-3"
          aria-label="Default select example"
        >
          <option selected="">Department</option>
          <option value={1}>IT</option>
          <option value={2}>Marketing</option>
          <option value={3}>HR</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-select p-3 mt-3"
          aria-label="Default select example"
        >
          <option selected="">Year/Multiple Years</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
      <div className="col-md-4">
        <select
          className="form-select p-3 mt-3"
          aria-label="Default select example"
        >
          <option selected="">Quarter</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
    </div>
  </div>
  <div className="table-responsive mt-3">
    <table className="table table-striped table-bordered text-center">
      <thead>
        <tr>
          <th>Date of Transaction</th>
          <th>Supplier Name</th>
          <th>Vendor Name</th>
          <th>Department</th>
          <th>Category</th>
          <th>Year/Multiple Years</th>
          <th>Quarter</th>
          <th>Amount</th>
          <th>Comments/Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2024-12-20</td>
          <td>Supplier A</td>
          <td>John Doe</td>
          <td>IT</td>
          <td>Software Purchase</td>
          <td>2024-25</td>
          <td>One</td>
          <td>433</td>
          <td>This is Comment.</td>
        </tr>
        <tr>
          <td>2024-12-18</td>
          <td>Supplier B</td>
          <td>Sarah Lee</td>
          <td>Marketing</td>
          <td>Vendor Service</td>
          <td>2024-25</td>
          <td>Two</td>
          <td>2144</td>
          <td>This is Comment.</td>
        </tr>
        <tr>
          <td>2024-12-20</td>
          <td>Supplier C</td>
          <td>John Doe</td>
          <td>HR</td>
          <td>Software Purchase</td>
          <td>2024-25</td>
          <td>one</td>
          <td>3541</td>
          <td>This is Comment.</td>
        </tr>
        <tr>
          <td>2024-12-18</td>
          <td>Supplier D</td>
          <td>Sarah Lee</td>
          <td>Marketing</td>
          <td>Vendor Service</td>
          <td>2024-25</td>
          <td>Three</td>
          <td>7686</td>
          <td>This is Comment.</td>
        </tr>
        <tr>
          <td>2024-12-20</td>
          <td>Supplier X</td>
          <td>John Doe</td>
          <td>IT</td>
          <td>Software Purchase</td>
          <td>2024-25</td>
          <td>Two</td>
          <td>6363</td>
          <td>This is Comment.</td>
        </tr>
      </tbody>
    </table>
  </div>
  {/* Pagination */}
  <nav aria-label="Page navigation" className="mt-4">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a
          className="page-link text-secondary"
          href="#"
          style={{ border: "none" }}
        >
          Previous
        </a>
      </li>
      <li className="page-item active mx-3">
        <a
          className="page-link rounded text-white fw-semibold"
          href="#"
          style={{ backgroundColor: "#0096d4" }}
        >
          1
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link rounded text-dark fw-semibold"
          href="#"
          style={{ backgroundColor: "rgb(212, 212, 212)" }}
        >
          2
        </a>
      </li>
      <li className="page-item mx-3">
        <a
          className="page-link rounded text-dark fw-semibold"
          href="#"
          style={{ backgroundColor: "rgb(212, 212, 212)" }}
        >
          3
        </a>
      </li>
      <li className="page-item">
        <a
          className="page-link text-secondary"
          href="#"
          style={{ border: "none" }}
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</div>
    </>
  )
}

export default SpendDetail
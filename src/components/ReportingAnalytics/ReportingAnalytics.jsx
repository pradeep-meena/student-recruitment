import React from 'react'

function ReportingAnalytics() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Key Metrics Dashboard</title>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
  <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h2>📊 Key Metrics Dashboard</h2>
      <button className="btn btn-primary" onclick="addEntry()">
        ➕ Add Entry
      </button>
    </div>
    {/* Metrics Summary */}
    <div className="row text-center mb-4">
      <div className="col-md-3">
        <div className="p-3 bg-light border rounded">
          <h5>📩 Total Inquiries</h5>
          <h3 id="totalInquiries">0</h3>
        </div>
      </div>
      <div className="col-md-3">
        <div className="p-3 bg-light border rounded">
          <h5>📝 Total Applications</h5>
          <h3 id="totalApplications">0</h3>
        </div>
      </div>
      <div className="col-md-3">
        <div className="p-3 bg-light border rounded">
          <h5>✅ Total Conversions</h5>
          <h3 id="totalConversions">0</h3>
        </div>
      </div>
      <div className="col-md-3">
        <div className="p-3 bg-light border rounded">
          <h5>🎯 Conversion Rate</h5>
          <h3 id="conversionRate">0%</h3>
        </div>
      </div>
    </div>
    {/* Filters and Search */}
    <div className="d-flex justify-content-between mb-3">
      <div>
        <button className="btn btn-outline-secondary my-1 mx-1">
          📅 Filter by Date
        </button>
        <button className="btn btn-outline-secondary my-1 mx-1">
          🎓 Filter by Course
        </button>
      </div>
      <input
        type="text"
        id="searchInput"
        className="form-control w-25"
        placeholder="🔍 Search..."
        onkeyup="searchTable()"
      />
    </div>
    {/* Responsive Table */}
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Learner Name</th>
            <th>Course</th>
            <th>Inquiries</th>
            <th>Applications</th>
            <th>Conversions</th>
            <th>Conversion Rate</th>
            <th>Enrollment Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="metricsTable">
          <tr>
            <td>John Doe</td>
            <td>Computer Science</td>
            <td>50</td>
            <td>30</td>
            <td>20</td>
            <td>40%</td>
            <td>01-02-2024</td>
            <td>
              <button className="btn btn-sm btn-outline-primary m-1">✏</button>
              <button
                className="btn btn-sm btn-outline-danger"
                onclick="removeRow(this)"
              >
                🗑
              </button>
            </td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Data Science</td>
            <td>60</td>
            <td>35</td>
            <td>25</td>
            <td>42%</td>
            <td>15-01-2024</td>
            <td>
              <button className="btn btn-sm btn-outline-primary m-1">✏</button>
              <button
                className="btn btn-sm btn-outline-danger"
                onclick="removeRow(this)"
              >
                🗑
              </button>
            </td>
          </tr>
          <tr>
            <td>Emily Davis</td>
            <td>Artificial Intelligence</td>
            <td>45</td>
            <td>25</td>
            <td>18</td>
            <td>40%</td>
            <td>22-01-2024</td>
            <td>
              <button className="btn btn-sm btn-outline-primary m-1">✏</button>
              <button
                className="btn btn-sm btn-outline-danger"
                onclick="removeRow(this)"
              >
                🗑
              </button>
            </td>
          </tr>
          <tr>
            <td>Michael Brown</td>
            <td>Cybersecurity</td>
            <td>70</td>
            <td>50</td>
            <td>30</td>
            <td>60%</td>
            <td>10-02-2024</td>
            <td>
              <button className="btn btn-sm btn-outline-primary m-1">✏</button>
              <button
                className="btn btn-sm btn-outline-danger"
                onclick="removeRow(this)"
              >
                🗑
              </button>
            </td>
          </tr>
          <tr>
            <td>Olivia Wilson</td>
            <td>Software Engineering</td>
            <td>80</td>
            <td>40</td>
            <td>30</td>
            <td>75%</td>
            <td>05-02-2024</td>
            <td>
              <button className="btn btn-sm btn-outline-primary m-1">✏</button>
              <button
                className="btn btn-sm btn-outline-danger"
                onclick="removeRow(this)"
              >
                🗑
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</>

    </div>
  )
}

export default ReportingAnalytics;

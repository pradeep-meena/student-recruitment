

export default function PaymentInvoiceManagement() {


  const permissionsData = [
    {
      module: 'Student Information',
      features: [
        'Student', 'Import Student', 'Student Categories', 'Student Houses', 'Disable Student', 'Student Timeline', 'Disable Reason'
      ]
    },
    {
      module: 'Fees Collection',
      features: [
        'Collect Fees', 'Fees Carry Forward', 'Fees Master', 'Fees Group', 'Fees Group Assign', 'Fees Type'
      ]
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">📄 Payment Invoice Management</h2>

      {/* Summary Section */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary hover-effect">
            <div className="card-body">
              <h5 className="card-title">Total Amount</h5>
              <p className="card-text">$ 15,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success hover-effect">
            <div className="card-body">
              <h5 className="card-title">Paid Amount</h5>
              <p className="card-text">$ 10,000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-danger hover-effect">
            <div className="card-body">
              <h5 className="card-title">Pending Amount</h5>
              <p className="card-text">$ 5,000</p>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="card">
        <div className="card-header bg-dark text-white">Invoice Details</div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Invoice No</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(9)].map((_, index) => (
                  <tr key={index} className="hover-effect">
                    <td>{index + 1}</td>
                    <td>INV-00{index + 1}</td>
                    <td>2024-02-{10 - index}</td>
                    <td>$ {5000 + index * 1000}</td>
                    <td>
                      <span
                        className={`badge ${
                          index % 2 === 0 ? "bg-success" : "bg-danger"
                        }`}
                      >
                        {index % 2 === 0 ? "Paid" : "Pending"}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className="text-muted">Showing 1 to 10 items of 52</p>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link text-primary" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-primary" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-primary" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link text-primary" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
}
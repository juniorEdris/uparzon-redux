import React from 'react'

export default function DashDownload() {
    return (
        <div id="downloads" className="tab-pane fade">
        <h3>Downloads</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Downloads</th>
                <th>Expires</th>
                <th>Download</th>               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Volga - Ecommerce Bootstrap Template</td>
                <td>August 10, 2019</td>
                <td>Never</td>
                <td><a className="btn btn-secondary" href="#">Download File</a></td>
              </tr>
              <tr>
                <td>Gatcomart - Ecommerce HTML Template</td>
                <td>September 11, 2019</td>
                <td>Never</td>
                <td><a className="btn btn-secondary" href="#">Download File</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

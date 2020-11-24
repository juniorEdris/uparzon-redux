import React from 'react'

export default function DashOrders() {
    return (
        <div id="orders" className="tab-pane fade">
        <h3>Orders</h3>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>September 10, 2019</td>
                <td>Processing</td>
                <td>$25.00 for 1 item </td>
                <td><a className="btn btn-secondary" href="cart.html">view</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>October 4, 2019</td>
                <td>Processing</td>
                <td>$17.00 for 1 item </td>
                <td><a className="btn btn-secondary" href="cart.html">view</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
}

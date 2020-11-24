import React from 'react'

export default function DashList() {
    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-2">
            <ul className="nav flex-column dashboard-list" role="tablist">
            <li><a className="nav-link active" data-toggle="tab" href="#dashboard">Dashboard</a></li>
            <li> <a className="nav-link" data-toggle="tab" href="#orders">Orders</a></li>
            <li><a className="nav-link" data-toggle="tab" href="#downloads">Downloads</a></li>
            <li><a className="nav-link" data-toggle="tab" href="#address">Addresses</a></li>
            <li><a className="nav-link" data-toggle="tab" href="#account-details">Account details</a></li>
            <li><a className="nav-link" href="login.html">logout</a></li>
            </ul>
      </div>
    )
}

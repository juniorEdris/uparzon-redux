import { Link } from 'react-router-dom'
import React from 'react'
import { useStateValue } from '../../../Utility/StateProvider'


export default function UserInfo() {
    const [{basket}] = useStateValue()
    return (
        <div className="user-info mb-30">
        <div className="row align-items-center no-gutters">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="single-info">
              <p className="user-name">Hello <span>John Doe</span> <br />not John Doe? <a className="log-out" href="login.html">Log Out</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="single-info">
              <p>Need Assistance? Customer service at <a href="#">admin@example.com</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="single-info">
              <p>E-mail them at <a href="#">support@example.com</a></p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2 col-xl-3">
            <div className="single-info justify-content-lg-center">
              <Link to={basket.length > 0 && "/cart"} className="btn btn-secondary" >View Cart</Link>
            </div>
          </div>
        </div> 
      </div> 
    )
}

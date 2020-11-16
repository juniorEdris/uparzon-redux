import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterNav() {
    return (
        <div className="footer-single-widget">
        <div className="widget-title">
          <h4>Information</h4>
        </div>
        <div className="widget-body">
          <div className="footer-useful-link">
            <ul>
              <li><Link to="/about">about us</Link></li>
              <li><Link to="#">Delivery Information</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms &amp; Conditions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="#">Returns</Link></li>
              <li><Link to="#">Site Map</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

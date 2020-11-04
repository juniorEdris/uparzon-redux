import React from 'react'
import { Link } from 'react-router-dom'


export default function FooterTop() {
    return (
<div className="footer-top pt-50 pb-50">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="footer-single-widget">
          <div className="widget-title">
            <div className="footer-logo mb-30">
              <Link to="/">
                <img src="https://uparzon.com.bd/assets/img/logo/logo-sinrato.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="widget-body">
            <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
            <div className="payment-method">
              <h4>payment</h4>
              <img src="assets/img/payment/payment.png" alt="" />
            </div>
          </div>
        </div>
      </div> {/* single widget end */}
      <div className="col-lg-2 col-md-6 col-sm-6">
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
      </div> {/* single widget end */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="footer-single-widget">
          <div className="widget-title">
            <h4>contact us</h4>
          </div>
          <div className="widget-body">
            <div className="footer-useful-link">
              <ul>
                <li><span>Address:</span> 4710-4890 Breckinridge St,Fayetteville, NC 28311</li>
                <li><span>email:</span> support@sinrato.com</li>
                <li><span>Call us:</span> <strong>1-1001-234-5678</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div> {/* single widget end */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="footer-single-widget">
          <div className="widget-title">
            <h4>Our Twitter Feed</h4>
          </div>
          <div className="widget-body">
            <div className="twitter-article">
              <div className="twitter-text">
                Check out "Alice - Multipurpose Responsive #Magento #Theme" on #Envato by <Link to="#">@sinratos</Link> #Themeforest <Link to="#">https://t.co/DNdhAwzm88</Link>
                <span className="tweet-time"><i className="fa fa-twitter" /><Link to="#">30 sep</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div> {/* single widget end */}
    </div>
  </div>
</div>

    )
}

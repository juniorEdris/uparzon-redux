import React from 'react'
import FooterAddress from './PageComponents/FooterAddress'
import FooterLogo from './PageComponents/FooterLogo'
import FooterNav from './PageComponents/FooterNav'
import PaymentMethod from './PageComponents/PaymentMethod'
import TwitterFeed from './PageComponents/SocialMediaFeed'


export default function FooterTop() {
    return (
<div className="footer-top pt-50 pb-50">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="footer-single-widget">
          <FooterLogo/>
          <PaymentMethod/>
        </div>
      </div> 
      {/* single widget end */}
      <div className="col-lg-2 col-md-6 col-sm-6">
          <FooterNav/>
      </div> 
      {/* single widget end */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <FooterAddress/>
      </div> 
      {/* single widget end */}
      <div className="col-lg-3 col-md-6 col-sm-6">
        <TwitterFeed/>
      </div> 
      {/* single widget end */}
    </div>
  </div>
</div>

    )
}

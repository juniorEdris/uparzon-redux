import React from 'react'
import { Link } from 'react-router-dom'

export default function SocialMediaFeed() {
    return (
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
    )
}

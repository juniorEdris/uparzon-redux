import React from 'react'
import NewsLetterBox from './PageComponents/NewsLetterBox'
import Socialicons from './PageComponents/Socialicons'

export default function NewsLetter() {
    return (
            <div className="newsletter-group">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12">
                    <div className="newsletter-box">
                    <div className="newsletter-inner">
                        <div className="newsletter-title">
                        <h3>Sign Up For Newsletters</h3>
                        <p>Be the First to Know. Sign up for newsletter today</p>
                        </div>
                        <NewsLetterBox/>
                    </div>
                    <Socialicons/>
                    </div>
                    {/* mailchimp-alerts Start */}
                    <div className="mailchimp-alerts">
                    <div className="mailchimp-submitting" />{/* mailchimp-submitting end */}
                    <div className="mailchimp-success" />{/* mailchimp-success end */}
                    <div className="mailchimp-error" />{/* mailchimp-error end */}
                    </div>{/* mailchimp-alerts end */}
                </div>
                </div>
            </div>
            </div>

    )
}

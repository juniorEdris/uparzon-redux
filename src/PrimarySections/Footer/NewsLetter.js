import React from 'react'

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
                        <div className="newsletter-box">
                        <form id="mc-form">
                            <input type="email" id="mc-email" autoComplete="off" className="email-box" placeholder="enter your email" />
                            <button className="newsletter-btn" type="submit" id="mc-submit">subscribe !</button>
                        </form>
                        </div>
                    </div>
                    <div className="link-follow">
                        <a href="https://www.facebook.com"><i className="fa fa-facebook" /></a>
                        <a href="https://plus.google.com/discover"><i className="fa fa-google-plus" /></a>
                        <a href="https://twitter.com"><i className="fa fa-twitter" /></a>
                        <a href="https://www.youtube.com"><i className="fa fa-youtube" /></a>
                    </div>
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

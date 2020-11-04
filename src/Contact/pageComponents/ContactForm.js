import React from 'react'
import './ContactForm.css'

export default function ContactForm() {
    return (
        <div>
            {/* contact form two */}
            <div className="contact-two-area pt-60 pb-70">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12">
                    <div className="contact2-title text-center mb-60">
                    <h2>tell us your project</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                    <div className="contact-message">
                    <form id="contact-form" action="assets/php/mail.php" method="post" className="contact-form">
                        <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input name="first_name" placeholder="Name *" type="text" />    
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input name="phone" placeholder="Phone *" type="text" />   
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input name="email_address" placeholder="Email *" type="text" />    
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <input name="contact_subject" placeholder="Subject *" type="text" />   
                        </div>
                        <div className="col-12">
                            <div className="contact2-textarea text-center">
                            <textarea placeholder="Message *" name="message" className="form-control2" required defaultValue={""} />     
                            </div>   
                            <div className="contact-btn text-center">
                            <button className="btn btn-secondary" type="submit">Send Message</button> 
                            </div> 
                        </div> 
                        {/* <div className="col-12 d-flex justify-content-center">
                            <p className="form-messege" />
                        </div> */}
                        </div>
                    </form>    
                    </div> 
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

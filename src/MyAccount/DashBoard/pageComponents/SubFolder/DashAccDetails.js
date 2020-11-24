import React from 'react'

export default function DashAccDetails() {
    return (
        <div id="account-details" className="tab-pane fade">
        <h3>Account details </h3>
        <div className="login-form">
          <form action="#">
            <div className="form-group row align-items-center">
              <label className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Title</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <div className="form-row">
                  <div className="col-6 col-sm-3">
                    <div className="custom-radio">
                      <input className="form-check-input" type="radio" name="gender" id="male" />
                      <span className="checkmark" />
                      <label className="form-check-label" htmlFor="male">Mr.</label>
                    </div>
                  </div>
                  <div className="col-6 col-sm-3">
                    <div className="custom-radio">
                      <input className="form-check-input" type="radio" name="gender" id="female" />
                      <span className="checkmark" />
                      <label className="form-check-label" htmlFor="female">Mrs.</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="f-name" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">First Name</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="text" className="form-control" id="f-name" required />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="l-name" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Last Name</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="text" className="form-control" id="l-name" required />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Email Address</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="text" className="form-control" id="email" required />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputpassword" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Current Password</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="password" className="form-control" id="inputpassword" required />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="newpassword" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">New Password</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="password" className="form-control" id="newpassword" required />
                <button className="pass-show-btn" type="button">Show</button>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="c-password" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Confirm Password</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="password" className="form-control" id="c-password" required />
                <button className="pass-show-btn" type="button">Show</button>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="birth" className="col-12 col-sm-12 col-md-4 col-lg-3 col-form-label">Birthdate (Optional)</label>
              <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                <input type="date" className="form-control" id="birth" placeholder="MM / DD / YYYY" required />
              </div>
            </div>
            <div className="form-check row p-0 mt-5">
              <div className="col-12 col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-3">
                <div className="custom-checkbox">
                  <input className="form-check-input" type="checkbox" id="offer" />
                  <span className="checkmark" />
                  <label className="form-check-label" htmlFor="offer">Receive offers from our partners</label>
                </div>
              </div>
            </div>
            <div className="form-check row p-0 mt-4">
              <div className="col-12 col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-3">
                <div className="custom-checkbox">
                  <input className="form-check-input" type="checkbox" id="subscribe" required />
                  <span className="checkmark" />
                  <label className="form-check-label" htmlFor="subscribe">Sign up for our newsletter<br />Subscribe to our newsletters now and stay up-to-date with new collections, the latest lookbooks and exclusive offers..</label>
                </div>
              </div>
            </div>
            <div className="register-box d-flex justify-content-end mt-half">
              <button type="submit" className="btn btn-secondary">Save</button>
            </div>
          </form>
        </div>
      </div>
    )
}

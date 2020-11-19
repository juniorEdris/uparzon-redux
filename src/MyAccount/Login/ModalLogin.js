import React from 'react'
import './ModalLogin.css'

export default function ModalLogin() {
    return (
        <div className='p-5'>
            <form className='col-md-10 m-auto'>
                <div className="form-row mb-3">
                <div className="form-group col-12 col-sm-12 col-md-6">
                    <label htmlFor="login_user">Username Or Email <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="login_user" required />
                    <label htmlFor="login_pass">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" id="login_pass" required />
                </div>
                </div>
                <div className="form-row align-items-center mb-3">
                <div className="form-group col-4 col-sm-2 col-md-2 col-lg-1">
                    <button type="submit" className="btn btn-secondary">Login</button>
                </div>
                <div className="form-group col-8 col-sm-10 col-md-10 col-lg-11">
                    <div className="form-check">
                    <div className="custom-checkbox">
                        <input className="form-check-input" type="checkbox" id="remember_check" />
                        <span className="checkmark" />
                        <label className="form-check-label" htmlFor="remember_check">remember Me</label>
                    </div>
                    </div>
                </div>
                </div>
                <p className="lost-password">
                <a href="#">Lost your password?</a>
                </p>
            </form>
        </div>
      
    )
}

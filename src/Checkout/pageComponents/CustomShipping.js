import React,{useEffect} from 'react'
import $ from'jquery'

export default function CustomShipping() {

    useEffect(()=>{
        $("#different_shipping").on("change",function(){
			$(".ship-box-info").slideToggle(300);
		});
    },[])
    return (
        <div className="form-row">
            <div className="form-group col-12 col-sm-12 col-md-12">
                <div className="form-check mb-3">
                <div className="custom-checkbox">
                    <input className="form-check-input" type="checkbox" id="different_shipping" />
                    <span className="checkmark" />
                    <label className="form-check-label" htmlFor="different_shipping" id="different_shipping_address">Ship to a different address?</label>
                </div>
                </div>
                <div className="ship-box-info mt-4">
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                    <label htmlFor="f_name">First Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="f_name" required />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                    <label htmlFor="l_name">Last Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="l_name" required />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-6">
                    <label htmlFor="com_name">Company</label>
                    <input type="text" className="form-control" id="com_name" />
                    </div>
                    <div className="form-group col-12 col-sm-12 col-md-6">
                    <label htmlFor="email_add">Email Address <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="email_add" required />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="coun_name" className="d-block">Country <span className="text-danger">*</span></label>
                    <select name="country_id" id="coun_name" className="form-control nice-select" required>
                        <option value> --- Please Select --- </option>
                        <option value>Argentina</option>
                        <option value>Bangladesh</option>
                        <option value>Belgium</option>
                        <option value>Brazil</option>
                        <option value>Germany</option>
                        <option value>India</option>
                        <option value>United Kingdom</option>
                        <option value>United States</option>
                    </select>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="street_add">Street Address</label>
                    <input type="text" className="form-control" id="street_add" />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="ap_add">Apartment, suite, unit etc. (optional)</label>
                    <input type="text" className="form-control" id="ap_add" />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="cit_name">City <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="cit_name" required />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="prov_name">Province <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="prov_name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12 col-sm-12 col-md-12">
                    <label htmlFor="zp_code">Zip Code <span className="text-danger">*</span></label>
                    <input type="number" className="form-control" id="zp_code" required />
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

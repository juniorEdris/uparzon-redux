import React,{useEffect} from 'react'
import $ from 'jquery'

export default function UserAction() {

    useEffect(() => {
        // Checkout Page Accordion Behaviour
		$( '#show_coupon' ).on('click', function() {
			$( '#checkout_coupon' ).slideToggle(300);
		});

    }, [])
    return (
        <div className="user-actions-area">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <div className="user-actions user-coupon">
            <h3>Have A Coupon? <span id="show_coupon">Click Here To Enter Your Code.</span></h3>
            <div id="checkout_coupon" className="display-content">
                <div className="coupon-info">
                <form action="#">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <div className="input-group">
                        <input type="text" name="coupon" placeholder="Coupon Code" id="input-coupon" className="form-control mr-3" required />
                        <input type="submit" defaultValue="Apply Coupon" id="button-coupon" className="btn btn-secondary" />
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div> {/* end of user-actions */}
        </div>
        </div> {/* end of row */}
    </div>
    )
}

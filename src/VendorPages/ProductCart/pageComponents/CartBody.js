/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'

export default function CartBody() {
    return (
        <div>
            {/* Start cart Wrapper */}
            <div className="shopping-cart-wrapper pb-70">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                    <div className="shopping-cart">
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section-title">
                            <h3>Shopping Cart</h3>
                            </div>
                            <form action="#">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <td>Image</td>
                                    <td>Product Name</td>
                                    <td>Model</td>
                                    <td>Quantity</td>
                                    <td>Unit Price</td>
                                    <td>Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                        <Link to="product-details.html"><img src="https://uparzon.com.bd/assets/img/product/pro-layout-img5.jpg" alt="Cart Product Image" title="Compete Track Tote" className="img-thumbnail" /></Link>
                                    </td>
                                    <td>
                                        <Link to="product-details.html">Compete Track Tote</Link>
                                        <span>Delivery Date: 2019-09-22</span>
                                        <span>Color: Brown</span>
                                        <span>Reward Points: 300</span>
                                    </td>
                                    <td>3</td>
                                    <td>
                                        <div className="input-group btn-block">
                                        <div className="product-qty mr-3">
                                            <input type="text" defaultValue={0} />
                                        </div>
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-refresh" /></button>
                                            <button type="button" className="btn btn-danger pull-right"><i className="fa fa-times-circle" /></button>
                                        </span>
                                        </div>
                                    </td>
                                    <td>$200.00</td>
                                    <td>$200.00</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <Link to="product-details.html"><img src="https://uparzon.com.bd/assets/img/product/pro-layout-img4.jpg" alt="Cart Product Image" title="Rival Field Messenger 6" className="img-thumbnail" /></Link>
                                    </td>
                                    <td>
                                        <Link to="product-details.html">Rival Field Messenger 6</Link>
                                        <span>Color: Dark Blue</span>
                                    </td>
                                    <td>10</td>
                                    <td>
                                        <div className="input-group btn-block">
                                        <div className="product-qty mr-3">
                                            <input type="text" defaultValue={0} />
                                        </div>
                                        <span className="input-group-btn">
                                            <button type="submit" data-toggle="tooltip" data-direction="top" className="btn btn-primary" data-original-title="Update"><i className="fa fa-refresh" /></button>
                                            <button type="button" data-toggle="tooltip" data-direction="top" className="btn btn-danger pull-right" data-original-title="Remove"><i className="fa fa-times-circle" /></button>
                                        </span>
                                        </div>
                                    </td>
                                    <td>$480.00</td>
                                    <td>$480.00</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <Link to="product-details.html"><img src="https://uparzon.com.bd/assets/img/product/pro-layout-img3.jpg" alt="Cart Product Image" title="Fusion Backpack" className="img-thumbnail" /></Link>
                                    </td>
                                    <td>
                                        <Link to="product-details.html">Fusion Backpack</Link>
                                        <span>Select: White</span>
                                        <span>Color: Brown</span>
                                        <span>Reward Points: 200</span>
                                    </td>
                                    <td>2</td>
                                    <td>
                                        <div className="input-group btn-block">
                                        <div className="product-qty mr-3">
                                            <input type="text" defaultValue={0} />
                                        </div>
                                        <span className="input-group-btn">
                                            <button type="submit" data-toggle="tooltip" data-direction="top" className="btn btn-primary" data-original-title="Update"><i className="fa fa-refresh" /></button>
                                            <button type="button" data-toggle="tooltip" data-direction="top" className="btn btn-danger pull-right" data-original-title="Remove"><i className="fa fa-times-circle" /></button>
                                        </span>
                                        </div>
                                    </td>
                                    <td>$180.00</td>
                                    <td>$180.00</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </form>
                            <div className="cart-accordion-wrapper mt-full mt-40">
                            <h3>What would you like to do next?</h3>
                            <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                            <div id="cart_accordion" className="mt-4" role="tablist">
                                <div className="card">
                                <div className="card-header" role="tab" id="headingCoupon">
                                    <h4 className="mb-0">
                                    <a data-toggle="collapse" href="#collapseCoupon" aria-expanded="false" aria-controls="collapseCoupon">Use Coupon Code<i className="ion ion-ios-arrow-down" /></a>
                                    </h4>
                                </div>
                                <div id="collapseCoupon" className="collapse" role="tabpanel" aria-labelledby="headingCoupon" data-parent="#cart_accordion">
                                    <div className="card-body">
                                    <div className="input-group">
                                        <label className="col-12 col-sm-12 col-md-3" htmlFor="input-coupon">Enter your coupon here</label>
                                        <div className="col-12 col-sm-12 col-md-9">
                                        <div className="input-group">
                                            <input type="text" name="coupon" placeholder="Enter your coupon here" id="input-coupon" className="form-control" />
                                            <input type="button" defaultValue="Apply Coupon" id="button-coupon" className="btn btn-secondary cart-pg" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="card">
                                <div className="card-header" role="tab" id="headingTax">
                                    <h4 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapseTax" aria-expanded="false" aria-controls="collapseTax">Estimate Shipping &amp; Taxes<i className="ion ion-ios-arrow-down" /></a>
                                    </h4>
                                </div>
                                <div id="collapseTax" className="collapse" role="tabpanel" aria-labelledby="headingTax" data-parent="#cart_accordion">
                                    <div className="card-body cart-select">
                                    <p className="pb-20">Enter your destination to get a shipping estimate.</p>
                                    <div className="input-group form-group">
                                        <label className="col-12 col-sm-12 col-md-3" htmlFor="input-country"><span className="text-danger">*</span> Country</label>
                                        <div className="col-12 col-sm-12 col-md-9">
                                        <select name="country_id" id="input-country" className="form-control nice-select">
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
                                    <div className="input-group form-group">
                                        <label className="col-12 col-sm-12 col-md-3" htmlFor="input-zone"><span className="text-danger">*</span> Region / State</label>
                                        <div className="col-12 col-sm-12 col-md-9">
                                        <select name="zone_id" id="input-zone" className="form-control nice-select">
                                            <option value> --- Please Select --- </option>
                                            <option value>Alabama</option>
                                            <option value>Arizona</option>
                                            <option value>California</option>
                                            <option value>Florida</option>
                                            <option value>Newyork</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="input-group form-group mb-5">
                                        <label className="col-12 col-sm-12 col-md-3" htmlFor="input-postcode"><span className="text-danger">*</span> Post Code</label>
                                        <div className="col-12 col-sm-12 col-md-9">
                                        <input type="text" name="postcode"  placeholder="Post Code" id="input-postcode" className="form-control mb-0" />
                                        </div>
                                    </div>
                                    <button type="button" id="button-quote" className="btn btn-secondary">Get Quotes</button>
                                    </div>
                                </div>
                                </div>
                                <div className="card">
                                <div className="card-header" role="tab" id="headingGift">
                                    <h4 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" href="#collapseGift" aria-expanded="false" aria-controls="collapseGift">Use Gift Certificate<i className="ion ion-ios-arrow-down" /></a>
                                    </h4>
                                </div>
                                <div id="collapseGift" className="collapse" role="tabpanel" aria-labelledby="headingGift" data-parent="#cart_accordion">
                                    <div className="card-body">
                                    <div className="input-group">
                                        <label className="col-12 col-sm-12 col-md-3" htmlFor="input-voucher">Enter your gift certificate code here</label>
                                        <div className="col-12 col-sm-12 col-md-9">
                                        <div className="input-group">
                                            <input type="text" name="voucher"  placeholder="Enter your gift certificate code here" id="input-voucher" className="form-control" />
                                            <input type="button" defaultValue="Apply Gift Certificate" id="button-boucher" className="btn btn-secondary cart-pg" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="cart-amount-wrapper">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-4 offset-md-8">
                                <table className="table table-bordered">
                                    <tbody>
                                    <tr>
                                        <td><strong>Sub-Total:</strong></td>
                                        <td>$860.00</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total:</strong></td>
                                        <td><span className="color-primary">$860.00</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                            <div className="cart-button-wrapper d-flex justify-content-between mt-4">
                            <Link to="/shop" className="btn btn-secondary">Continue Shopping</Link>
                            <Link to="/checkout" className="btn btn-secondary dark align-self-end">Checkout</Link>
                            </div>
                        </div>
                        </div>
                    </div> {/* end of shopping-cart */}
                    </main> {/* end of #primary */}
                </div>
                </div> {/* end of row */}
            </div> {/* end of container */}
            </div>
            {/* End cart Wrapper */}

        </div>
    )
}

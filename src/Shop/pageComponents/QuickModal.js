import React from 'react'

export default function QuickModal() {
    return (
        <div>
            {/* Quick view modal start */}
            <div className="modal fade" id="quickk_view">
            <div className="container">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-5">
                        <div className="product-large-slider mb-20">
                            <div className="pro-large-img">
                            <img src="assets/img/product/product-4.jpg" alt="" />
                            </div>
                            <div className="pro-large-img">
                            <img src="assets/img/product/product-5.jpg" alt="" />
                            </div>
                            <div className="pro-large-img">
                            <img src="assets/img/product/product-6.jpg" alt="" />
                            </div>
                            <div className="pro-large-img">
                            <img src="assets/img/product/product-7.jpg" alt="" />
                            </div>
                            <div className="pro-large-img">
                            <img src="assets/img/product/product-8.jpg" alt="" />
                            </div>
                            <div className="pro-large-img">
                            <img src="assets/img/product/product-9.jpg" alt="" />
                            </div>
                        </div>
                        <div className="pro-nav">
                            <div className="pro-nav-thumb"><img src="assets/img/product/product-4.jpg" alt="" /></div>
                            <div className="pro-nav-thumb"><img src="assets/img/product/product-5.jpg" alt="" /></div>
                            <div className="pro-nav-thumb"><img src="assets/img/product/product-6.jpg" alt="" /></div>
                            <div className="pro-nav-thumb"><img src="assets/img/product/product-7.jpg" alt="" /></div>
                            <div className="pro-nav-thumb"><img src="assets/img/product/product-8.jpg" alt="" /></div>
                            <div className="pro-nav-thumb"><img src="assets/img/product/product-9.jpg" alt="" /></div>
                        </div>
                        </div>
                        <div className="col-lg-7">
                        <div className="product-details-inner">
                            <div className="product-details-contentt">
                            <div className="pro-details-name mb-10">
                                <h3>Bose SoundLink Bluetooth Speaker</h3>
                            </div>
                            <div className="pro-details-review mb-20">
                                <ul>
                                <li>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                </li>
                                <li><a href="#">1 Reviews</a></li>
                                </ul>
                            </div>
                            <div className="price-box mb-15">
                                <span className="regular-price"><span className="special-price">£50.00</span></span>
                                <span className="old-price"><del>£60.00</del></span>
                            </div>
                            <div className="product-detail-sort-des pb-20">
                                <p>Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned</p>
                            </div>
                            <div className="pro-details-list pt-20">
                                <ul>
                                <li><span>Availability :</span>In Stock</li>
                                </ul>
                            </div>
                            <div className="product-availabily-option mt-15 mb-15">
                                <h3>Available Options</h3>
                                <div className="color-optionn">
                                <h4><sup>*</sup>color</h4>
                                <ul>
                                    <li>
                                    <a className="c-black" href="#" title="Black" />
                                    </li>
                                    <li>
                                    <a className="c-blue" href="#" title="Blue" />
                                    </li>
                                    <li>
                                    <a className="c-brown" href="#" title="Brown" />
                                    </li>
                                    <li>
                                    <a className="c-gray" href="#" title="Gray" />
                                    </li>
                                    <li>
                                    <a className="c-red" href="#" title="Red" />
                                    </li>
                                </ul> 
                                </div>
                            </div>
                            <div className="pro-quantity-box mb-30">
                                <div className="qty-boxx">
                                <label>qty :</label>
                                <input type="text" placeholder={0} />
                                <button className="btn-cart lg-btn">add to cart</button>
                                </div>
                            </div>
                            <div className="pro-social-sharing">
                                <label>share :</label>
                                <ul>
                                <li className="list-inline-item">
                                    <a href="#" className="bg-facebook" title="Facebook">
                                    <i className="fa fa-facebook" />
                                    <span>like 0</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="bg-twitter" title="Twitter">
                                    <i className="fa fa-twitter" />
                                    <span>tweet</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="bg-google" title="Google Plus">
                                    <i className="fa fa-google-plus" />
                                    <span>google +</span>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Quick view modal end */}
        </div>
    )
}

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../../Utility/StateProvider'
import './WishlistBody.css'

export default function WishListBody() {

    const [{wishList}] = useStateValue()

    console.log('WishList page',wishList);
    return (
        <div>
            {/* Start of wishlist Wrapper */}
            <div className="wishlist-wrapper mb-55">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <main id="primary" className="site-main">
                    <div className="wishlist">
                        <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section-title">
                            <h3>Wishlist</h3>
                            </div>
                            <form action="#">
                            <div className="table-responsive text-center wishlist-style">
                                <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <td>Image</td>
                                    <td>Product Name</td>
                                    <td>Model</td>
                                    <td>Stock</td>
                                    <td>Unit Price</td>
                                    <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishList?.map(prod =>(
                                            <tr id={prod.id}>
                                            <td>
                                                <Link to="product-details.html"><img className='wish__thumb' src={prod.img1} alt="Wishlist Product Image" title={prod.name} /></Link>
                                            </td>
                                            <td>
                                                <Link to="product-details.html">{prod.name}</Link>
                                            </td>
                                            <td>null</td>
                                            <td>{prod.isStock ? 'In stock' : 'Out of stock'}</td>
                                            <td>
                                                <div className="price"><small><del>{prod.oldPrice || ''}</del></small> <strong>{prod.price}</strong></div>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-primary"><i className="fa fa-shopping-cart" /></button>
                                                <Link to="#" className="btn btn-danger"><i className="fa fa-times" /></Link>
                                            </td>
                                            </tr>

                                        ))
                                    }
                                    {/* <tr>
                                    <td>
                                        <Link to="product-details.html"><img src="https://uparzon.com.bd/assets/img/product/pro-layout-img5.jpg" alt="Wishlist Product Image" title="Rival Field Messenger 6" /></Link>
                                    </td>
                                    <td>
                                        <Link to="product-details.html">Rival Field Messenger 6</Link>
                                    </td>
                                    <td>3</td>
                                    <td>In Stock</td>
                                    <td>
                                        <div className="price"><small><del>$440.00</del></small> <strong>$180.00</strong></div>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary"><i className="fa fa-shopping-cart" /></button>
                                        <Link to="#" className="btn btn-danger"><i className="fa fa-times" /></Link>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <Link to="product-details.html"><img src="https://uparzon.com.bd/assets/img/product/pro-layout-img1.jpg" alt="Wishlist Product Image" title="Fusion Backpack" /></Link>
                                    </td>
                                    <td>
                                        <Link to="product-details.html">Fusion Backpack</Link>
                                    </td>
                                    <td>3</td>
                                    <td>In Stock</td>
                                    <td>
                                        <div className="price">$200.00</div>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary"><i className="fa fa-shopping-cart" /></button>
                                        <Link to="#" className="btn btn-danger"><i className="fa fa-times" /></Link>
                                    </td>
                                    </tr> */}
                                </tbody>
                                </table>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div> {/* end of wishlist */}
                    </main> {/* end of #primary */}
                </div>
                </div> {/* end of row */}
            </div> {/* end of container */}
            </div>
            {/* End of wishlist Wrapper */}

        </div>
    )
}

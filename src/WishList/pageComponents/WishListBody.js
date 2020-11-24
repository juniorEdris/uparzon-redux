/* eslint-disable jsx-a11y/img-redundant-alt */
// If wishList length is greater than 0 then form will render
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../Utility/StateProvider'
import './WishlistBody.css'

export default function WishListBody() {

    const [{wishList}] = useStateValue()

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
                    {// Turnery render here
                        wishList.length > 0 ?      
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
                                                <button type='button'  className="btn btn-primary"><i className="fa fa-shopping-cart" /></button>
                                                <Link to="#"  className="btn btn-danger"><i className="fa fa-times" /></Link>
                                            </td>
                                            </tr>

                                        )) 

                                    }
                                </tbody>
                                </table>
                            </div>
                            </form> : <div className='choose_product'><Link to='/' className="btn">Choose Product</Link></div>

                        }
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

/* eslint-disable jsx-a11y/img-redundant-alt */
// If wishList length is greater than 0 then form will render
import React from 'react'
import { Link } from 'react-router-dom'
import { DelItem } from '../../Utility/PageAction'
import { useStateValue, } from '../../Utility/StateProvider'
import './WishlistBody.css'

export default function WishListBody() {

    const [{wishList},dispatch] = useStateValue()

    const addToCart=(item)=>{
        console.log('add wish item',item);
        dispatch({type:"ADD_TO_CART",payload:item})
    }
    // const DelItem = (item)=>{
    //     const filtered = wishList.filter(prod => prod.id !== item.id)
    //     localStorage.setItem('Wish List',JSON.stringify(filtered))
    //     window.location.reload(false);
    // }

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
                                                <Link to="product-details.html"><img className='wish__thumb' src={`https:${prod.photo.replace('demostore','store')}`} alt="Wishlist Product Image" title={prod.name} /></Link>
                                            </td>
                                            <td>
                                                <Link to="product-details.html">{prod.name}</Link>
                                            </td>
                                            <td>null</td>
                                            <td>{prod.is_grocery ? 'In stock' : 'Out of stock'}</td>
                                            <td>
                                                <div className="price"><small><del>{prod.previous_price || ''}</del></small> <strong>{prod.price}</strong></div>
                                            </td>
                                            <td>
                                                <button type='button'  className="btn btn-primary" onClick={()=>addToCart(prod)}><i className="fa fa-shopping-cart" /></button>
                                                <button type='button'  className="btn btn-danger" onClick={()=>DelItem(prod,wishList,'Wish List')}><i className="fa fa-times" /></button>
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

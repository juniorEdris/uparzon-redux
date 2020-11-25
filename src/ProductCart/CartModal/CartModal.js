import { Link } from '@material-ui/core'
import React from 'react'

export default function CartModal({product}) {
    return (
        <div className="modal fade" id="cart_modal">
            <div className="container">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <p className="blue"> <b>1 new item(s) have been added to your cart</b></p>
                            <div className="table-responsive text-center wishlist-style">
                                <table className="table table-bordered">
                                <tbody>
                                    {                                       
                                        
                                            <tr id={product?.id}>
                                            <td>
                                                <Link to="product-details.html"><img className='wish__thumb' src={product?.img1} alt={'product.name'} title={product?.name} /></Link>
                                            </td>
                                            <td>
                                                <Link to="product-details.html">{product?.name}</Link>
                                            </td>
                                            <td>null</td>
                                            <td>
                                                <div className="price"><small><del>{product?.oldPrice || ''}</del></small> <strong>{product?.price}</strong></div>
                                            </td>
                                            </tr>

                                      

                                    }
                                </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                </div>    
                </div>
                </div>
            </div>
        </div>
    )
}

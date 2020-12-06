//Showing data from compareList array in reducer component.

import React from 'react'
import { Link } from 'react-router-dom'
import { DelItem } from '../../Utility/PageAction'
import { useStateValue } from '../../Utility/StateProvider'

export default function CompareBody() {
  const [{compareList},dispatch] = useStateValue()

  // Adding to cart from Compare body is not working(it need to return object singley)
  const addToCart = (item) => {
    dispatch({type:"ADD_TO_CART",payload:item})
    }

    return (
<div className="comparison-wrapper pb-50">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
        <main id="primary" className="site-main">
          <div className="comparison">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="section-title">
                  <h3>Product Comparison</h3>
                </div>
                {
                  
                compareList.length > 0 ? 
                <form action="#">
                  <div className="table-responsive  text-center">
                    <table className="table table-bordered compare-style">
                      {/* <thead>
                        <tr>
                          <td colSpan={4}><strong>Product Details</strong></td>
                        </tr>
                      </thead> */}
                      <tbody>
                        <tr>
                          <td className="product-title">Product Name</td>
                          {
                            compareList.map(item=>(
                            <td id={item.id}><Link to="product-details.html"><strong>{item.name}</strong></Link></td>
                            ))
                          }
                        </tr>
                        <tr>
                          <td className="product-title">Image</td>
                          {
                            compareList.map(item=>(
                              <td> <img src={'https://uparzon.com.bd/assets/img/product/product-8.jpg'} alt={item.name} className='img-thumbnail' style={{width:'250px'}}/> </td>
                            ))
                          }
                         
                        </tr>
                        <tr>
                          <td className="product-title">Price</td>
                          {
                            compareList.map(item=>(
                              <td> <del>{item.previous_price ?`$${item.previous_price}` : '' }</del> <span>${item.price}</span></td>
                            ))
                          }
                        </tr>
                        <tr>
                          <td className="product-title">Model</td>
                          {
                            compareList.map(item=>(
                              <td>2</td>
                            ))
                          }
                        </tr>
                        <tr>
                          <td className="product-title">Brands</td>
                          {
                            compareList.map(item=>(
                              <td><Link className="text-color" to="#">{item.shop_name}</Link></td>
                            ))
                          }
                        </tr>
                        <tr>
                          <td className="product-title">Availability</td>
                          {
                            compareList.map(item=>(
                              <td>{item.is_grocery ? 'In Stock' : 'Out of Stock'}</td>
                            ))
                          }
                        </tr>
                        <tr>
                          <td className="product-title">Rating</td>
                              
                                {compareList &&
                                  compareList.map(item=>(
                              <td>
                                    <div className="product-ratings d-flex justify-content-center mb-2">
                                      <ul className="rating d-flex">
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star" /></li>
                                        <li><i className="fa fa-star disabled" /></li>
                                        <li><i className="fa fa-star disabled" /></li>
                                        <li><i className="fa fa-star disabled" /></li>
                                      </ul>
                                    </div>
                                <span>Based on {item.reviews?.length} reviews.</span>
                              </td>
                                  ))
                                }
                                
                              
                            

                        </tr>
                        <tr>
                          <td className="product-title">Summary</td>
                          {
                            compareList.map(item=>
                              (
                              <td className="description" style={{textAlign:'justify'}}>{item?.description}</td>
                            ))
                          }
                        </tr>
   
                        <tr>
                          <td className="product-title">Actions</td>
                          {
                            compareList.map(item=>(
                          <td>
                            <Link to="#" className="btn btn-secondary mb-2 mb-lg-0 mr-xl-2" onClick={()=>addToCart(item)}>Add to Cart</Link>
                            <Link to="#" className="btn btn-secondary" onClick={()=>DelItem(item,compareList,'Compare List')}>Remove</Link>
                          </td>

                            ))
                          }

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form> : <div className='choose_product'><Link to='/' className="btn">Choose Product</Link></div>
              }
              </div>
            </div>
          </div> 
        </main> 
      </div>
    </div> 
  </div> 
</div>
    )
}

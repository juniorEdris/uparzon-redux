import React from 'react'
import { Link } from 'react-router-dom'

export default function CompareBody() {
    return (
        <div>
            {/* Start compare Wrapper */}
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
                <form action="#">
                  <div className="table-responsive  text-center">
                    <table className="table table-bordered compare-style">
                      <thead>
                        <tr>
                          <td colSpan={4}><strong>Product Details</strong></td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product-title">Product</td>
                          <td><Link to="product-details.html"><strong>Compete Track Tote</strong></Link></td>
                          <td><Link to="product-details.html"><strong>Rival Field Messenger 6</strong></Link></td>
                          <td><Link to="product-details.html"><strong>Fusion Backpack</strong></Link></td>
                        </tr>
                        <tr>
                          <td className="product-title">Image</td>
                          <td> <img src="https://uparzon.com.bd/assets/img/product/pro-layout-img7.jpg" alt="" className="img-thumbnail" /> </td>
                          <td> <img src="https://uparzon.com.bd/assets/img/product/pro-layout-img8.jpg" alt="" className="img-thumbnail" /> </td>
                          <td> <img src="https://uparzon.com.bd/assets/img/product/pro-layout-img9.jpg" alt="" className="img-thumbnail" /> </td>
                        </tr>
                        <tr>
                          <td className="product-title">Price</td>
                          <td> <del>$420.00</del> <span>$150.00</span></td>
                          <td> <del>$320.00</del> <span>$180.00</span></td>
                          <td> <del>$430.00</del> <span>$100.00</span></td>
                        </tr>
                        <tr>
                          <td className="product-title">Model</td>
                          <td>2</td>
                          <td>3</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td className="product-title">Brands</td>
                          <td><Link className="text-color" to="#">Studio Design</Link></td>
                          <td><Link className="text-color" to="#">Graphic Corner</Link></td>
                          <td><Link className="text-color" to="#">Graphic Corner</Link></td>
                        </tr>
                        <tr>
                          <td className="product-title">Availability</td>
                          <td>In Stock</td>
                          <td>In Stock</td>
                          <td>In Stock</td>
                        </tr>
                        <tr>
                          <td className="product-title">Rating</td>
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
                            <span>Based on 1 reviews.</span>
                          </td>
                          <td>
                            <div className="product-ratings d-flex justify-content-center mb-2">
                              <ul className="rating d-flex">
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star disabled" /></li>
                              </ul>
                            </div>
                            <span>Based on 3 reviews.</span>
                          </td>
                          <td>
                            <div className="product-ratings d-flex justify-content-center mb-2">
                              <ul className="rating d-flex">
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                                <li><i className="fa fa-star" /></li>
                              </ul>
                            </div>
                            <span>Based on 10 reviews.</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="product-title">Summary</td>
                          <td className="description">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend ..</td>
                          <td className="description">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend ...</td>
                          <td className="description">Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend ..</td>
                        </tr>
                        <tr>
                          <td className="product-title">Weight</td>
                          <td>0.90kg</td>
                          <td>1.00kg</td>
                          <td>146.40g</td>
                        </tr>
                        <tr>
                          <td className="product-title">Dimensions (L x W x H)</td>
                          <td>0.00cm x 0.00cm x 0.00cm</td>
                          <td>0.00cm x 0.00cm x 0.00cm</td>
                          <td>0.00cm x 0.00cm x 0.00cm</td>
                        </tr>
                        <tr>
                          <td className="product-title">Actions</td>
                          <td>
                            <Link to="cart.html" className="btn btn-secondary mb-2 mb-lg-0 mr-xl-2">Add to Cart</Link>
                            <Link to="#" className="btn btn-secondary">Remove</Link>
                          </td>
                          <td>
                            <Link to="cart.html" className="btn btn-secondary mb-2 mb-lg-0 mr-xl-2">Add to Cart</Link>
                            <Link to="#" className="btn btn-secondary">Remove</Link>
                          </td>
                          <td>
                            <Link to="cart.html" className="btn btn-secondary mb-2 mb-lg-0 mr-xl-2">Add to Cart</Link>
                            <Link to="#" className="btn btn-secondary">Remove</Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div> {/* end of comparison */}
        </main> {/* end of #primary */}
      </div>
    </div> {/* end of row */}
  </div> {/* end of container */}
</div>
{/* End compare Wrapper */}

        </div>
    )
}

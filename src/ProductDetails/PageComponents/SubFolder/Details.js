/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Details() {
    return (
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
                <li><link to="#" />1 Reviews</li>
              </ul>
            </div>
            <div className="price-box mb-15">
              <span className="regular-price"><span className="special-price">£50.00</span></span>
              <span className="old-price"><del>£60.00</del></span>
            </div>
            <div className="product-detail-sort-des pb-20">
              <p>Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're not typically too concerned with marketing talk this particular statement is clearly pretty accurate...</p>
            </div>
            <div className="pro-details-list pt-20">
              <ul>
                <li><span>Ex Tax :</span>£60.24</li>
                <li><span>Brands :</span><link to="#" />Canon</li>
                <li><span>Product Code :</span>Digital</li>
                <li><span>Reward Points :</span>200</li>
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
            <div className="useful-links mb-20">
              <ul>
                <li>
                  <link to="#" /><i className="fa fa-heart-o" />add to wish list
                </li>
                <li>
                  <link to="#" /><i className="fa fa-refresh" />compare this product
                </li>
              </ul>
            </div>
            <div className="tag-line mb-20">
              <label>tag :</label>
              <a href="#">Movado</a>,
              <a href="#">Omega</a>
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
        )
}

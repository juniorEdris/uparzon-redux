/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './BrandArea.css'
import { MobileProducts, Truncate } from '../../Data';

export default function BrandArea() {

  const brandOptions = {
    loop: true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:3,
            nav:false,
        },
        700:{
            items:4,
            nav:false,
        },
        1200:{
            items:6
        },
        
    },
}

const options = {
  loop: true,
  margin:10,
  nav:true,
  navText:['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
  dots:false,
  responsive:{
      0:{
          items:2,
          nav:false,
      },
      700:{
          items:3,
          nav:false,
      },
      900:{
          items:5,
          nav:false,
      },
      1200:{
          items:6
      },
      
  },
}
    return (
        <div>
            <div className="brand-area pb-70">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="section-title">
          <h3><span>Brand</span> sale</h3>
        </div>
      </div>
      <div className="col-12">
        <ul className="nav brand-active "> {/*owl-carousel */}
              {/* Brand slider starts here */}
              <OwlCarousel
                className="owl-theme"
                {...brandOptions}
              >

          <li>
            <a className="active" href="#brand-one" data-toggle="tab">
              <img src="assets/img/brand/brand1.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#brand-two" data-toggle="tab">
              <img src="assets/img/brand/brand2.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#brand-three" data-toggle="tab">
              <img src="assets/img/brand/brand3.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#brand-one" data-toggle="tab">
              <img src="assets/img/brand/brand4.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#brand-three" data-toggle="tab">
              <img src="assets/img/brand/brand5.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#brand-two" data-toggle="tab">
              <img src="assets/img/brand/brand6.png" alt="" />
            </a>
          </li>
          </OwlCarousel>
        </ul>
      </div>
      <div className="col-12">
        <div className="tab-content">
          <div className="tab-pane fade show active" id="brand-one">
            <div className="product-gallary-wrapper brand-sale">
              <div className="product-gallary-active  sale-nav"> {/*owl-carousel owl-arrow-style */}
              {/* product slider starts here */}
                <OwlCarousel
                  className="owl-theme"
                  {...options}
                >
              {
                MobileProducts.map(data =>(
                  <div className="product-item">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src={data.img1} className="pri-img" alt={data.prodName} />
                      <img src={data.img2} className="sec-img" alt={data.prodName} />
                    </a>
                    <div className="box-label">
                      <div className="label-product label_new">
                        <span>{data.latest ? 'new': ''}</span>
                      </div>

                      <div className="label-product label_sale">
                        <span>{data.sale ? `-${data.sale}%` : '' }</span>
                      </div>
                    </div>
                    <div className="action-links">
                      <a href="#" title="Wishlist"><i className="lnr lnr-heart" /></a>
                      <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
                      <a href="#" title="Quick view" data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
                    </div>
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><a href="shop-grid-left-sidebar.html">{data.brand}</a></p>
                    </div>
                    <div className="product-name">
                <h4><a href="product-details.html" title={data.prodName}>{Truncate(data.prodName,25)}</a></h4>
                    </div>
                    <div className="ratings">
                      <span className="yellow"><i className="lnr lnr-star" /></span>
                      <span className="yellow"><i className="lnr lnr-star" /></span>
                      <span className="yellow"><i className="lnr lnr-star" /></span>
                      <span className="yellow"><i className="lnr lnr-star" /></span>
                      <span><i className="lnr lnr-star" /></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price"><span className={` ${data.special && 'special-price'}`}>£{data.price}</span></span>
                      <span className="old-price"><del>{data.oldPrice ? `£${data.oldPrice}` : ''}</del></span>
                    </div>
                    <button className="btn-cart" type="button">add to cart</button>
                  </div>
                </div> /* </div> end single item */
                    ))
              }

               </OwlCarousel>
              </div>
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

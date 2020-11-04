import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HeadphonesAccessories.css'
import { Electronics, Truncate } from '../../Data';

export default function HeadphonesAccessories() {

  const options = {
    loop: true,
    margin:10,
    nav:true,
    navText:['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        700:{
            items:2,
        },
        1000:{
            items:3
        },
        
    },
}
    return (
        <div>
            <div className="home-module-five">
  <div className="container-fluid">
    <div className="section-title">
      <h3><span>Headphones</span> &amp; Accessories </h3>
    </div>
    <div className="pro-module-four-active ">{/* owl-carousel owl-arrow-style*/}
      {/* slider starts here */}
      <OwlCarousel
        className="owl-theme"
        {...options}
      >
        {Electronics.map(data =>(
          <div className="product-module-four-item">
          <div className="product-module-caption">
            <div className="manufacture-com">
              <p><a href="shop-grid-left-sidebar.html">{data.brand}</a></p>
            </div>
            <div className="product-module-name">
              <h4><a href="product-details.html" title={data.prodName}>{Truncate(data.prodName,20)}</a></h4>
            </div>
            <div className="ratings">
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
            </div>
            <div className="price-box-module">
              <span className="regular-price"><span className={` special-price`}>£{data.price}</span></span>
              <span className="old-price"><del>{data.oldPrice ? `£${data.oldPrice}` : ''}</del></span>
            </div>
          </div>
          <div className="product-module-thumb">
            <a href="product-details.html">
              <img src={data.img2} alt={data.prodName} />
            </a>
          </div>
        </div>
        ))}
        
      </OwlCarousel>
    </div>
  </div>
</div>

        </div>
    )
}

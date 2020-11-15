// Laptop & Computer,Headphones & Accessories,Business & Office product component
import React from 'react'
import { Truncate } from '../../../Data'

export default function Card({id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings}) {
    return (
        <div className="product-module-four-item">
          <div className="product-module-caption">
            <div className="manufacture-com">
              <p><a href="shop-grid-left-sidebar.html">{brand}</a></p>
            </div>
            <div className="product-module-name">
              <h4><a href="product-details.html" title={name}>{Truncate(name,20)}</a></h4>
            </div>
            <div className="ratings">
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
            </div>
            <div className="price-box-module">
              <span className="regular-price"><span className={` special-price`}>£{price}</span></span>
              <span className="old-price"><del>{oldPrice ? `£${oldPrice}` : ''}</del></span>
            </div>
          </div>
          <div className="product-module-thumb">
            <a href="product-details.html">
              <img src={img1} alt={name} />
            </a>
          </div>
        </div> 
    )
}

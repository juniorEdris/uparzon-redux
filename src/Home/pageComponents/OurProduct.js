/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OurProduct.css'
import { Link } from 'react-router-dom';
import { Electronics, Entertainments, MobileProducts, Truncate } from '../../Data';
// import axios from '../../PrimarySections/Connections/Axios';
import { useState } from 'react';
import { useStateValue } from '../../Utility/StateProvider';
import ModalSection from '../../PrimarySections/Modal/ModalSection';
// import requests from '../../RequestLinks';
function OurProduct () {
  
  const [state,dispatch] = useStateValue()
  const [Electproducts] = useState(Electronics)
  const [Entertproducts] = useState(Entertainments)
  const [Mobileproducts] = useState(MobileProducts)
  
  

  
  const quickView = (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }else if(productCata === 'Mobile'){
      const singleProd = Mobileproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }
  }

  const addToCart= (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }else{
      const singleProd = MobileProducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }
  }
  const addToWishList= (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
      console.log('wishcart',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
    }else{
      const singleProd = MobileProducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
    }
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
          nav:true
        },
        1000:{
            items:5,
        },
        1200:{
            items:6
        },
        
    },
}

        return (
        <div className="product-wrapper fix pb-70">
        <div className="container-fluid">
          <div className="section-title product-spacing hm-11">
            <h3><span>our</span> product</h3>
            <div className="boxx-tab">
              <ul className="nav my-tab">
                <li>
                  <a className="active" data-toggle="tab" href="#one">Camera, Photo &amp; Video</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#two">Audio &amp; Home Theater</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#three">Cellphones &amp; Accessories</a>
                </li>
              </ul>
            </div>
          </div>
          
  {/* Slider starts here */}
  <div className="tab-content">
  <div className="tab-pane fade show active" id="one">
    <div className="product-gallary-wrapper">
      <div className="product-gallary-active  product-spacing">{/*owl-carousel owl-arrow-style */}
            <OwlCarousel
              className="owl-theme"
              {...options}
            >
        
        {Electproducts.map(product => (
                  <div className="product-item" id={product.id}>
                  <div className="product-thumb">
                    <Link to="/">
                      <img src={product.img1} className="pri-img" alt={product.prodName} />
                      <img src={product.img2} className="sec-img" alt={product.prodName} />
                    </Link>
                    
                    <div className="box-label">
                      <div className="label-product label_new">
                        <span>{product.latest ? 'new': ''}</span>
                      </div>
                      <div className="label-product label_sale">
                        <span>{product.sale ? `-${product.sale}%` : '' }</span>
                      </div>
                    </div>
                    <div className="action-links">
                      <a href="#" title="Wishlist" onClick={()=> addToWishList(product.id,'Electronics')}><i className="lnr lnr-heart" /></a>
                      <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
                      <a href="#" title="Quick view" onClick={()=>quickView(product.id,'Electronics')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
                    </div>
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><a href="shop-grid-left-sidebar.html">{product.brand}</a></p>
                    </div>
                    <div className="product-name">
                      <h4><a href="product-details.html" title={product.prodName}>{Truncate(product.prodName,25) }</a></h4>
                    </div>
                    <div className="ratings">
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span><i className="lnr lnr-star" /></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>£{product.price}</span></span>
                      <span className="old-price"><del>{product.oldPrice ? `£${product.oldPrice}` : ''}</del></span>
                    </div>
                    <button className="btn-cart" onClick={()=> addToCart(product.id,'Electronics')} type="button">add to cart</button>
                  </div>
                </div>/* </div> end single item */
        ))
        }
    </OwlCarousel>
      </div>
    </div>
  </div>
  
  

  <div className="tab-pane fade" id="two">
    <div className="product-gallary-wrapper">
 
      <div className="product-gallary-active  product-spacing"> {/*owl-carousel owl-arrow-style */}
        <OwlCarousel
        className="owl-theme"
        {...options}
        >

        {
          Entertproducts.map(product =>(
            <div className="product-item" id={product.id}>
          <div className="product-thumb">
            <a href="product-details.html">
              <img src={product.img1} className="pri-img" alt={product.prodName} />
              <img src={product.img2} className="sec-img" alt={product.prodName} />
            </a>
            <div className="box-label">
              <div className="label-product label_new">
                <span>{product.latest ? 'new': ''}</span>
              </div>

              <div className="label-product label_sale">
                <span>{product.sale ? `-${product.sale}%` : '' }</span>
              </div>
            </div>
            <div className="action-links">
              <a href="#" title="Wishlist" onClick={()=> addToWishList(product.id,'Entertainment')}><i className="lnr lnr-heart" /></a>
              <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
              <a href="#" title="Quick view" onClick={()=>quickView(product.id,'Entertainment')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
            </div>
          </div>
          <div className="product-caption">
            <div className="manufacture-product">
              <p><a href="shop-grid-left-sidebar.html">{product.brand}</a></p>
            </div>
            <div className="product-name">
              <h4><a href="product-details.html" title={product.prodName} >{Truncate(product.prodName,25)}</a></h4>
            </div>
            <div className="ratings">
              <span className="purple"><i className="lnr lnr-star" /></span>
              <span className="purple"><i className="lnr lnr-star" /></span>
              <span className="purple"><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
            </div>
            <div className="price-box">
              <span className="regular-price"><span className={` ${product.special && 'special-price'}`}>£{product.price}</span></span>
              <span className="old-price"><del>{product.oldPrice ? `£${product.oldPrice}` : ''}</del></span>
            </div>
            <button className="btn-cart" onClick={()=> addToCart(product.id,'Entertainment')} type="button">add to cart</button>
          </div>
        </div>/* </div> end single item */
          ))
        }
        
    </OwlCarousel>
      </div>
    </div>
  </div>
  


  <div className="tab-pane fade" id="three">

    <div className="product-gallary-wrapper">

      <div className="product-gallary-active  product-spacing">{/**owl-carousel owl-arrow-style */}
      <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {Mobileproducts.map(product => (
        <div className="product-item" id={product.id}>
          <div className="product-thumb" >
            <a href="product-details.html">
              <img src={product.img1} className="pri-img" alt={product.prodName} />
              <img src={product.img2} className="sec-img" alt={product.prodName} />
            </a>
            <div className="box-label">
              <div className="label-product label_new">
                <span>{product.latest ? 'new': ''}</span>
              </div>
              <div className="label-product label_sale">
                <span>{product.sale ? `-${product.sale}%` : '' }</span>
              </div>
            </div>
            <div className="action-links">
              <a href="#" title="Wishlist" onClick={()=> addToWishList(product.id,'Mobile')}><i className="lnr lnr-heart" /></a>
              <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
              <a href="#" title="Quick view" onClick={()=>{quickView(product.id,'Mobile')}} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
            </div>
          </div>
          <div className="product-caption">
            <div className="manufacture-product">
            <p><a href="shop-grid-left-sidebar.html">{product.brand}</a></p>
            </div>
            <div className="product-name">
              <h4><a href="product-details.html" title={product.prodName}>{Truncate(product.prodName,25)}</a></h4>
            </div>
            <div className="ratings">
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
              <span><i className="lnr lnr-star" /></span>
            </div>
            <div className="price-box">
            <span className="regular-price"><span className={`${product.special && 'special-price'}`}>£{product.price}</span></span>
              <span className="old-price"><del>{product.oldPrice ? `£${product.oldPrice}` : ''}</del></span>
            </div>
            <button className="btn-cart" onClick={()=> addToCart(product.id,'Mobile')} type="button">add to cart</button>
          </div>
        </div> /* </div> end single item */
        ))}
    </OwlCarousel>
      </div>
    </div>
  </div>

</div>
          {/* </Slider> */}
        </div>
         <ModalSection product={state.singleProd}/>
        </div>
        )
    }


export default OurProduct

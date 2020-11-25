/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './OurProduct.css'
import {AllProduct } from '../../Data';
import { useState } from 'react';
import { useStateValue } from '../../Utility/StateProvider';
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import Product from './Subfolder/Product';
import CartModal from '../../ProductCart/CartModal/CartModal';



function OurProduct () {


  const Electronics = AllProduct.filter(prod => prod.categories === 'Electronics')
  const Entertainments = AllProduct.filter(prod => prod.categories === 'Entertainment')
  const MobileProducts = AllProduct.filter(prod => prod.categories === 'Mobile')
  
  const [state] = useStateValue()
  const [Electproducts] = useState(Electronics)
  const [Entertproducts] = useState(Entertainments)
  const [Mobileproducts] = useState(MobileProducts)
  const options = {
    loop: false,
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
      <div className="product-gallary-active  product-spacing">
            <OwlCarousel
              className="owl-theme"
              {...options}
            >
        
            {Electproducts.map(product => (
              <Product key={product.id} {...product}/>
                  ))
        }
    </OwlCarousel>
      </div>
    </div>
  </div>
  
  

  <div className="tab-pane fade" id="two">
    <div className="product-gallary-wrapper">
 
      <div className="product-gallary-active  product-spacing">
        <OwlCarousel
        className="owl-theme"
        {...options}
        >

        {
          Entertproducts.map(product =>(
            <Product key={product.id} {...product}/>
          ))
        }
        
    </OwlCarousel>
      </div>
    </div>
  </div>
  


  <div className="tab-pane fade" id="three">

    <div className="product-gallary-wrapper">

      <div className="product-gallary-active  product-spacing">
      <OwlCarousel
        className="owl-theme"
        {...options}
        >
        {Mobileproducts.map(product => (
          <Product key={product.id} {...product}/>        
        ))}
    </OwlCarousel>
      </div>
    </div>
  </div>

</div>
          {/* </Slider> */}
        </div>
         <ModalSection product={state.quickView}/>
         <CartModal product={state.newCartProd}/>
        </div>
        )
    }


export default OurProduct

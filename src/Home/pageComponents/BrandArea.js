/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './BrandArea.css'
import { Electronics, Entertainments, MobileProducts, Truncate } from '../../Data';
import { useStateValue } from '../../Utility/StateProvider';
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import Product from './Subfolder/Product';

export default function BrandArea() {


  const [state] = useStateValue()
  const [Electproducts] = useState(Electronics)
  const [Entertproducts] = useState(Entertainments)
  const [Mobileproducts] = useState(MobileProducts)
  
  

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
                <a href="#brand-two" data-toggle="tab">
                  <img src="assets/img/brand/brand5.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#brand-three" data-toggle="tab">
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
                    Electproducts.map(product =>(
                          <Product key={product.id} {...product}/>
                        ))
                  }

                  </OwlCarousel>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade show active" id="brand-two">
                <div className="product-gallary-wrapper brand-sale">
                  <div className="product-gallary-active  sale-nav"> {/*owl-carousel owl-arrow-style */}
                  {/* product slider starts here */}
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
              <div className="tab-pane fade show active" id="brand-three">
                <div className="product-gallary-wrapper brand-sale">
                  <div className="product-gallary-active  sale-nav"> {/*owl-carousel owl-arrow-style */}
                  {/* product slider starts here */}
                    <OwlCarousel
                      className="owl-theme"
                      {...options}
                    >
                  {
                    Mobileproducts.map(product =>(
                      <Product key={product.id} {...product}/>
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
  <ModalSection product={state.singleProd}/>
</div>
    )
}

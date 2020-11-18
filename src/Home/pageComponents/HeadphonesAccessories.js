import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HeadphonesAccessories.css'
import { Electronics } from '../../Data';
import Card from './Subfolder/Card';

export default function HeadphonesAccessories() {

  const options = {
    loop: false,
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
        {Electronics.map(product =>(
          <Card key={product.id} {...product}/>
        ))}
        
      </OwlCarousel>
    </div>
  </div>
</div>

        </div>
    )
}

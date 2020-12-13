import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './ProductSlider.css'


export default function ProductSlider({data}) {

    return (
        <div className="col-lg-5 product-details-slider">


      <Carousel 
        autoPlay 
        interval="3000" 
        transitionTime="1000" 
        infiniteLoop
        showIndicators={false}
      >
        {
         
            <div className='pro-large-img'>
                <img className='main-img' src={`https:${data?.photo?.replace('demostore', 'store')}`} alt='' />
            </div>
        }
          
        </Carousel>
        </div>
    )
}

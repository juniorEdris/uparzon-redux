import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useStateValue } from '../../../Utility/StateProvider'
import './ProductSlider.css'


export default function ProductSlider() {

  const [{productView}] = useStateValue()
  
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
          productView?.shots.map(img=>(
            <div className='pro-large-img'>
                <img src={img} alt='' />
            </div>
          ))
        }
          
          </Carousel>

          <div className="enlargedImage"></div>
        </div>
    )
}

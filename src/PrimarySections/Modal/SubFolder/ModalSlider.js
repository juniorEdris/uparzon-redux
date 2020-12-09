import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'

function Slider ({product}) {
        return (
            <div className='col-lg-5 modal-slider'>
                <Carousel 
                autoPlay 
                interval="3000" 
                transitionTime="1000" 
                infiniteLoop
                showIndicators={false}
                >
                    {
                       
                    <div className='pro-large-img'>
                        <img className='modal-image' src={`https:${product?.photo?.replace('demostore', 'store')}`} alt='' />
                    </div>
    
                    }
                </Carousel>
            </div>
        )
}

export default Slider;

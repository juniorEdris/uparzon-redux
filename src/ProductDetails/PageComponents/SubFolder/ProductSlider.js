/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { useStateValue } from '../../../Utility/StateProvider'
import './ProductSlider.css'


export default function ProductSlider() {

  const [{productView}] = useStateValue()

    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)

    let slider1 = [],
    slider2 = []
    
    useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [slider1,slider2])

    

        
    const largSlider ={
        slidesToShow: 1,
			  slidesToScroll: 1,
			  fade: true,
        arrows: false,
        loop:true,
			  asNavFor: nav2
    }

    const proNav = {
      slidesToShow: 5,
			slidesToScroll: 1,
			prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-long-arrow-right"></i></button>',
			asNavFor: nav1,
			centerMode: true,
			arrows: true,
			centerPadding: 0,
			focusOnSelect: true
    } 
    return (
        <div className="col-lg-5">
            <Slider
            {...largSlider}
            ref={slider => (slider1 = slider)}
            >

        {/* 1 */}
        {
          productView?.shots.map(img=>(
            <div className="product-large-slider mb-20" >
            <div className="pro-large-img">
            <img src={img} alt={productView.name} />
              <div className="img-view" key={productView.id}>
                <a className="img-popup" href={img} target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          ))
        }
          
          
          </Slider>

          
          <Slider
          {...proNav}
          ref={slider => (slider2 = slider)}
          slidesToShow={productView ? productView?.shots.length : 6}
          swipeToSlide={true}
          focusOnSelect={true}
          >
          {/* 1 */}
          {
            productView?.shots.map(img=>(
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src={img} alt="" /></div>
          </div>
            ))
          }          
          </Slider>
          
        </div>
    )
}

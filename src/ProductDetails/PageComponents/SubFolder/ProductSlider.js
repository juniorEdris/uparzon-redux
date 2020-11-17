/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import './ProductSlider.css'


export default function ProductSlider() {

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
			slidesToScroll: 3,
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
          <div className="product-large-slider mb-20">
            <div className="pro-large-img">
            <img src="https://uparzon.com.bd/assets/img/product/product-4.jpg" alt="" />
              <div className="img-view">
                <a className="img-popup" href="https://uparzon.com.bd/assets/img/product/product-4.jpg" target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="product-large-slider mb-20">
            <div className="pro-large-img">
            <img src="https://uparzon.com.bd/assets/img/product/product-5.jpg" alt="" />
              <div className="img-view">
                <a className="img-popup" href="https://uparzon.com.bd/assets/img/product/product-5.jpg" target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="product-large-slider mb-20">
            <div className="pro-large-img">
            <img src="https://uparzon.com.bd/assets/img/product/product-6.jpg" alt="" />
              <div className="img-view">
                <a className="img-popup" href="https://uparzon.com.bd/assets/img/product/product-6.jpg" target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="product-large-slider mb-20">
            <div className="pro-large-img">
            <img src="https://uparzon.com.bd/assets/img/product/product-7.jpg" alt="" />
              <div className="img-view">
                <a className="img-popup" href="https://uparzon.com.bd/assets/img/product/product-7.jpg" target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="product-large-slider mb-20">
            <div className="pro-large-img">
            <img src="https://uparzon.com.bd/assets/img/product/product-8.jpg" alt="" />
              <div className="img-view">
                <a className="img-popup" href="https://uparzon.com.bd/assets/img/product/product-8.jpg" target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="product-large-slider mb-20">
            <div className="pro-large-img">
            <img src="https://uparzon.com.bd/assets/img/product/product-9.jpg" alt="" />
              <div className="img-view">
                <a className="img-popup" href="https://uparzon.com.bd/assets/img/product/product-9.jpg" target="_blank"><i className="fa fa-search" /></a>
              </div>
            </div>
          </div>
          </Slider>

          
          <Slider
          {...proNav}
          ref={slider => (slider2 = slider)}
          slidesToShow={6}
          swipeToSlide={true}
          focusOnSelect={true}
          >
          {/* 1 */}
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-4.jpg" alt="" /></div>
          </div>
          {/* 2 */}
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-5.jpg" alt="" /></div>
          </div>
          {/* 3 */}
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-6.jpg" alt="" /></div>
          </div>
          {/* 4 */}
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-7.jpg" alt="" /></div>
          </div>
          {/* 5 */}
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-8.jpg" alt="" /></div>
          </div>
          {/* 6 */}
          <div className="pro-nav">
            <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-9.jpg" alt="" /></div>
          </div>
          
          </Slider>
          
        </div>
    )
}

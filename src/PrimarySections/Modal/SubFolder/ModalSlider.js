import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'


export default function ModalSlider({product}) {

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
            {product?.shots.map((img) => {
                return(
            <div class="product-large-slider mb-20">
                <div class="pro-large-img">
                    <img src={img} alt="" />
                </div>
            </div>
            )})}
        </Slider>
    
        <Slider
        {...proNav}
        ref={slider => (slider2 = slider)}
        slidesToShow={product ? product?.shots.length : 6}
        swipeToSlide={true}
        focusOnSelect={true}
        >
            
            {product?.shots.map((img)=>
            {return(
                <div className="pro-nav">
                    <div className="pro-nav-thumb"><img src={img} alt="QuickView Images" title={product?.prodName} /></div>
                </div>
                )})}                                
        </Slider>
    
    </div>
    )
}

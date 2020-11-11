/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './ModalSection.css'

export default function ModalSection({product}){
    console.log("modal product",product);
    console.log("ratings length",product?.ratings.length);
    // const [shots,prodName] = product
    // console.log("product shots",shots,prodName);
    // console.log("product shots",product.map(img => img.shots));
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
            arrows: true,
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
        <div>
            {/* Quick view modal start */}
            <div className="modal fade" id="quickk_view">
            <div className="container">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                <div className="modal-body">
                <div className="row">
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
                            
                            {/* <div class="product-large-slider mb-20">
                                <div class="pro-large-img">
                                    <img src="https://uparzon.com.bd/assets/img/product/product-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="product-large-slider mb-20">
                                <div class="pro-large-img">
                                    <img src="https://uparzon.com.bd/assets/img/product/product-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="product-large-slider mb-20">
                                <div class="pro-large-img">
                                    <img src="https://uparzon.com.bd/assets/img/product/product-6.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="product-large-slider mb-20">
                                <div class="pro-large-img">
                                    <img src="https://uparzon.com.bd/assets/img/product/product-7.jpg" alt=""/>
                                </div>
                            </div>
                            <div class="product-large-slider mb-20">
                                <div class="pro-large-img">
                                    <img src="https://uparzon.com.bd/assets/img/product/product-8.jpg" alt=""/>
                                </div>
                            </div> */}
                            </Slider>
                        
                            <Slider
                            {...proNav}
                            ref={slider => (slider2 = slider)}
                            >
                                
                                <div className="pro-nav">
                                {product?.shots.map((img)=>
                                {return(
                                        <div className="pro-nav-thumb"><img src={img} alt="QuickView Images" title={product?.prodName} /></div>
                                    )})}
                                </div>
                                {/* <div className="pro-nav">
                                    <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-4.jpg" alt="" /></div>
                                </div>
                                <div className="pro-nav">
                                    <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-5.jpg" alt="" /></div>
                                </div>
                                <div className="pro-nav">
                                    <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-6.jpg" alt="" /></div>
                                </div>
                                <div className="pro-nav">
                                    <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-7.jpg" alt="" /></div>
                                </div>
                                <div className="pro-nav">
                                    <div className="pro-nav-thumb"><img src="https://uparzon.com.bd/assets/img/product/product-8.jpg" alt="" /></div>
                                </div> */}
                                
                            </Slider>
                        
                        </div>
                        <div className="col-lg-7">
                        <div className="product-details-inner">
                            <div className="product-details-contentt">
                            <div className="pro-details-name mb-10">
                            <h3>{product?.prodName || 'Product name null'}</h3>
                            </div>
                            <div className="pro-details-review mb-20">
                                <ul>
                                <li>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                </li>
                                <li><a href="#">{product?.ratings ? `${product?.ratings?.length} Reviews` : '0 Reviews'}</a></li>
                                </ul>
                            </div>
                            <div className="price-box mb-15">
                                <span className="regular-price"><span className="special-price">{`$${product?.price}`}</span></span>
                                <span className="old-price"><del>{product?.oldPrice ? `£${product.oldPrice}` : ''}</del></span>
                            </div>
                            <div className="product-detail-sort-des pb-20">
                            <p>{product?.description}</p>
                            </div>
                            <div className="pro-details-list pt-20">
                                <ul>
                                <li><span>Availability :</span>{product?.isStock ? 'In Stock' : 'Out of Stock'}</li>
                                </ul>
                            </div>
                            <div className="product-availabily-option mt-15 mb-15">
                                <h3>Available Options</h3>
                                <div className="color-optionn">
                                <h4><sup>*</sup>color</h4>
                                <ul>
                                
                                {
                                    product?.colors.map(color =>{return(
                                    <li>
                                        <a className="c-black" href="#" title="Black" style={{backgroundColor:`${color}`}} />
                                    </li>  
                                    )})
                                }
                                    
                                    {/* <li>
                                    <a className="c-blue" href="#" title="Blue" />
                                    </li>
                                    <li>
                                    <a className="c-brown" href="#" title="Brown" />
                                    </li>
                                    <li>
                                    <a className="c-gray" href="#" title="Gray" />
                                    </li>
                                    <li>
                                    <a className="c-red" href="#" title="Red" />
                                    </li> */}
                                </ul>
                                </div>
                            </div>
                            <div className="pro-quantity-box mb-30">
                                <div className="qty-boxx">
                                <label>qty :</label>
                                <input type="text" placeholder={0} />
                                <button className="btn-cart lg-btn">add to cart</button>
                                </div>
                            </div>
                            <div className="pro-social-sharing">
                                <label>share :</label>
                                <ul>
                                <li className="list-inline-item">
                                    <a href="#" className="bg-facebook" title="Facebook">
                                    <i className="fa fa-facebook" />
                                    <span>like 0</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="bg-twitter" title="Twitter">
                                    <i className="fa fa-twitter" />
                                    <span>tweet</span>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="bg-google" title="Google Plus">
                                    <i className="fa fa-google-plus" />
                                    <span>google +</span>
                                    </a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>    
                </div>
                </div>
            </div>
            </div>
            {/* Quick view modal end */}

        </div>
    )
      }
    

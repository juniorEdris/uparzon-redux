/* eslint-disable no-unused-vars */
import React,{ useEffect } from 'react'
import 'jquery-nice-select/css/nice-select.css'
import 'jquery-nice-select/js/jquery.nice-select.min'
import 'jquery-nice-select/js/jquery'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import './ShopWrapper.css'
import { useState } from 'react'
import { Electronics,Entertainments,MobileProducts, Truncate } from '../../Data'
import { useStateValue } from '../../Utility/StateProvider'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import Sidebar from './ShopSidebar'

export default function ShopWrapper() {

    useEffect(() => {
        // product view mode change js
$('.product-view-mode a').on('click', function(e){
    e.preventDefault();
    
    var shopProductWrap = $('.shop-product-wrap');
    var viewMode = $(this).data('target');
    
    $('.product-view-mode a').removeClass('active');
    $(this).addClass('active');
    shopProductWrap.removeClass('grid list column_3').addClass(viewMode);
})


}, [])

    const [state,dispatch] = useStateValue()
    const [Electproducts] = useState(Electronics)
    //quickView triggers all data in the popup
    const quickView = (id,productCata)=>{
        if(productCata === 'Electronics'){
          const singleProd = Electproducts.filter(prod => prod.id === id)
          dispatch({type:"QUICK_VIEW",payload:singleProd})
          // console.log('here is id',singleProd);
        }
      }
      const addToCart= (id,productCata)=>{
        if(productCata === 'Electronics'){
          const singleProd = Electproducts.filter(prod => prod.id === id)
          dispatch({type:"ADD_TO_CART",payload:singleProd})
        }
        // else if(productCata === 'Entertainment'){
        //   const singleProd = Entertproducts.filter(prod => prod.id === id)
        //   dispatch({type:"ADD_TO_CART",payload:singleProd})
        // }else{
        //   const singleProd = MobileProducts.filter(prod => prod.id === id)
        //   dispatch({type:"ADD_TO_CART",payload:singleProd})
        // }
      }
      const addToWishList= (id,productCata)=>{
        if(productCata === 'Electronics'){
          const singleProd = Electproducts.filter(prod => prod.id === id)
          dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
          console.log('wishcart',singleProd);
         }
        //else if(productCata === 'Entertainment'){
        //   const singleProd = Entertproducts.filter(prod => prod.id === id)
        //   dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
        // }else{
        //   const singleProd = MobileProducts.filter(prod => prod.id === id)
        //   dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
        // }
      }



    
    return (
        <div>
            
            {/* shop page main wrapper start */}
            <div className="main-wrapper pt-35">
            <div className="container-fluid">
                <div className="row">
                <Sidebar/>
                <div className="col-lg-9 order-first order-lg-last">
                    <div className="product-shop-main-wrapper mb-50">
                    <div className="shop-baner-img mb-70">
                        <Link to='/'><img src="assets/img/banner/category-image.jpg" alt="" /></Link>
                    </div>
                    <div className="shop-top-bar mb-30">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="top-bar-left">
                            <div className="product-view-mode">
                                <Link to='/' data-target="column_3"><span>3-col</span></Link>
                                <Link className="active" to="/" data-target="grid"><span>4-col</span></Link>
                                <Link to='/' data-target="list"><span>list</span></Link>
                            </div>
                            <div className="product-page">
                                <p>Showing 1 to 9 of 9 (1 Pages)</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="top-bar-right">
                            <div className="per-page">
                                <p>Show : </p>
                                <select className="nice-select item-range" name="sortby">
                                <option value="trending">10</option>
                                <option value="sales">20</option>
                                <option value="sales">30</option>
                                <option value="rating">40</option>
                                <option value="date">50</option>
                                <option value="price-asc">60</option>
                                <option value="price-asc">70</option>
                                <option value="price-asc">100</option>
                                </select>
                            </div>
                            <div className="product-short">
                                <p>Sort By : </p>
                                <select className="nice-select item-sort" name="sortby">
                                <option value="trending">Relevance</option>
                                <option value="sales">Name (A - Z)</option>
                                <option value="sales">Name (Z - A)</option>
                                <option value="rating">Price (Low &gt; High)</option>
                                <option value="date">Rating (Lowest)</option>
                                <option value="price-asc">Model (A - Z)</option>
                                <option value="price-asc">Model (Z - A)</option>
                                </select>
                            </div> 
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="shop-product-wrap grid row">
                        {Electproducts.map(data=>(
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product-item mb-30" id={data.id}>
                            <div className="product-thumb">
                            <a href="product-details.html">
                                <img src={data.img1} className="pri-img" alt={data.prodName} />
                                <img src={data.img2} className="sec-img" alt={data.prodName} />
                            </a>
                            <div className="box-label">
                                <div className="label-product label_new">
                                    <span>{data.latest ? 'new': ''}</span>
                                </div>
                                <div className="label-product label_sale">
                                    <span>{data.sale ? `-${data.sale}%` : '' }</span>
                                </div>
                            </div>
                            <div className="action-links">
                                <Link to='#' title="Wishlist" onClick={()=> addToWishList(data.id,'Electronics')}><i className="lnr lnr-heart" /></Link>
                                <Link to='#' title="Compare"><i className="lnr lnr-sync" /></Link>
                                <Link to='#' title="Quick view" onClick={()=>quickView(data.id,'Electronics')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
                            </div>
                            </div>
                            <div className="product-caption">
                            <div className="manufacture-product">
                                <p><a href="/">{data.brand}</a></p>
                            </div>
                            <div className="product-name">
                                <h4><a href="product-details.html" title={data.prodName}>{Truncate(data.prodName,25)}</a></h4>
                            </div>
                            <div className="ratings">
                                <span className="yellow"><i className="lnr lnr-star" /></span>
                                <span className="yellow"><i className="lnr lnr-star" /></span>
                                <span className="yellow"><i className="lnr lnr-star" /></span>
                                <span className="yellow"><i className="lnr lnr-star" /></span>
                                <span><i className="lnr lnr-star" /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price"><span className={` ${data.special && 'special-price'}`}>£{data.price}</span></span>
                                <span className="old-price"><del>{data.oldPrice ? `£${data.oldPrice}` : ''}</del></span>
                            </div>
                            <button className="btn-cart" type="button" onClick={()=> addToCart(data.id,'Electronics')}>add to cart</button>
                            </div>
                        </div> {/* end single grid item */}
                        <div className="sinrato-list-item mb-30" id={data.id}>
                            <div className="sinrato-thumb">
                            <a href="product-details.html">
                                <img src={data.img1} className="pri-img" alt={data.prodName} />
                                <img src={data.img2} className="sec-img" alt={data.prodName} />
                            </a>
                            <div className="box-label">
                                <div className="label-product label_new">
                                    <span>{data.latest ? 'new': ''}</span>
                                </div>
                                <div className="label-product label_sale">
                                    <span>{data.sale ? `-${data.sale}%` : '' }</span>
                                </div>
                            </div>
                            </div>
                            <div className="sinrato-list-item-content">
                            <div className="manufacture-product">
                                <span><Link to='/'>{data.brand}</Link></span>
                            </div>
                            <div className="sinrato-product-name">
                                <h4><a href="product-details.html" title={data.prodName}>{Truncate(data.prodName)}</a></h4>
                            </div>
                            <div className="sinrato-ratings mb-15">
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                            </div>
                            <div className="sinrato-product-des">
                                <p> {data.description || 'no description'}</p>
                            </div>
                            </div>
                            <div className="sinrato-box-action">
                            <div className="price-box">
                                <span className="regular-price"><span className={` ${data.special && 'special-price'}`}>£{data.price}</span></span>
                                <span className="old-price"><del>{data.oldPrice ? `£${data.oldPrice}` : ''}</del></span>
                            </div>
                            <button className="btn-cart" type="button" onClick={()=> addToCart(data.id,'Electronics')}>add to cart</button>
                            <div className="action-links sinrat-list-icon">
                                <Link to='#' title="Wishlist" onClick={()=> addToWishList(data.id,'Electronics')}><i className="lnr lnr-heart" /></Link>
                                <Link to='#' title="Compare"><i className="lnr lnr-sync" /></Link>
                                <Link to='#' title="Quick view" onClick={()=>quickView(data.id,'Electronics')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
                            </div>
                            </div>
                        </div> {/* end single list item */}
                        
                        </div>
                        ))}
                        
                    </div>
                    <div className="paginatoin-area style-2 pt-35 pb-20">
                        <div className="row">
                        <div className="col-sm-6">
                            <div className="pagination-area">
                            <p>Showing 1 to 9 of 9 (1 Pages)</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <ul className="pagination-box pagination-style-2">
                            <li><a className="Previous" href="/">Previous</a>
                            </li>
                            <li className="active"><Link to='/'>1</Link></li>
                            <li><Link to='/'>2</Link></li>
                            <li><Link to='/'>3</Link></li>
                            <li>
                                <a className="Next" href="/"> Next </a>
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
            {/* shop page main wrapper end */}

            <ModalSection product={state.singleProd}/>
        </div>
    )
}

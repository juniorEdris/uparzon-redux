// Our Product,Hot Collection,Brand Sale,Shop(short-cirtuit evaluation to show grid and list view) product component

import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import {  Truncate } from '../../../Data';
import { useStateValue } from '../../../Utility/StateProvider';
import $ from 'jquery'

export default function Product({id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings,description,isGrid,isList}) {
  const [{wishList,basket,compareList},dispatch] = useStateValue()

  useEffect(() => {
    $('.action-links a').on('click',function( event ) {
      event.preventDefault();
    });
    //Add every item to localStorage on every item click
    localStorage.setItem('Wish List',JSON.stringify(wishList))
    localStorage.setItem('Cart List',JSON.stringify(basket))
    localStorage.setItem('Compare List',JSON.stringify(compareList))
    
  }, [wishList,basket,compareList])
  
  const quickView = ()=>{
      dispatch({type:"QUICK_VIEW",payload:{
        id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings,description
      }})
  }
  const ProductDetail = () => {
    dispatch({type:"PRODUCT_VIEW",payload:{
      id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings,description
    }})
  }
  
  const addToCompare = () => {
    if(compareList.length === 3 ){
      return  
    }
      dispatch({type:"COMPARE_PRODUCTS",payload:{
          id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings,description
        }})

  }

  const addToCart= ()=>{
      // addToCart dispatch 
      dispatch({type:"ADD_TO_CART",payload:{
              id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings,description
            },count:1})
      }
  const addToWishList= ()=>{
      dispatch({type:"ADD_TO_WISH_LIST",payload:{
        id,brand,name,oldPrice,price,sale,latest,special,img1,img2,categories,shots,colors,ratings,description
      }})
  }
    return (
        <div>


          {
            isList ?  
            <div className="sinrato-list-item mb-30" id={id}>
            <div className="sinrato-thumb">
            <Link to="/productdetails" onClick={()=>ProductDetail()}>
                <img  src={img1} className="pri-img" alt={name} />
                <img  src={img2} className="sec-img" alt={name} />
            </Link>
            <div className="box-label">
                <div className="label-product label_new">
                    <span>{latest ? 'new': ''}</span>
                </div>
                <div className="label-product label_sale">
                    <span>{sale ? `-${sale}%` : '' }</span>
                </div>
            </div>
            </div>
            <div className="sinrato-list-item-content">
            <div className="manufacture-product">
                <span><Link to='/'>{brand}</Link></span>
            </div>
            <div className="sinrato-product-name">
                <h4><a href="product-details.html" title={name}>{Truncate(name)}</a></h4>
            </div>
            <div className="sinrato-ratings mb-15">
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
                <span><i className="fa fa-star" /></span>
            </div>
            <div className="sinrato-product-des">
                <p> {description || 'no description'}</p>
            </div>
            </div>
            <div className="sinrato-box-action">
            <div className="price-box">
                <span className="regular-price"><span className={` ${special && 'special-price'}`}>£{price}</span></span>
                <span className="old-price"><del>{oldPrice ? `£${oldPrice}` : ''}</del></span>
            </div>
            <button className="btn-cart" type="button" onClick={()=> addToCart()} data-target="#cart_modal" data-toggle="modal">add to cart</button>
            <div className="action-links sinrat-list-icon">
                <Link to='#' title="Wishlist" onClick={()=> addToWishList()}><i className="lnr lnr-heart" /></Link>
                <Link to='#' title="Compare" onClick={()=>addToCompare()}><i className="lnr lnr-sync" /></Link>
                <Link to='#' title="Quick view" onClick={()=>quickView()} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
            </div>
            </div>
        </div>
            :
            <div className={`product-item ${isGrid && 'mb-30'}`} id={id}>
                  <div className="product-thumb">
                    <Link to="/productdetails" onClick={()=>ProductDetail()}>
                      <img src={img1} className="pri-img" alt={name} />
                      <img src={img2} className="sec-img" alt={name} />
                    </Link>
                    
                    <div className="box-label">
                      <div className="label-product label_new">
                        <span>{latest ? 'new': ''}</span>
                      </div>
                      <div className="label-product label_sale">
                        <span>{sale ? `-${sale}%` : '' }</span>
                      </div>
                    </div>
                    <div className="action-links">
                      <Link to="#" title="Wishlist" onClick={()=> addToWishList()}><i className="lnr lnr-heart" /></Link>
                      <Link to="#" title="Compare" onClick={()=>addToCompare()}><i className="lnr lnr-sync" /></Link>
                      <Link to="#" title="Quick view" onClick={()=>quickView()} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></Link>
                    </div> 
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><Link to="/">{brand}</Link></p>
                    </div>
                    <div className="product-name">
                      <h4><Link to="/" title={name}>{Truncate(name,25) }</Link></h4>
                    </div>
                    <div className="ratings">
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span className="purple"><i className="lnr lnr-star" /></span>
                      <span><i className="lnr lnr-star" /></span>
                    </div>
                    <div className="price-box">
                      <span className="regular-price"><span className={` ${special && 'special-price'}`}>£{price}</span></span>
                      <span className="old-price"><del>{oldPrice ? `£${oldPrice}` : ''}</del></span>
                    </div>
                    <button className="btn-cart" onClick={(e)=> addToCart()} type="button">add to cart</button>
                  </div>
                
                </div>
          }

        </div>
    )
}

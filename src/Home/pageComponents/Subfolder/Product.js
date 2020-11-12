/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import { AllProduct, Electronics, Entertainments, MobileProducts, Truncate } from '../../../Data';
import ModalSection from '../../../PrimarySections/Modal/ModalSection';
import { useStateValue } from '../../../Utility/StateProvider';
// import { useStateValue } from '../../../Utility/StateProvider'

export default function Product({id,brand,prodName,oldPrice,price,sale,latest,special,img1,img2,categories}) {
  
  
  console.log('props',categories);
  
  
  const [dispatch] = useStateValue()
  const quickView = (id,productCata)=>{
    console.log('quickview',id,productCata);
    if(productCata === 'Electronics'){
      const singleProd = AllProduct.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      console.log('here is id',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = AllProduct.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      console.log('here is id',singleProd);
    }else if(productCata === 'Mobile'){
      const singleProd = AllProduct.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      console.log('here is id',singleProd);
    }
  }

  const addToCart= ()=>{
    
      dispatch({
      type:"ADD_TO_CART",
      payload:{
        id,
        prodName,
        price,
        img1,
      }
    })
  }
      }
  const addToWishList= ()=>{
      dispatch({type:"ADD_TO_WISH_LIST",payload:{
        id,
        brand,
        prodName,
        price,
        img1
      }})
      console.log('wishcart',prodName)
  }
    return (
        <div>
            <div className="product-item" id={id}>
                  <div className="product-thumb">
                    <Link to="/">
                      <img src={img1} className="pri-img" alt={prodName} />
                      <img src={img2} className="sec-img" alt={prodName} />
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
                      <a href="#" title="Wishlist" onClick={()=> addToWishList(id,brand,prodName,price,img1)}><i className="lnr lnr-heart" /></a>
                      <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
                      <a href="#" title="Quick view" onClick={()=>quickView(id,categories)} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
                    </div>
                  </div>
                  <div className="product-caption">
                    <div className="manufacture-product">
                      <p><a href="shop-grid-left-sidebar.html">{brand}</a></p>
                    </div>
                    <div className="product-name">
                      <h4><a href="product-details.html" title={prodName}>{Truncate(prodName,25) }</a></h4>
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
                    <button className="btn-cart" onClick={()=> addToCart()} type="button">add to cart</button>
                  </div>
                </div>{/* </div> end single item*/}

        </div>
    )
}

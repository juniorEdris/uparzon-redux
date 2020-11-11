/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { Electronics, Entertainments, MobileProducts, Truncate } from '../../Data'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import { useStateValue } from '../../Utility/StateProvider'

export default function HotCollection() {

  const [state,dispatch] = useStateValue()
  const [Electproducts] = useState(Electronics)
  const [Entertproducts] = useState(Entertainments)
  const [Mobileproducts] = useState(MobileProducts)
  
  

  
  const quickView = (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }else if(productCata === 'Mobile'){
      const singleProd = Mobileproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }
  }

  const addToCart= (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }else{
      const singleProd = MobileProducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }
  }
  const addToWishList= (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
      console.log('wishcart',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
    }else{
      const singleProd = MobileProducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
    }
  }

    return (
<div className="home-module-three hm-1 fix pb-40">
  <div className="container-fluid">
    <div className="section-title module-three">
      <h3><span>Hot</span> Collection</h3>
      <div className="boxx-tab">
        <ul className="nav my-tab">
          <li>
            <a className="active" data-toggle="tab" href="#module-one">Featured Products</a>
          </li>
          <li>
            <a data-toggle="tab" href="#module-two">On sale Products</a>
          </li>
          <li>
            <a data-toggle="tab" href="#module-three">Best sellers Products</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="tab-content">
      <div className="tab-pane fade show active" id="module-one">
        <div className="module-four-wrapper custom-seven-column">
          {/* module-one starts here */}

          <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/img-module1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}
          {
      Electproducts.map(data =>(

          <div className="col mb-30">
            <div className="product-item" id={data.id}>
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
                  <a href="#" title="Wishlist" onClick={()=>addToWishList(data.id,'Electronics')}><i className="lnr lnr-heart" /></a>
                  <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
                  <a href="#" title="Quick view" onClick={()=>quickView(data.id,'Electronics')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
                </div>
              </div>
              <div className="product-caption">
                <div className="manufacture-product">
                  <p><a href="shop-grid-left-sidebar.html">{data.brand}</a></p>
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
                <button className="btn-cart" type="button" onClick={()=>addToCart(data.id,'Electronics')}>add to cart</button>
              </div>
            </div>
          </div> /* single item end */
              ))
          }
      


        </div>
      </div>
      {/* module-two starts here */}
      <div className="tab-pane" id="module-two">
        <div className="module-four-wrapper custom-seven-column">
        <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/img-module1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}
          {
            Entertproducts.map(data=>(
              <div className="col mb-30">
            <div className="product-item" id={data.id}>
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
                  <a href="#" title="Wishlist" onClick={()=>addToWishList(data.id,'Electronics')}><i className="lnr lnr-heart" /></a>
                  <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
                  <a href="#" title="Quick view" onClick={()=>quickView(data.id,'Entertainment')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
                </div>
              </div>
              <div className="product-caption">
                <div className="manufacture-product">
                  <p><a href="shop-grid-left-sidebar.html">{data.brand}</a></p>
                </div>
                <div className="product-name">
                  <h4><a href="product-details.html" title={data.prodName}>{Truncate(data.prodName,25) }</a></h4>
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
                <button className="btn-cart" type="button" onClick={()=>addToCart(data.id,'Electronics')}>add to cart</button>
              </div>
            </div>
          </div> /* single item end */
            ))
          }
        </div>
      </div>

      {/* module-three id starts here */}
      <div className="tab-pane" id="module-three">
  <div className="module-four-wrapper custom-seven-column">

          <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/img-module1.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}

          {
            Mobileproducts.map(data =>(
              <div className="col mb-30">
            <div className="product-item" id={data.id}>
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
                  <a href="#" title="Wishlist" onClick={()=>addToWishList(data.id,'Electronics')}><i className="lnr lnr-heart" /></a>
                  <a href="#" title="Compare"><i className="lnr lnr-sync" /></a>
                  <a href="#" title="Quick view" onClick={()=>quickView(data.id,'Electronics')} data-target="#quickk_view" data-toggle="modal"><i className="lnr lnr-magnifier" /></a>
                </div>
              </div>
              <div className="product-caption">
                <div className="manufacture-product">
                  <p><a href="shop-grid-left-sidebar.html">{data.brand}</a></p>
                </div>
                <div className="product-name" title={data.prodName}>
                  <h4><a href="product-details.html">{Truncate(data.prodName,25)}</a></h4>
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
                <button className="btn-cart" type="button" onClick={()=>addToCart(data.id,'Electronics')}>add to cart</button>
              </div>
            </div>
          </div> /* single item end */
            ))
          }
          
          
    

  </div>
</div>

    </div>
  </div>

  <ModalSection product={state.singleProd}/>
</div>

    )
}

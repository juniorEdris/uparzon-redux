/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { AllProduct} from '../../Data'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import CartModal from '../../ProductCart/CartModal/CartModal'
import { useStateValue } from '../../Utility/StateProvider'
import Product from './Subfolder/Product'

export default function HotCollection() {



  const Electronics = AllProduct.filter(prod => prod.categories === 'Electronics')
  const Entertainments = AllProduct.filter(prod => prod.categories === 'Entertainment')
  const MobileProducts = AllProduct.filter(prod => prod.categories === 'Mobile')
  
  const [state] = useStateValue()
  const [Electproducts] = useState(Electronics)
  const [Entertproducts] = useState(Entertainments)
  const [Mobileproducts] = useState(MobileProducts)

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
      Electproducts.map(product =>(
          <div className="col mb-30">
            <Product key={product.id} {...product}/>
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
            Entertproducts.map(product=>(
              <div className="col mb-30">
                <Product key={product.id} {...product}/>
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
            Mobileproducts.map(product =>(
              <div className="col mb-30">
                <Product key={product.id} {...product}/>
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

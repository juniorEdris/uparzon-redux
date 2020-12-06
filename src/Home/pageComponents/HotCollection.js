/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FectData } from '../../PrimarySections/Connections/Axios'
import ModalSection from '../../PrimarySections/Modal/ModalSection'
import { useStateValue } from '../../Utility/StateProvider'
import Product from './Subfolder/Product'

export default function HotCollection() {
  
  const [state] = useStateValue()
  useEffect(() => {
    FectData('https://demostore.uparzon.com/api/uparzonapp/get_products?category_id=32&api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699')
      .then(res=>{
        setData(res.data)
      })

    }, [])
  const [data,setData] = useState([])

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
      data.map(product =>(
          <div className="col mb-30">
              <Product key={product.id} {...product}/>
          </div> /* single item end */
              ))
          }
      


        </div>
      </div>
      {/* module-two starts here */}
      <div className="tab-pane fade" id="module-two">
        <div className="module-four-wrapper custom-seven-column">
        <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/product-3.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}
          {
            data.map(product=>(
              <div className="col mb-30">

                  <Product key={product.id} {...product}/>
              </div> /* single item end */
            ))
          }
        </div>
      </div>

      {/* module-three id starts here */}
      <div className="tab-pane fade" id="module-three">
  <div className="module-four-wrapper custom-seven-column">

          <div className="col col-2 mb-30">
            <div className="product-item">
              <div className="product-thumb">
                <a href="shop-grid-left-sidebar.html">
                  <img src="https://uparzon.com.bd/assets/img/product/product-4.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> {/* single item end */}

          {
            data.map(product =>(
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

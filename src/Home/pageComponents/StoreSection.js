import React,{useState,useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FectData } from '../../PrimarySections/Connections/Axios'
import { Request } from '../../PrimarySections/Connections/APILink'
import { Truncate } from '../../Data'
import './StoreSection.css'
import { Link } from 'react-router-dom';

export default function StoreSection() {

    useEffect(() => {
        FectData(Request.HomeStores)
          .then(res=>{
            setShop(res.data)
            setLink(res.links)
            setMeta(res.meta)
          })
    
        }, [])
      const [shop,setShop] = useState([])
      const [link,setLink] = useState([])
      const [meta,setMeta] = useState([])
      const options = {
        loop: false,
        margin:10,
        nav:true,
        navText:['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            700:{
                items:2,
            },
            1000:{
                items:3,
            },
            
        },
    }
    return (
        <>
<div className="featured-categories-area">
        <div className="container-fluid">
          <div className="section-title hm-12">
            <h3><span>shop</span> by stores</h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="featured-cat-active "> 
                {/* slider starts here */}
                <OwlCarousel
                  className="owl-theme"
                  {...options}
                >
                {shop.map(store=>(
                        <div className="pro-layout-two-single-item" key={store.shop_id}>
                        <div className="product-layout-two mb-30">
                            <div className="product-layout-info">
                            <h4 className="pro-name store-name" title={store.shop_name}><Link to="/">{Truncate(store.shop_name,25)}</Link></h4>
                            <p className="total-items store-address" title={store.shop_address}> {Truncate(store.shop_address,20)} </p>
                            <Link to="/shop" className="shop-btn">goto shop</Link>
                            </div>
                            <div className="product-layout-thumb store-thumb">
                            <Link to="/shop"><img src={`https:${store.logo.replace('demostore', 'store')}`} alt={store.shop_name} /></Link>
                            </div>
                        </div>
                        </div>
                    
                ))}    
                <div className="pro-layout-two-single-item " >
                        <div className="product-layout-two mb-30 more-btn">
                            <div className="product-layout-info" style={{margin:'0 auto'}}>
                                <h4 className="pro-name button"><Link to='/shop-list'>See More</Link></h4>
                            </div>
                        </div>
                        </div>
                </OwlCarousel>

              </div>
            </div>
          </div>
        </div>
      </div>         </>
    )
}

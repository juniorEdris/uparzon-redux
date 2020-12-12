import React,{useState,useEffect} from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FetchData } from '../../PrimarySections/Connections/Axios'
import { Request } from '../../PrimarySections/Connections/APILink'
import { Truncate } from '../../Data'
import './StoreSection.css'
import { Link } from 'react-router-dom';
import { StoreLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';

export default function StoreSection() {

    useEffect(() => {
        FetchData(Request.HomeStores)
          .then(res=>{
            setShop(res.data)
            setLink(res.links)
            setMeta(res.meta)
            setReady(true)
          })
    
        }, [])
      const [shop,setShop] = useState([])
      const [link,setLink] = useState([])
      const [meta,setMeta] = useState([])
      const [ready,setReady] = useState(false)

    return (
        <>
<div className="featured-categories-area">
        <div className="container-fluid">
          <div className="section-title hm-12">
            <h3><span>shop</span> by stores</h3>
          </div>
          <div className="row">
              <div className="col-12">
                {
                  !ready ?
                  <StoreLoader/>:
                  <div className=" d-flex flex-wrap justify-content-center"> 
                  {shop.map(store=>(
                        <Link to={`/shop/${store.shop_id}`}>
                          <div className="store-card mb-3 mr-3" key={store.shop_id}>
                                <div className="store-thumb">
                                <img src={`https:${store.logo.replace('demostore', 'store')}`} alt={store.shop_name} />
                                </div>

                                <div className="store-info">
                                <h4 className="store-name mt-2 mb-2" title={store.shop_name}><Link to="/shop">{Truncate(store.shop_name,15)}</Link></h4>
                                </div>  
                          </div>
                        </Link>))} 
                        <div className="store-more-btn">
                          <div className="store-info more-store">
                              <p className="more-store-name mb-3">Browse 1000+ Shops</p>
                              <Link to='/shop-list' className=''>See More</Link>
                          </div>
                        </div>  
                </div>}
              </div>
          </div>
        </div>
      </div>         </>
    )
}

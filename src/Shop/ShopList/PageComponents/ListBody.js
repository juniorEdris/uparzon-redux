import React,{useState,useEffect} from 'react'
import './ShopListBody.css'
import { Link } from 'react-router-dom'
import { FetchData } from '../../../PrimarySections/Connections/Axios'
import { Request } from '../../../PrimarySections/Connections/APILink'
import { Truncate } from '../../../Data'
import { StoreLoader } from '../../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder'
import { useStateValue } from '../../../Utility/StateProvider'

export default function ListBody() {
    const [,dispatch] = useStateValue()
    const VendorDetails=(id)=>{
        dispatch({type:'VENDOR_PAGE',payload:id})
    }
    useEffect(() => {
        FetchData(Request.StorePage1)
          .then(res=>{
            setData(res.data)
            setReady(true)
          })
    }, [])
    const [data, setData] = useState([])
    const [ready, setReady] = useState(false)
    return (
        <>
        {!ready ?
        <div className="container p4">
            <StoreLoader/>
        </div>
        :
        <div className='container'>
            <div className="d-flex flex-wrap justify-content-center p-4">
            {
                data.map(store=>(
            <Link to={`/shop/${store.shop_id}`}>
                <div className="shop__card m-2" title={store.shop_name}>
                    <div className='shop__card__img'>
                        <img src={`https:${store.logo.replace('demostore','store')}`} onClick={()=>VendorDetails(store.shop_id)} alt={store.shop_name}/>
                    </div>
                    <div className='shop__card__details'>
                        <p className='shop__name' >{Truncate(store.shop_name,15)}</p>
                    </div>
                </div>
            </Link>
                ))
            }
            </div>
        </div>}
        </>
    )
}

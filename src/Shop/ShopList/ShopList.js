import React,{useEffect,useState} from 'react'
import { FectData } from '../../PrimarySections/Connections/Axios'
import { Request } from '../../PrimarySections/Connections/APILink'
import './ShopList.css'

export default function ShopList() {
    useEffect(() => {
        FectData(Request.StorePage1)
          .then(res=>{
            setData(res.data)
          })
    }, [])
    const [data, setData] = useState([])
    return (
        <div className='container'>
            <h1>Shop List</h1>
            <div className="d-flex flex-wrap p-4">
            {
                data.map(store=>(
                <div className="shop__card mb-2 p-2 m-1">
                    <div className='shop__card__img'>
                        <img src={`https:${store.logo.replace('demostore','store')}`} alt={store.shop_name}/>
                    </div>
                    <div>
                        <p>{store.shop_name}</p>
                    </div>
                    <div>
                        <p>{store.shop_address}</p>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    )
}

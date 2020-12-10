import React,{useEffect, useState} from 'react'
import Product from './subFolder/Product'
import { FectData } from '../../PrimarySections/Connections/Axios'
import { Request } from '../../PrimarySections/Connections/APILink'
import { ProductLoader } from '../../PrimarySections/ReactPlaceHolder/ReactPlaceHolder';



export default function VendorProducts() {
    const [data,setData]=useState([])
    const [ready,setReady]=useState(false)
    useEffect(() => {
        FectData(Request.VendorProducts)
        .then(res=>{
        setData(res.data)
        setReady(true)
        })
    }, [])

    return (
        <>
        {!ready ?
            <ProductLoader/>
        :
        <div className="shop-product-wrap column_3 row">
            {
                data.map(data=>(
                    <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
                    {/* grid view starts here */}
                    <Product isGrid={true} key={data.id} {...data} />
                    {/* List view starts here */}
                    <Product key={data.id} {...data} isList={true}/>
                    </div>))
            }
        </div>}
        </>
    )
}

import React,{useEffect, useState} from 'react'
import Product from '../../Home/pageComponents/Subfolder/Product'
import { FectData } from '../../PrimarySections/Connections/Axios'

export default function VendorProducts() {
    const [data,setData]=useState([])
    useEffect(() => {
        FectData('https://demostore.uparzon.com/api/uparzonapp/get_products?category_id=32&api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699')
        .then(res=>{
        setData(res.data)
        })
    }, [])

    return (
        <div className="shop-product-wrap column_3 row">
        {data.map(data=>(
        <div className="col-lg-3 col-md-4 col-sm-6" key={data.id}>
            {/* grid view starts here */}
            <Product isGrid={true} key={data.id} {...data} />
            {/* List view starts here */}
            <Product key={data.id} {...data} isList={true}/>
        </div>
        ))}
    </div>
    )
}

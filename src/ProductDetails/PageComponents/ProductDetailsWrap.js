import React,{useEffect,useState} from 'react'
import {  ProductDetails } from '../../PrimarySections/Connections/Axios'
import {Request} from '../../PrimarySections/Connections/APILink'
import Details from './SubFolder/Details'
import Slider from './SubFolder/ProductSlider'
import { useStateValue } from '../../Utility/StateProvider'

export default function ProductDetailsWrap() {
  const [{productView}] = useStateValue()
  console.log('view id',productView);
  useEffect(() => {
    ProductDetails(Request.ProductDetails,productView)
    .then(res=>setData(res.data))
    localStorage.setItem('Product Id', JSON.stringify(productView))
  }, [productView])

  const [data, setData] = useState()
  console.log('details',data);
    return (
        <div className="product-details-main-wrapper pb-50">
  <div className="container-fluid">
    <div className="row">
        <Slider data={data}/>
        <Details data={data}/>
    </div>
  </div>
</div>

    )
}

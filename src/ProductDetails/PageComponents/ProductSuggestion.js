/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Product from '../../Home/pageComponents/Subfolder/Product'
import './ProductSuggestion.css'
import { useStateValue } from '../../Utility/StateProvider';
import ModalSection from '../../PrimarySections/Modal/ModalSection';
import { FectData } from '../../PrimarySections/Connections/Axios';

export default function ProductSuggestion() {
    const [{quickView}] = useStateValue()
    useEffect(() => {
      FectData('https://demostore.uparzon.com/api/uparzonapp/get_products?category_id=32&api_key=4e38d8be3269aa17280d0468b89caa4c7d39a699')
        .then(res=>{
          setData(res.data)
        })
  
      }, [])
    const [data,setData] = useState([])

    const options = {
        loop: true,
        margin:10,
        nav:true,
        navText:['<i class="lnr lnr-arrow-left"></i>','<i class="lnr lnr-arrow-right"></i>'],
        dots:false,
        responsive:{
            0:{
                items:2,
                nav:false,
            },
            700:{
              items:3,
              nav:true
            },
            1000:{
                items:5,
            },
            1200:{
                items:6
            },
            
        },
    }
    return (
    <>
        <div className="related-product-area mb-40">
  <div className="container-fluid">
    <div className="section-title">
      <h3><span>Related</span> product </h3>
    </div>
    <div className="flash-sale-active4">
    <OwlCarousel
              className="owl-theme"
              {...options}
            >
          {
              data.map(product =>(
          <div className="product-item mb-30">
                <Product key={product.id} {...product}/>
          </div>
            ))  
          }
          </OwlCarousel>
    </div>
  </div>
</div>
<ModalSection product={quickView}/>
</>
    )
}

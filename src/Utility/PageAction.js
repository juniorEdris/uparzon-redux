import {useState} from 'react'
import { Electronics, Entertainments, MobileProducts, } from '../Data'
import { useStateValue } from './StateProvider'

export const QuickShow = () => {
    const [dispatch] = useStateValue()
    const [Electproducts] = useState(Electronics)
    const [Entertproducts] = useState(Entertainments)
    const [Mobileproducts] = useState(MobileProducts)
  
    //   onClick={()=>quickView(data.id,'Electronics')}
    //   onClick={()=>addToCart(data.id,'Electronics')}
    //   onClick={()=>addToWishList(data.id,'Electronics')}
    
  
  const quickView = (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }else if(productCata === 'Mobile'){
      const singleProd = Mobileproducts.filter(prod => prod.id === id)
      dispatch({type:"QUICK_VIEW",payload:singleProd})
      // console.log('here is id',singleProd);
    }
  }

  const addToCart= (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }else{
      const singleProd = MobileProducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_CART",payload:singleProd})
    }
  }
  const addToWishList= (id,productCata)=>{
    if(productCata === 'Electronics'){
      const singleProd = Electproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
      console.log('wishcart',singleProd);
    }else if(productCata === 'Entertainment'){
      const singleProd = Entertproducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
    }else{
      const singleProd = MobileProducts.filter(prod => prod.id === id)
      dispatch({type:"ADD_TO_WISH_LIST",payload:singleProd})
    }
  }

  return {quickView,addToCart,addToWishList}
}



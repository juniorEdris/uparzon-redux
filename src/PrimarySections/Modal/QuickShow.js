// import React from 'react'
// import ModalSection from './ModalSection'

// export const QuickShow = (id,productCata) => {
//     const [state,dispatch] = useStateValue()
//     const [Electproducts] = useState(Electronics)
//     const [Entertproducts] = useState(Entertainments)
//     const [Mobileproducts] = useState(MobileProducts)
  
  

  
//   const quickView = (id,productCata)=>{
//     if(productCata === 'Electronics'){
//       const singleProd = Electproducts.filter(prod => prod.id === id)
//       dispatch({type:"QUICK_VIEW",payload:singleProd})
//       // console.log('here is id',singleProd);
//     }else if(productCata === 'Entertainment'){
//       const singleProd = Entertproducts.filter(prod => prod.id === id)
//       dispatch({type:"QUICK_VIEW",payload:singleProd})
//       // console.log('here is id',singleProd);
//     }else if(productCata === 'Mobile'){
//       const singleProd = Mobileproducts.filter(prod => prod.id === id)
//       dispatch({type:"QUICK_VIEW",payload:singleProd})
//       // console.log('here is id',singleProd);
//     }
//   }
 
//     return (
//         <div>
//          <ModalSection product={state.singleProd}/>
//         </div>
//     )
// }


export const initialState = {
  newCartProd:[],
  basket:localStorage.getItem('Cart List') ? JSON.parse(localStorage.getItem('Cart List')) :[],
  wishList:localStorage.getItem('Wish List') ? JSON.parse(localStorage.getItem('Wish List')) :[],
  compareList:localStorage.getItem('Compare List') ? JSON.parse(localStorage.getItem('Compare List')) :[],
  user:false
}

  export default function reducer (state,action){
      switch(action.type){
          case 'QUICK_VIEW' :
            const singleItem = action.payload
            return {
            ...state,
            quickView:singleItem,
            }
            case 'ADD_TO_CART': 
            console.log('countAction',action.count);
              return{
                ...state,
                basket:[...state.basket,action.payload],
                count:action.count
              }
            // case 'NEW_TO_CART': 
            //   return{
            //     ...state,
            //     newCartProd:action.payload
            //   }
            case 'COMPARE_PRODUCTS':
              const  compareItem = action.payload 
              return{
                ...state,
                compareList:[...state.compareList,compareItem]
              }
            // case 'COMPARE_PRODUCT_ADD':
            //   const  newcompareItem = action.payload 
            //   console.log('4th Compare Item',newcompareItem);
            //   return{
            //     ...state,
            //     compareList:[...state.compareList].push(newcompareItem)
            //   }
            case 'ADD_TO_WISH_LIST':
              const  wishItem = action.payload 
              return{
                ...state,
                wishList:[...state.wishList,wishItem]
              }
            case 'PRODUCT_VIEW':
              const  product = action.payload 
              return{
                ...state,
                productView:product
              }
            // case 'DELETE_FROM_CART':
            //   const  delwishItem = action.payload 
            //   return{
            //     ...state,
            //     wishList:[...state.wishList,delwishItem]
            //   }
              default:
                return {...state}
              }
            }


            // Total Amount function 
            export const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price + amount,0)
            
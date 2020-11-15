export const initialState = {
    product:[],
    basket:[],
    wishList:[],
    user:1
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
            console.log('cart item',action.payload);
              return{
                ...state,
                basket:[...state.basket,action.payload]
              }
            case 'ADD_TO_WISH_LIST':
              const  wishItem = action.payload 
              return{
                ...state,
                wishList:[...state.wishList,wishItem]
              }
              default:
                return {...state}
              }
            }


            // Total Amount function 
            export const getSubTotal = (basket) => basket?.reduce((amount, item) => item.price + amount,0)
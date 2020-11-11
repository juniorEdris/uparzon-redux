export const initialState = {
    product:[],
    basket:[],
    wishList:[],
  }
  
  export default function reducer (state,action){
      switch(action.type){
          case 'QUICK_VIEW' :
            const singleItem = action.payload
            // console.log('payload',singleItem);
            return {
            ...state,
            singleProd:singleItem[0],
            }
            case 'ADD_TO_CART':
              const basketItem = action.payload 
              console.log('Basket Item',basketItem);
              return{
                ...state,
                basket:[...state.basket,basketItem]
              }
            case 'ADD_TO_WISH_LIST':
              const  wishItem = action.payload 
              console.log('Wish Item',wishItem);
              return{
                ...state,
                wishList:[...state.wishList,wishItem]
              }
              default:
                return {...state}
              }
            }
export const initialState = {
    product:[],
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
      default:
          return {...state}
  }
}
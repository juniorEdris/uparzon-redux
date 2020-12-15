
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../Redux/Types';

const initalState ={
    loading:false,
    items:[],
    error:'',
};

 export const ProductReducer =(state=initalState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS:
            console.log(action.payload);
            return{    
                ...state,
                loading:true
            }
        case FETCH_PRODUCTS_SUCCESS:
            console.log(action.payload);
            return{    
                ...state,
                loading:false,
                items:action.payload,
                error:'',
            }
        case FETCH_PRODUCTS_ERROR:
            console.log(action.payload);
            return{    
                ...state,
                loading:false,
                items:[],
                error:action.payload,
            }
            default:
                return state
    }
}
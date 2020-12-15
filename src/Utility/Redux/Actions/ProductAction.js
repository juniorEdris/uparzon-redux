import Axios from 'axios';
import {Request} from '../../../PrimarySections/Connections/APILink'
import { FETCH_PRODUCTS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../Types';


export const fetchOurProdRequest=()=>{
    return{
        type: FETCH_PRODUCTS,
    }
}
export const fetchOurProdSuccess=(user)=>{
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        payload:user
    }
}
export const fetchOurProdError=(err)=>{
    return{
        type: FETCH_PRODUCTS_ERROR,
        payload:err
    }
}

export const FetchHomeProducts =()=>async (dispatch)=>{
    dispatch(fetchOurProdRequest())
    await Axios.get(Request.AllProducts)
                    .then(res=>{
                        const products = res.data.data
                        console.log('action',products);
                        dispatch(fetchOurProdSuccess(products))
                    })
                    .catch(err=>{
                        const error = err.message
                        dispatch(fetchOurProdError(error))
                    });
    console.log('calling');

}
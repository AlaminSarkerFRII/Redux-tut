
import { ADD_TO_CART } from "../Constans"

export const addToCart =(data)=>{
    return {
        type:'ADD_TO_CART',
        data: data,
    }
}

// remove cart

/* const removeToCart =(data)=>{
    return {
        type:'REMOVE_TO_CART',
        data: data,
    }
} */
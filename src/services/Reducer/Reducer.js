import {ADD_TO_CART} from "../Constans";

const initialState = {
    cardData : []
}

function cardItems ( state = initialState , action){

    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData : action.data
            }
            break;
            default : 
            return  state
    }
}


export default cardItems;
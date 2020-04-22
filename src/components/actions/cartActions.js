import {ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_ITEM} from './action-types/cart-actions';

//add cart action
export const addToCart = (id, quantity = 1) => {
    return {
        type: ADD_TO_CART,
        id,
        quantity
    }
}

//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

//add quantity action
export const addQuantity = (id) => {
    return{
        type: ADD_QUANTITY,
        id
    }
}

//subtract quantity action
export const subtractQuantity = (id) => {
    return{
        type: SUB_QUANTITY,
        id
    }
}
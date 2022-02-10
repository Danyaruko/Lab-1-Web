import { BUY_BASKET, DELETE_BASKET, SET_LOGGED_FALSE, SET_LOGGED_TRUE, DELETE_ALL } from "./basketsActions";

const defaultState = {
    baskets: [], //{name: "", price: 0, qty: 0},
    logged: false
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case BUY_BASKET: return {
            ...state,
            baskets: [...state.baskets, action.basket ], //action.basket
        }
        case DELETE_BASKET: return {
            ...state,
            baskets: state.baskets.filter((basket, index) => index !== action.basket)
        }
        case DELETE_ALL: return {
            ...state,
            baskets: []
        }
        case SET_LOGGED_TRUE: return {
            ...state,
            logged: action.logged
        }
        case SET_LOGGED_FALSE: return {
            ...state,
            logged: action.logged
        }        
        default: return state
    }
}

export default reducer
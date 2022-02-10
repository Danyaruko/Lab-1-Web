import { ADD_BASKET } from "./basketsActions"

export const addBaskets = (basket) => {
    return {
        type: ADD_BASKET,
        basket: basket
    }
}


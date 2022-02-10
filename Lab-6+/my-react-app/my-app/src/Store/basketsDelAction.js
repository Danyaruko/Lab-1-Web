import { DELETE_BASKET } from "./basketsActions"

export const deleteBaskets = (basket) => {
    return {
        type: DELETE_BASKET,
        basket: basket
    }
}


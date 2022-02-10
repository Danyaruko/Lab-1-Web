import { BUY_BASKET } from "./basketsActions"

export const buyBaskets = (basket) => {
    return {
        type: BUY_BASKET,
        basket: basket
    }
}


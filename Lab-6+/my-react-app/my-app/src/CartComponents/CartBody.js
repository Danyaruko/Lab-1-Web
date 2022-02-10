import { useSelector, useDispatch } from "react-redux"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../style/cart.css'
import { buyBaskets } from "../Store/basketsBuyAction"
import { deleteBaskets } from "../Store/basketsDelAction"

function CartBody(props) {
    const [baskets, setBaskets] = useState([])

    const storedBaskets = useSelector((state) => state.baskets)
    var sum = 0
    var amount = 0
    var basketsPrice = {}
    var allBaskets = []
    const dispatch = useDispatch()
    useEffect(() => {
        setBaskets(storedBaskets)
    }, [baskets, storedBaskets])

    baskets.sort()
    baskets.forEach(bask => {
        sum+=bask.price
        basketsPrice[bask.name] = bask.price
        allBaskets[bask.name]=bask
    })

    function find_duplicate_in_array(array) {
        const count = {}
        const result = []

        array.forEach(item => {
            if (count[Object.values(item)[1]]) {
                count[Object.values(item)[1]] += 1
                return
            }
            count[Object.values(item)[1]] = 1
        })

        for (let prop in count) {
            if (count[prop] >= 2) {
                result.push(prop)
            }
        }

        return count;

    }
    console.log(baskets)
    amount = find_duplicate_in_array(baskets)
    function handleDelete(basket) {
        let index = baskets.indexOf(allBaskets[basket])
        console.log(Object.keys(baskets))
        dispatch(deleteBaskets(index))
    }
    
    return (
        <div>
            <div className="cart-header">Your cart</div>
            {Object.keys(amount).map(basket => {
                console.log(basket)
                return (
                    <div className="basket-wrapper">
                        <div className="basket-name">
                            {basket}
                        </div>
                        <div className="add-del-wrapper">
                            <button className="delete-basket" onClick={() => handleDelete(basket)}>-</button>
                            <div className="baskets-amount">{amount[basket]}</div>                            
                            <button className="add-basket" onClick={() => dispatch(buyBaskets(allBaskets[basket]))}>+</button>
                        </div>
                        <div className="basket-price">{basketsPrice[basket]*amount[basket]} $</div>
                    </div>
                )
            })}
            <div className="total-price-label">Total price: {sum} $</div>
            <div className="buttons-wrapper">
                <Link to="/catalog" className="back-button"><b>Back to catalog</b></Link>
                <Link to="/cart/checkout" className="continue-button"><b>Continue</b></Link>
            </div>
        </div>
    )
}

export default CartBody
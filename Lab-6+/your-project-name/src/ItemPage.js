import Nav from "./HomeComponents/Navbar"
import Footer from "./HomeComponents/Footer"
import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"

import './style/item-page.css'
import axios from "axios";
import { buyTickets } from "./Store/ticketsBuyAction"

function ItemPage(props) {
    const [basket, setFilm] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:3036/catalog/${props.match.params.name}`).then((response) => { setFilm(response.data); })
    }, [props])
    
    function onBuyClick() {
        dispatch(buyTickets(basket[0]))
    }

    return (
        <div>
            {
                basket.map(basket => {
                    return (
                        <div >
                            <Nav />
                            <div className="basket-description">
                                <div>
                                    <h1 className="basket-detail-name">{basket.name}</h1>
                                    <div className="basket-detail-genre">{basket.genre + ""}</div>
                                    <div className="basket-detail-description">
                                    Perfect for everything from newspapers to clothes. Dimensioned for KALLAX shelving unit.
                                    </div>
                                    <div className="basket-detail-duration">
                                        {basket.complexity} !!!
                                    </div>
                                    <hr className="basket-detail-br-line" />
                                    <div className="basket-detail-price">{basket.price} $</div>
                                </div>
                            </div>
                            <button className="basket-detail-buy" onClick={() => onBuyClick()}> BUY THIS BASKET </button>
                            <Footer /> 
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ItemPage
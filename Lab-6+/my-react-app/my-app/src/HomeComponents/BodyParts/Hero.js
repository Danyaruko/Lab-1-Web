import React from "react";
import mainBasketImage from '../images/icon.png'

function Hero() {
    return (
        <div className="hero">
            <img className="hero-img" src={mainBasketImage} alt="HeroImg"/>
            <div>
                <h1 className="heading">Baskets</h1>
                <div className="sub-heading">                    
                If you can’t see clutter, is it really there? Yes, but it won’t stress you out as much. Keeping your things in baskets can help with that while adding style to your room, too. 
                We’ve got a range of sizes and designs like wicker baskets, felt ones and storage baskets made of lightweight wood."
                </div>
            </div>
        </div>
    )
}

export default Hero
import {React, useState} from 'react'

function TileSection() {
    const [readMore, setReadMore] = useState(false)
    var linkName=readMore?"Read less <<<":"Read more >>>";
    const moreContent = <div className="extra"  id="read-more">
            <div className="baskets" >
                <div className="adv-basket">
                    <p className="adv-basket-name">INSVEP</p>
                    <p className="adv-size">small</p>
                    <p className="adv-basket-price">30 $</p>
                </div>
                <div className="adv-basket">
                    <p className="adv-basket-name">GLIRING</p>
                    <p className="adv-size">large</p>
                    <p className="adv-basket-price">100 $</p>
                </div>
                <div className="adv-basket">
                    <p className="adv-basket-name">LOKALT</p>
                    <p className="adv-size">medium</p>
                    <p className="adv-basket-price"> 75 $</p>
                </div>
            </div>
        </div>
    
    return (
        <div  className="tile-section">
            <div className="baskets">
                <div className="adv-basket">
                    <p className="adv-basket-name">INSVEP</p>
                    <p className="adv-size">small</p>
                    <p className="adv-basket-price">2.5 $</p>
                </div>
                <div className="adv-basket">
                    <p className="adv-basket-name">GLIRING</p>
                    <p className="adv-size">large</p>
                    <p className="adv-basket-price">300 $</p>
                </div>
                <div className="adv-basket">
                    <p className="adv-basket-name">LOKALT</p>
                    <p className="adv-size">medium</p>
                    <p className="adv-basket-price">90 $</p>
                </div>
            </div>
            <a href="#" id="home-view-more" onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
            {readMore ? moreContent : ""}
        </div>
    )
}

export default TileSection
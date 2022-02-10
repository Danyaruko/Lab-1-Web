import '../style/navbar.css'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div id="navbar">
            <nav>
                <span className="logo">Baskets</span>
                    <ul className="navlist">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
            </nav>
        </div>
    )
}

export default Nav
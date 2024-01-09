import React from 'react'
import { useCart } from './CartContext'
import { Link } from 'react-router-dom';

function Header() {
    const { cartCount } = useCart();
    return (
        <div>
            <div className="offer">
                <h3>20% Off for Life | Subscribe &amp; Save Now</h3>
            </div>
            <div className="header">
                <Link to={"/"} className='text-black no-underline'>
                    <p className="shop-drop">shop </p>
                </Link>

                <Link to={"/bestsellers"} className='text-black no-underline'>
                    <p>Bestsellers</p>

                </Link>
                <p>Bundles</p>
                <h2><i className="fa-solid fa-fire kettle-heading" /> Kettle &amp; Fire</h2>
                <p>Learn </p><span className="material-symbols-outlined">
                    expand_more
                </span>
                <p>About us</p>
                <p>Loyality Program</p>
                <p><i className="fa-solid fa-magnifying-glass" /></p>
                <Link to={"/login"}>
                    <p><i className="fa-solid fa-user" /></p>

                </Link>
                <p><i className="fa-solid fa-cart-shopping" />({cartCount})</p>

            </div>
        </div>
    )
}

export default Header
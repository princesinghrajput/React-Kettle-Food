import React from 'react'

function Header() {
    return (
        <div>
            <header className="header">
                <div className="offer-banner">
                    <h2>20% Off for Life | Subscribe & Save Now</h2>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><a href="#">Bestsellers</a></li>
                        <li><a href="#">Bundles</a></li>
                        <li className="logo-img">
                            <a href="#"><img src="https://cdn.kettleandfire.com/094d784d-4b1d-4e57-9aa4-19f135559cf1/logokf.svg" alt="" /></a>
                        </li>
                        <li><a href="#">Learn</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Loyalty Program</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
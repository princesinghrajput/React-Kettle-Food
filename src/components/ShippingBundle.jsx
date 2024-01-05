import React from 'react'

function ShippingBundle() {
    return (
        <div className="shipping-bundle">
            <div className="shipping">
                <img className="shipping-img" src="https://www.kettleandfire.com/cdn/shop/files/kf-bundle-save-bg.min_2880x_1a514ca4-1026-41c7-9336-0240726858ec.png?v=1680858721" alt="img" />
            </div>
            <div className="delivery">
                <i className="fa-solid fa-truck" />
                <p>Get 12 Cartons, Get Free Shipping</p>
            </div>
            <div>
                <h1 className="bundle">Bundle &amp; Save 10%</h1>
                <div className="ten-off">10% off</div>
                <button className="shop-bundles">SHOP 4-PACK BUNDLES</button>
            </div>
        </div>
    )
}

export default ShippingBundle
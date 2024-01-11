import React from 'react'

function DiscountBanner() {
    return (
        <div className="first-container">
            <div className="first-info">
                <h3>Take an extra 10% off your first order</h3>
                <p>We’ll also send you delicious recipes, product updates, and more</p>
            </div>
            <div>
                <form className="form-email">
                    <input type="text" placeholder="Your email" className="form-input" />
                    <button className="coupon-btn">GET MY COUPON CODE</button>
                </form>
            </div>
        </div>
    )
}

export default DiscountBanner
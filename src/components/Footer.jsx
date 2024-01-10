import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="contain">
                <div className="col social">
                    <h1>Follow Us</h1>
                    <ul>
                        <li><i class="fa-brands fa-square-facebook"/></li>
                        <li><i class="fa-brands fa-instagram"/></li>
                        <li><i class="fa-brands fa-x-twitter"/></li>
                        <li><i className="fa-brands fa-pinterest" /></li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Shop</h1>
                    <ul>
                        <li>Bone Broths</li>
                        <li>Soups</li>
                        <li>Keto Broths</li>
                        <li>Keto Soups</li>
                        <li>Cooking Broths</li>
                        <li>Low Sodium Cooking Broths</li>
                        <li>Regeneratively Made Broths</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Explore</h1>
                    <ul>
                        <li>Our Story</li>
                        <li>Bone Broth Quiz</li>
                        <li>Bone Broth Benefits</li>
                        <li>Recipes</li>
                        <li>FAQ</li>
                        <li>Customer Stories </li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Company</h1>
                    <ul>
                        <li>Careers</li>
                        <li>Brand Ambassador</li>
                        <li>Wholesale</li>
                        <li>Refer a Friend</li>
                        <li>Healthcare Ambassadorsh</li>
                        <li>Store Locations</li>
                    </ul>
                </div>
                <div className="col">
                    <h1>Customers</h1>
                    <ul>
                        <li>Account</li>
                        <li>Get Help</li>
                    </ul>
                </div>
                <div className="clearfix" />
            </div>
            <br /><br />
            <hr style={{ color: 'black', fontWeight: 'bolder' }} />
            <div className="last">
                <a href="#">© kettle &amp; Fire 2024</a>
                <a href="#">contact us</a>
                <a href="#">Refund policy</a>
                <a href="#">Terms</a>
                <a href="#">Do Not Sell My Personal Information</a>
                <a href="#">Site by New WindowGrowLTV and New WindowRTNU</a>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import Subscription from './Subscription'

function LearnMore() {
    return (
        <>
        <div className="mission-container">
            <div className="mission-info">
                <h2>
                    It's our mission to improve the way we eat, starting from the ground up.
                </h2>
            </div>
            <div className="mission-values">
                <div className="mission-box">
                    <span className="material-symbols-outlined mission-icon">
                        check_circle
                    </span>
                    <p>We carefully source the highest quality ingredients.</p>
                </div>
                <div className="mission-box">
                    <span className="material-symbols-outlined mission-icon">
                        check_circle
                    </span>
                    <p>We partner with farms that reflect our core values.</p>
                </div>
                <div className="mission-box">
                    <span className="material-symbols-outlined mission-icon">
                        check_circle
                    </span>
                    <p>
                        Slow-simmered at the perfect temperatures for maximum flavor and
                        nutrition.
                    </p>
                </div>
                <button className="learn-btn"> LEARN MORE</button>
            </div>
           
        </div>
        <Subscription/>
        </>
    )
}

export default LearnMore
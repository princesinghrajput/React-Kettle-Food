import React from 'react'
function HealthFocus() {
    return (

        <div className="health-container">
            <h2>Shop by Health Focus</h2>
            <div className="health-box">
                <div className="weight-loss">
                    <span className="material-symbols-outlined " style={{ fontSize: '60px' }}>
                        monitor_weight
                    </span>
                    <p>Weight Loss</p>
                </div>
                <div className="weight-loss">
                    <span className="material-symbols-outlined" style={{ fontSize: '60px' }}>
                        ulna_radius_alt
                    </span>
                    <p>Muscle Recovery</p>
                </div>
                <div className="weight-loss">
                    <span className="material-symbols-outlined" style={{ fontSize: '60px' }}>
                        gastroenterology
                    </span>
                    <p>Digestion immunity</p>
                </div>
            </div>
            <p className="need-help">Need help?</p>
            <button className="quiz-btn">TAKE THE BROTH QUIZ</button>
        </div>
    )
}

export default HealthFocus
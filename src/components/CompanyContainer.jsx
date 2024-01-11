import React from 'react'

function CompanyContainer() {
    return (
        <div className="company-container">
            <h3>Find us in more than 10,000 stores, nationwide.</h3>
            <div className="company-box">
                <img className="box-img-1" src="https://cdn.kettleandfire.com/19564575-5762-4a58-9cf7-bdca5b907223/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/" alt="img" />
                <img className="box-img-2" src="https://cdn.kettleandfire.com/ff5983b7-1a87-4295-a7e4-905a6f5f8eaf/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/" alt="img" />
                <img className="box-img-3" src="https://cdn.kettleandfire.com/e6560630-339c-4501-ac4a-124f5df7067a/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/" alt="img" />
                <img className="box-img-4" src="https://ucarecdn.com/508a4551-5e42-4a56-b994-df3f2ca0c0b1/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/700x/" alt="img" />
            </div>
            <button className="store-btn">FIND A STORE NEAR ME</button>
        </div>
    )
}

export default CompanyContainer
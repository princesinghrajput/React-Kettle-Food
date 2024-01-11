import React from 'react'

const BookContainer = () => {
    return (
        <div>
            <h2 className="best-selling">Best Selling Broth</h2>
            <div className="books-container">
                <div className="book-1">
                    <img
                        className="book"
                        src="https://ucarecdn.com/2a55f661-8754-4bf4-aad4-7fac5b140ab8/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/380x/"
                        alt="img"
                    />
                    <div className="start">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <p>7462 Reviews</p>
                    </div>
                    <div>
                        <h4 className="book-info">Classic Chicken</h4>
                    </div>
                </div>
                <div className="book-2">
                    <img
                        className="book"
                        src="https://ucarecdn.com/75164a3c-0039-4f9f-8b3e-b6b9dfc079b5/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/380x/"
                        alt="img"
                    />
                    <div className="start">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <p>8346 Reviews</p>
                    </div>
                    <div>
                        <h4 className="book-info">Classic Mutton</h4>
                    </div>
                </div>
                <div className="book-3">
                    <img
                        className="book"
                        src="https://ucarecdn.com/964627d0-adec-4908-8326-a0b8e4388e9a/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/380x/"
                        alt="img"
                    />
                    <div className="start">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <p>1464 Reviews</p>
                    </div>
                    <div>
                        <h4 className="book-info">Turmeric Ginger</h4>
                    </div>
                </div>
                <div className="book-4">
                    <img
                        className="book"
                        src="https://ucarecdn.com/196b2ed4-1421-4e8c-bcd5-eebab57ff851/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/380x/"
                        alt="img"
                    />
                    <div className="start">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <p>4123 Reviews</p>
                    </div>
                    <div>
                        <h4 className="book-info">Mushroom Chicken</h4>
                    </div>
                </div>
                <button className="explore-btn">EXPLORE ALL BROTHS</button>
            </div>
        </div>

    )
}

export default BookContainer
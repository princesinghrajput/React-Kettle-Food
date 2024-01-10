import React from 'react'
import Header from './Header'
import FirstContainer from './FirstContainer'
import ProofsContainer from './ProofsContainer'
import BookContainer from './BookContainer'
import ExploreBroth from './ExploreBroth'
import ShippingBundle from './ShippingBundle'
import CustomerReview from './CustomerReview'
import HealthFocus from './HealthFocus'
import LearnMore from './LearnMore'
import RecipeCrousels from './RecipeCrousels'
import Testimonials from './Testimonials'
import CompanyContainer from './CompanyContainer'
import DiscountBanner from './DiscountBanner'
import Footer from './Footer'
function Body() {
    return (

        <React.Fragment>
            <FirstContainer />
            <ProofsContainer />
            <BookContainer />
            <ExploreBroth />
            <ShippingBundle />
            <CustomerReview />
            <HealthFocus />
            <LearnMore />
            <RecipeCrousels />
            <Testimonials />
            <CompanyContainer />
            <DiscountBanner />

        </React.Fragment>
    )
}

export default Body
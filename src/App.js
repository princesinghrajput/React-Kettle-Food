import React, { Children } from "react";
import './App.css';
import Header from './components/Header';
import FirstContainer from "./components/FirstContainer";
import ProofsContainer from "./components/ProofsContainer";
import BookContainer from "./components/BookContainer";
import ExploreBroth from "./components/ExploreBroth";
import ShippingBundle from "./components/ShippingBundle";
import CustomerReview from "./components/CustomerReview";
import HealthFocus from "./components/HealthFocus";
import LearnMore from "./components/LearnMore";


function App() {
  return (
    <React.Fragment>
      <Header />
      <FirstContainer />
      <ProofsContainer />
      <BookContainer />
      <ExploreBroth />
      <ShippingBundle/>
      <CustomerReview/>
      <HealthFocus/>
      <LearnMore/>
    
      
    </React.Fragment>


  );
}

export default App;

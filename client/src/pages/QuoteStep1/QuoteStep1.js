import React from 'react';
import './QuoteStep1.css';
import PageHeading from './QuoteStep1/PageHeading'
import CarDetails from './QuoteStep1/CarDetails';
import DriverDetails from './QuoteStep1/DriverDetails';

function QuoteStep1() {

  return (

    <div className='QuoteStep1'>
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <ProgressBar /> */}
      <PageHeading />
      <CarDetails />
      <DriverDetails />
      {/* <BackNextButtons /> */}
      {/* <Footer /> */}
   </div>

  );
};

export default QuoteStep1;

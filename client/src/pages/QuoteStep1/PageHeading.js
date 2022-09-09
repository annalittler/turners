import React from 'react';
import './PageHeading.css';

function PageHeading() {
  
  return (
    <div name='page-heading'>

        <h1 style={{
          marginLeft: '20px',
          }}
        >Car Insurance Quote</h1>


        {/* ----- insert shared plans button component ----- */}

        {/* <button style={{
          width: '364px',
          height: '48px',
          // fontFamily: 'Inter',
          color: '#000000',
          background: '#FFFFFF',
          border: '0.2px solid rgba(0, 0, 0, 0.2)',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '20px',
          // fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '22px',
          cursor: 'pointer',
        }}
        >Want to learn more about our plans    
          <span style={{
            color: '#0076BE', 
            height: '25.09px', 
            width: '14.7px',
          }}
          >     &#62;</span>
        </button> */}

    </div>

  )

};

export default PageHeading;
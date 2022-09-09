import React from 'react';
import './CarDetails.css';
import PlacesAutocomplete from 'react-places-autocomplete';

function CarDetails() {
  
  return (
    
    <div className='container-car-details'>
      <form className='car-details'>
        <h3 style={{
          width: '244px',
          height: '29px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#000000', 
        }}
        >Tell us about your car</h3>

        <hr style={{
          width: '1192px',
          height: '0px',
          border: '3px solid #D9D9D9',
        }}>
        </hr>
        <br></br>
        
        {/* ----- Policy start Day ----- */}

        <label style={{
          width: '388px',
          height: '24px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          // lineHeight: '40px',
          color: '#000000',
          }}
        for='policy-start'>When would you like your policy to start?</label>
        
        <select style={{
          boxSizing: 'border-box',
          height: '57px',
          width: '176px',
          marginLeft: '4%',
          background: '#FFFFFF',
          border: '1px solid #000000',
          borderRadius: '20px 0px 0px 20px',
          // fontFamily: 'inter',
          fontWeight: '400',
          fontSize: '20px',
          textAlign: 'center',
          appearance: 'none',
          cursor: 'pointer',
          }}
        
        class name='custom-select-day' id='day'>
          <option value='Day' selected>Day</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
        </select>
                
        {/* ----- Policy start Month ----- */}

        <select style={{
          boxSizing: 'border-box',
          height: '57px',
          width: '176px',
          left: '353px',
          background: '#FFFFFF',
          border: '1px solid #000000',
          textAlign: 'center',
          fontWeight: '400',
          fontSize: '20px',
          appearance: 'none',
          cursor: 'pointer',
          }}
          
          class name='custom-select-month' id='month'>
          <option value='Month' selected>Month</option>
          <option value='January'>January</option>
          <option value='February'>February</option>
          <option value='March'>March</option>
          <option value='April'>April</option>
          <option value='May'>May</option>
          <option value='June'>June</option>
          <option value='July'>July</option>
          <option value='August'>August</option>
          <option value='September'>September</option>
          <option value='October'>October</option>
          <option value='November'>November</option>
          <option value='December'>December</option>
        </select>

        {/* ----- Policy start Year ----- */}

        <select style={{
          boxSizing: 'border-box',
          height: '57px',
          width: '176px',
          background: '#FFFFFF',
          border: '1px solid #000000',
          borderRadius: '0px 20px 23px 0px',
          textAlign: 'center',
          appearance: 'none',
          fontWeight: '400',
          fontSize: '20px',
          cursor: 'pointer',
          }}
          
          class name='custom-select-year' id='year'>
          <option value='Year' selected>Year</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
        </select>
        <br></br>
        <br></br>
  
        {/* ----- Car registration ----- */}

        <label style={{
          width: '324px',
          height: '24px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '40px',
          color: '#000000',
          }}
          
          for='car-registration'>Enter your car registration number</label>
        
        <input style={{
          height: '57px',
          width: '529px',
          marginLeft: '8.6%',
          border: '1px solid #000000',
          borderRadius: '20px',
        }}
        type='text' id='registration' name='registration'></input>

        <button className='button-search'>Search</button>
        <br></br>
        <br></br>

        {/* ----- Business use ----- */}

        <label style={{
          width: '20px',
          height: '24px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '40px',
          color: '#000000',
          }}
        for='business-use'>Do you use your car for business?</label>
        
        <button className='button-group1'>Yes</button>
        <button className='button-group2'>No</button>
        <br></br>
        <br></br>
  
        {/* ----- Car address ----- */}

        <label style={{
          width: '383px',
          height: '24px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '40px',
          color: '#000000',
          }}
        for='address'>Address where you usually keep your car overnight</label>
        <br></br>
        <br></br>
        
        <input style={{
          height: '57px',
          width: '940px',
          paddingLeft: '35px',
          background: '#FFFFFF',
          borderRadius: '20px', 
          }}
        type='search-address'></input>
        <br></br>
        <br></br>
  
        {/* ----- Turners purchase ----- */}

        <label style={{
          width: '363px',
          height: '24px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '40px',
          color: '#000000',
          }}
        for='turners-purchase'>Did you buy your car through Turners?</label>
        
        <button style={{
          marginLeft: '5.6%',
        }}
        className='button-group1'>Yes</button>
        <button className='button-group2'>No</button>
        <br></br>
        <br></br>


      </form>
          
    </div>
  );
};

export default CarDetails;
import React from 'react';
import './DriverDetails.css';

function DriverDetails() {
  
  return (

    <div className='container-driver-details'>
      <form>
        <h3 style={{
          width: '486px',
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
        >Driver Details - Main Driver & Owner of Car</h3>
        
        <hr style={{
          width: '1192px',
          height: '0px',
          border: '3px solid #D9D9D9',
        }}>
        </hr>
        <br></br>

        {/* ----- Driver gender ----- */}

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
        for='gender'>Gender of main driver</label>
        
        <button style={{
          marginLeft: '17.5%',
          }}
        className='button-group1'>Male</button>
        <button className='button-group2'>Female</button>
        <br></br>
        <br></br>
  

        {/* ----- Driver DOB ----- */}

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
        for='DOB'>Date of birth</label>
        

        {/* ----- DOB Day ----- */}
        
        <select style={{
          boxSizing: 'border-box',
          height: '57px',
          width: '176px',
          marginLeft: '24%',
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


        {/* ----- DOB Month ----- */}

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

        type='text' id='DOB-month' name='Month'>
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


        {/* ----- DOB Year ----- */}

        <input style={{
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
        type='number' min='1900' max='2022' id='DOB-year' name='Year' placeholder='Year'>
        </input>
        <br></br>
        <br></br>
  

        {/* ----- Licence type ----- */}

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
        for='licence'>What licence do you hold?</label>
        
        <input style={{
          height: '57px',
          width: '529px',
          border: '1px solid #000000',
          borderRadius: '20px',
          marginLeft: '14.2%',
        }}
        type='text' id='licence' name='licence'></input>
        <br></br>
        <br></br>


        {/* ----- Previous incidents ----- */}

        <label style={{
          widthMax: '373px',
          height: '72px',
          paddingLeft: '35px',
          paddingTop: '37px',
          // fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '20px',
          wordWrap: 'break-word',
          // lineHeight: '40px',
          color: '#000000',
          }}
          for='previous-incidents'>In the last 3 years have you had any incidents involving damage or theft of a vehicle?</label>

        <br></br>

        <button style={{
          marginLeft: '35.5%',
          }}
        className='button-group1'>Yes</button>
        <button className='button-group2'>No</button>
        <br></br>
        <br></br>

        
        {/* ----- Add driver ----- */}

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
        for='add-driver'>Would you like to add another driver?</label>
        
        <input style={{
          height: '57px',
          width: '529px',
          // border: '1px solid #000000',
          borderRadius: '20px',
          border: '1px solid #0076BE',
          marginLeft: '6.5%',
        }}
        type='text' id='add-driver' name='add-drives' placeholder='+ Add another driver'></input>
        <br></br>
        <br></br>
          
      </form>

    </div> 
  );
};

export default DriverDetails;

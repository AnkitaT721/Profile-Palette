import React from 'react';
import { NavLink } from 'react-router-dom';
import error from '../image/error.png';

const Errorpage = () => {
  return (
    <>
      <div id="notfound" style={{transform: 'scale(0.9 ,0.9)'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh', marginTop: '30px' }}>
          <img src={error} alt="error-image" style={{ width: '40%', height: 'auto', transform: 'scale(0.6 ,0.6)'}} />
        </div>
        <div className="notfound" style={{marginTop: '60px'}} >
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, page not found!</h2>
          <p className="mb-5">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <NavLink to="/" style={{marginTop: '20px'}} > Back To Homepage </NavLink>
        </div>
      </div>
    </>
  );
}

export default Errorpage;

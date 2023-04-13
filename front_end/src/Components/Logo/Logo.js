import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="tilt" >
        <div className="br2 shadow-2">
          <img style={{paddingTop: '3px'}} alt="brain" src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
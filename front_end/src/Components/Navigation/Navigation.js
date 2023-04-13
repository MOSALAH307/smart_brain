import React from "react";

const Navigation = ({ onRouteChange, signedIn }) => {
  if (signedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end"}}>
        <p onClick={() => onRouteChange('signin')} 
        className="tr f4 underline dim pointer pr2">Sign out</p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end"}}>
      <p 
      onClick={() => onRouteChange('signin')} 
      className="tr f4 underline dim pointer pr2 mr2">Sign in</p>
      <p 
      onClick={() => onRouteChange('register')} 
      className="tr f4 underline dim pointer pr2">Register</p>
    </nav>
    );
  }
}

export default Navigation;
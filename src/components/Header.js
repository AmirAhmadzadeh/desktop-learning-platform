import React from "react";
import Navigation from './navigation'  ; 
import WithClass from "./WIthClass";

export default (props) => {
  return (
    <nav className='navigation'>
      <WithClass classes='container'>
          <Navigation/>
      </WithClass>
    </nav>
  );
};

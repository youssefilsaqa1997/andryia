import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';


function Navigation() {

  return (
      
        <div className="navigator">
          <div className="naviComponents">
          <img src="logo.b64b0996.png"></img>
         <ul >
         <Link to="/"> <li>Home</li> </Link>

         <Link to="/Section"> <li>Arts&Culture</li> </Link>

          <Link to="/Section"> <li>Woman</li> </Link>

          <Link to="/reporterProfile"> <li>In-Depth</li> </Link>
          
          <Link to="/article"> <li>Tech</li> </Link>

          <Link to="/Magazine"><li>Magazine</li> </Link>
        </ul>
        <div className="line"></div>
          </div>
        </div>

  );
}

export default Navigation;
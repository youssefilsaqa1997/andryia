import React from 'react';
import './Footer.css';


function Footer() {

  return (
      
        <div className="Footer">
          
          <input type="image" src="email.svg" ></input>

          <input type="search"></input>

          <input type="button" value="Subscribe"></input>

          <div className="copyRights">© 2019 Andariya Magazine, All Rights Reserved.</div>

          <div className="Policy"><a>Privacy Policy</a></div>

        </div>

  );
}

export default Footer;
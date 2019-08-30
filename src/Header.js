import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className="header">

      <div className="mainNav">


        <ul className="info">
          <li><a href="https://play.google.com/store/apps/details?id=com.andariyaapplication"><img src="playStore.JPG"></img></a></li>
          <Link to="/about">
          <li><a>About</a></li>
          </Link> 
          <li><a>Contact</a></li>
        </ul>



        <ul className="social">
          <li className="facebook"><a href="https://www.facebook.com/AndariyaMag/"><img src="facebook.JPG"></img></a></li>
          <li><a href="https://www.instagram.com/andariyamag/"><img src="insta.JPG"></img></a></li>
          <li><a href="https://twitter.com/andariyamag"><img src="twitter.JPG"></img></a></li>
          <li><a href="https://www.youtube.com/channel/UCgOy55cVVpufy9WPgqNfuUA"><img src="youtube.JPG"></img></a></li>
        </ul>

        <input type="image" src="search.jpg" ></input>

        <input type="search"></input>

        <select>
          <option value="Arabic">ع</option>
          <option value="English">EN</option>
        </select>
      </div>
      
    </div>
  );
}

export default Header;

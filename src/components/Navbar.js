import React from 'react';
import '../style/navbar.css';

const Navbar = () => {
 
  return (
    <div className='nav-container'>
        <div className="logo">
            Psych Guru
        </div>
    <nav id='navbar'>
        <ul>
            <li>home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Expert Community</li>
            <li>Contact</li>
            <li>Why Us</li>
            <li>Join Us</li>
        </ul>
    </nav>
    <div className="btn">
        <button className='btn1'>Book A Consultation</button>
        <button className='btn2'>phone</button>
    </div>
    </div>
  );
};

export default Navbar;
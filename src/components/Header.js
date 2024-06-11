import React from 'react'
import '../style/header.css';
const Header = () => {
  return (
    <div className='header'>

      <div className="heading">
       <h1>We Care About Your Mental Health</h1> 
      </div>

      <div className='more'>
        <p>More than 500 happy patients!</p>
        </div>

      <div className='header-btn'>
        <button>Book A Consultation</button>
      </div>

    </div>
  )
}

export default Header

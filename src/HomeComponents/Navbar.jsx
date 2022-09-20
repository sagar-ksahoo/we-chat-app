import React from 'react'
import myImage from '../images/SagarKumarSahoo.jpg'
const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">We Chat</span>

        <div className="user">
            <img src={myImage} alt="user-logo" />
            <span>Gladiator</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar
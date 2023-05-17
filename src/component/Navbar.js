import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    
  return (
    <div className='navbar__container'>
        <h2>LOGO</h2>
        <div>
            <ul >
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar
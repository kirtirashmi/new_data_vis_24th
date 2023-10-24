import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
  from 'react-icons/bs'
import Logo from './Logo.png';
import { Link } from "react-router-dom"
function Header({ OpenSidebar }) {
  const handleLinkClick = (resource) => {
    fetch(`/api/${resource}`)
      .then(response => response.json())
      .then(data => {
        // Process the response from the backend here
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <header className='header'>

      <div className='header-left'>
        <img src={Logo} alt="Logo" />
      </div>

      <div className='header-right'>
        <a href="#" className='mx-4' style={{ textDecoration: "none" }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: "22px" }}><button className='btn btn-sm btn-primary'>Dashboard </button></Link>
        </a>

        <a href="#" onClick={() => handleLinkClick('Users')} style={{ textDecoration: "none" }}>
          <Link to="/Users" style={{ textDecoration: 'none', color: 'black', fontSize: "22px" }}><button className='btn btn-sm btn-primary'>Users </button></Link>
        </a>

      </div>
    </header>
  )
}

export default Header
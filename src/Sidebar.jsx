import React from 'react'
import Users from './Users';
import Logo from './Logo.png';
import {Link} from "react-router-dom"

import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
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
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={Logo} alt="Logo" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <Link to = "/" style={{ textDecoration: 'none', color: '#9e9ea4' }}>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsGrid1X2Fill className='icon'/> 
                    <Link to = "/" style={{ textDecoration: 'none', color: '#9e9ea4' }}>Dashboard</Link>
                </a>
            </li>
            </Link>
            <Link to = "/Users" style={{ textDecoration: 'none', color: '#9e9ea4' }}>
            <li className='sidebar-list-item'>   
            <a href="#" onClick={() => handleLinkClick('Users')}>
                    <BsFillGrid3X3GapFill className='icon'/> 
                    <Link to = "/Users" style={{ textDecoration: 'none', color: '#9e9ea4' }}>Users</Link>
                </a> 
            </li>
            </Link>
        </ul>
    </aside>
  )
}

export default Sidebar

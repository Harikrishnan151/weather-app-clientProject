import React from 'react'
import { RiAdminLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import './Sidebar.css'
import './AdminMain.css'


function Admin() {
  return (
    <div className='dashboard'>

    <div className='menu'>
      <div className='logo'>
      <RiAdminLine className='icon' />
      <h2>Admin</h2>
      </div>
   

    <div className='menu-list'>
      <a href="" className='item'>
      <BiHome className='icon' />
      Dashboard
      </a>
      <a href="" className='item'>
      <BiHome className='icon' />
      Dashboard
      </a>
      <a href="" className='item'>
      <BiHome className='icon' />
      Dashboard
      </a>
      <a href="" className='item'>
      <BiHome className='icon' />
      Dashboard
      </a>
      <a href="" className='item'>
      <BiHome  className='icon'/>
      Dashboard
      </a>
      <a href="" className='item'>
      <BiHome  className='icon'/>
      Dashboard
      </a>

    </div>
    </div>
    
    <div className='dashboard' >
      <div className='dashboard-content'>
       contentsssss
      </div>
    </div>
  </div>
)
  
}

export default Admin
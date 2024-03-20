import React, { useState } from 'react'
import { RiAdminLine } from "react-icons/ri";
import { BiHome } from "react-icons/bi";
import './Sidebar.css'
import './AdminMain.css'
import EmergencyView from '../AdminEmergency/EmergencyView';
import EmergencyAdd from '../AdminEmergency/EmergencyAdd';


function Admin() {

  const [view,setview]=useState(false)
  const [addEmergency,setEmergency]=useState(false)

  const viewEmergency=(e)=>{
    e.preventDefault()
    setEmergency(false)
    setview(prevState => !prevState)

  }
  const Emergencyadd=(e)=>{
    e.preventDefault()
    setview(false)
    setEmergency(prevState => !prevState)

  }


  return (
    <div className='dashboard'>

    <div className='menu'>
      <div className='logo'>
      <RiAdminLine className='icon' />
      <h2>Admin</h2>
      </div>
   

    <div className='menu-list'>
     
        <a href="" onClick={(e)=>viewEmergency(e)}  className='item'>
        <BiHome className='icon' />
             Emergency View
        </a>
      
      <a href="" onClick={(e)=>Emergencyadd(e)} className='item'>
      <BiHome className='icon' />
      Emergency Add
      </a>
      <a href="" className='item'>
      <BiHome className='icon' />
      Logout
      </a>
     
     
      

    </div>
    </div>
    
    <div className='dashboard' >
      <div className='dashboard-content'>
       {view?<EmergencyView/>:""}
       {addEmergency?<EmergencyAdd></EmergencyAdd>:""}
      </div>
    </div>
  </div>
)
  
}

export default Admin

import React, { useState } from 'react'
import './Header.css'
import { FaBars, FaTimes } from "react-icons/fa"
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdEmergencyShare } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom'
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarItem,

} from 'mdb-react-ui-kit';


function Header() {

  const isUserLoginPage = useLocation().pathname === '/userLogin'
  const isAdminLoginPage = useLocation().pathname === '/adminLogin' 
  const isUserRegisterPage =useLocation().pathname==='/userRegister'


  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", changeColor)


  return (
    <div >
      <div className={color ? "header header-bg" : "header"}>

        <Link to={"/"}>
          <h1 style={{ color: 'white' }}>Weather-App</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li >
            <Link style={{ color: 'white' }} to={"/"}><FaHome /></Link>
          </li>

          <li>
            <Link style={{ color: 'white' }} to={"/about"}><MdEmergencyShare /></Link>
          </li>
          <li>
            <Link style={{ color: 'white' }} to={"/project"}></Link>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle style={{ color: 'white' }} tag='a' className='nav-link' role='button'>
                <FaUserCircle />
                </MDBDropdownToggle>
                <MDBDropdownMenu>

{
  isUserLoginPage || isAdminLoginPage || isUserRegisterPage ? <div>
    <MDBDropdownItem link><Link to={"/adminLogin"}>Admin <MdAdminPanelSettings /></Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link to={"/userLogin"}>User <FaUser /></Link></MDBDropdownItem>
  </div> :
  <MDBDropdownItem link><Link to={"/userLogin"}>Logout <FaUser /></Link></MDBDropdownItem> 
}

                  {/* <MDBDropdownItem link><Link to={"/adminLogin"}>Admin <MdAdminPanelSettings /></Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link to={"/userLogin"}>User <FaUser /></Link></MDBDropdownItem> */}
               
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </li>

        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}


        </div>
      </div>
    </div>
  )
}

export default Header
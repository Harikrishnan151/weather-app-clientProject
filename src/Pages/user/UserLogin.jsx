import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import './UserLogin.css'
import { IoIosLock } from "react-icons/io";
import Header from '../../components/Header/Header';

function UserLogin() {

const [userName,setuserName]= useState()
const[password,setpassword]=useState()

const handleSubmit=async(e)=>{

  e.preventDefault()
  const body={userName,password}

  //api call for fetch userlogin
  
  console.log(body);

}


  return (
    // design login page
    <div className='userlogin'>
     
    
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>User Login</h1>
          <div className='input-box'>
            <input type="text" placeholder='username' onChange={(e)=>setuserName(e.target.value)} required />
            <FaUser  className='icon'/>
          </div>
          <div className='input-box'>
            <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} required />
            <IoIosLock  className='icon'/>
          </div>
          <div className='remember-forgot'>
            <label><input type="checkbox" />Remember Me?</label>
            <a href="">Forgot Password ?</a>

            
          </div>
          <button type='submit'>Login</button>
          <div className='register-link'>
            <p>Don't have any account ? <a href="/userRegister">Register</a></p>
          </div>


        </form>
  
      </div>


    </div>


  )
}

export default UserLogin
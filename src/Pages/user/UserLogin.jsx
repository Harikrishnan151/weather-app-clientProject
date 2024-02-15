import React from 'react'
import { FaUser } from "react-icons/fa";
import './UserLogin.css'
import { IoIosLock } from "react-icons/io";

function UserLogin() {




  return (
    // design login page



    <div className='userlogin'>


      <div className='wrapper'>
        <form action="">
          <h1>User Login</h1>
          <div className='input-box'>
            <input type="text" placeholder='username' required />
            <FaUser  className='icon'/>
          </div>
          <div className='input-box'>
            <input type="password" placeholder='password' required />
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
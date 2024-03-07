import React, { useEffect, useState } from 'react'
import './Admin.css'
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../services/allApi';

function AdminLogin() {

    const [username,setUserName]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    //function to admin login
    const handleSubmit=async(e)=>{
        e.preventDefault();
       const body={username,password}
       // Check if any of the fields are empty
       if(!username || !password){
        toast.error('Please fill the feilds')
       }else{
        //api call for admin login
        const response=await adminLogin(body)
        // navigate('/')
        console.log(username,password);
        toast.success('Login Success')
       }
       
    }


  return (
    
    <div className='adminlogin'>


    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <div className='input-box'>
          <input type="text" placeholder='username'  required  onChange={(e)=>setUserName(e.target.value)}/>
          <FaUser  className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='password' required onChange={(e)=>setPassword(e.target.value)} />
          <IoIosLock  className='icon'/>
        </div>
        {/* <div className='remember-forgot'>
          <label><input type="checkbox" />Remember Me?</label>
          <a href="">Forgot Password ?</a>

          
        </div> */}
        <button type='submit'>Login</button>
        {/* <div className='register-link'>
          <p>Don't have any account ? <a href="/userRegister">Register</a></p>
        </div> */}


      </form>

    </div>

 <ToastContainer position='top-center'/>
  </div>
  )
}

export default AdminLogin
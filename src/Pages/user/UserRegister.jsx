import React, { useState } from 'react'
import { IoIosLock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import './UserRegister.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function UserRegister() {

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    psw: "",
    // Cpsw:""
  })


  const [confirmPwd, setConfirmpsw] = useState()

  //data store registration
  const handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })

  }
  console.log(userData);

  // Register data submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userData.psw == confirmPwd) {


      ///Api call for Register


    }
    else {
      toast.error("Enter same password")
    }

  }




  return (
    // user register form
    <>
      
      <div className='userRegister'>
        <div className='wrapper'>

          <form action="">

            <h1>User Register</h1>

            <div className='input-box'>
              <input type="text" name='firstname' onChange={e => handleChange(e)} placeholder='FirstName' required />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type="text" name='lastname' onChange={e => handleChange(e)} placeholder='Last Name' required />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type="text" placeholder='username' onChange={e => handleChange(e)} name='username' required />
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='password' onChange={e => handleChange(e)} name='psw' required />
              <IoIosLock className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='confirm password' onChange={(e) => setConfirmpsw(e.target.value)} name='Cpsw' required />
              <IoIosLock className='icon' />
            </div>
            {/* <div className='remember-forgot'> */}
            {/* <label><input type="checkbox" />Remember Me?</label> */}
            {/* <a href="">Forgot Password ?</a> */}



            <button type='submit' onClick={handleSubmit}>Register</button>


          </form>

        </div>

        <ToastContainer position='top-center' />
      </div>
    </>



  )
}

export default UserRegister
import React, { useContext, useState } from 'react'
import { FaUser } from "react-icons/fa";
import './UserLogin.css'
import { IoIosLock } from "react-icons/io";
import Header from '../../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin } from '../../services/allApi';
import { useNavigate } from 'react-router-dom';
import DashboardUser from '../userDashboard/DashboardUser';

// import { AuthContextStatus } from '../AuthContext';

function UserLogin() {

const [username,setuserName]= useState()
const[password,setpassword]=useState()
 const navigate=useNavigate()
 const [loggedIn, setLoggedIn] = useState(false);
//  const {authorizsed, setAuthorised} = useContext(AuthContextStatus)



const handleSubmit=async(e)=>{

  e.preventDefault()
  const body={username,password}
  console.log(username,password);
  try{
    if(!username || !password){
      toast.error('Please fill the feilds')
     }else{
      //api call for admin login
      const response=await userLogin(body)
      console.log(response);
       if(response.status==200){
        localStorage.setItem("token",response.data.access) 
        localStorage.setItem("userId",response.data.user.id)
        setLoggedIn(true);
       alert('Login Success')
      //  setAuthorised(true)
        navigate('/home')
       }else if(response.status==401){
        alert('invalid usernane or password')
       }else{
        alert('Account does not exist')
       }
      
     }
  }catch(error){
    console.error(error);
    toast.error('Internal server error')
  }
}


  return (
  <>
  {
    loggedIn?(
      <DashboardUser/>
    ):(
          // design login page
    <div className='userlogin'>
     
    
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>User Login</h1>
        <div className='input-box4'>
          <input type="text" placeholder='username' onChange={(e)=>setuserName(e.target.value)} required />
          <FaUser  className='icon'/>
        </div>
        <div className='input-box4'>
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


    <ToastContainer position='top-center' />
  </div>
    )
  }
  </>


  )
}

export default UserLogin
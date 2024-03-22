import React, { useEffect, useState } from 'react'
import './EditPost.css'
import { MdOutlineTitle } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { IoLocation } from "react-icons/io5";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';
import { userPost } from '../../services/allApi';
import { useParams } from 'react-router-dom';
function EditPost() {

  const {id}=useParams()
  console.log(id);

  const formData=useState({
    title:"",
    description:"",
    location:"",
    user:"",

  })

  const token = localStorage.getItem("token")
  console.log(token);


  //function to get user post
  const fetchUserPost=async()=>{
    const header = {
      Authorization: `Bearer ${token}`
    }
    const response=await userPost(id,header)
    console.log(response);
  }

  //function to edit user post

  useEffect(()=>{
    fetchUserPost()
  },[])
  
  return (
    <div>
         {/* <Navbar/> */}

         
        <div className='editPost'>
        <div className='wrapper'>

          <form action="">

            <h1>Edit Post</h1>
            <div className='input-box2'>
              <input type="text" name='firstname'  placeholder='Id' required />
              <MdOutlineTitle className='icon' />
            </div>

            <div className='input-box2'>
              <input type="text" name='firstname'  placeholder='Title' required />
              <MdOutlineTitle className='icon' />
            </div>
            <div className='input-box2'>
              <input type="" name='lastname' placeholder='Description' required />
              <MdOutlineDescription className='icon' />
              
            </div>
            <div className='input-box2'>
              <input type="text" placeholder='Location'  name='Image url' required />
              <IoLocation className='icon' />
            </div>
            <div className='input-box3'>
              <input type="file" placeholder='Image Url'  name='Image url' required />
              {/* <FaImage className='icons'/> */}
            </div>
            <button type='submit' >Update</button>


          </form>

        </div>

        <ToastContainer position='top-center' />
        </div>


    </div>
    
    
  )
}

export default EditPost
import React, { useEffect, useState } from 'react'
import './DashboardUser.css'
import Navbar from '../navbar/Navbar'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Footer from '../../components/Footer/Footer';
import { getUserdetails, getUserpost } from '../../services/allApi';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ToastContainer, toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DashboardUser() {

  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user,setUser]=useState({})
  const [userPost,setUserpost]=useState([])

  // function to block invalid user login
  const invalidLogin=()=>{
    const token = localStorage.getItem("token")
    if(!token){
      alert('please login')
      navigate('/')
    }
  }


  const id = localStorage.getItem("userId")
  console.log(id);

 


    const navigate=useNavigate()
// api to fetch user details
  const fetchDetails = async () => {

    try {
      const response = await getUserdetails(id)
      console.log(response.data);
      setUser(response.data)
    } catch (error) {
      alert('Faild to fetch userDetails')
    }

  }
  console.log(user);

  //function to logout user
  const logoutUser=()=>{
    localStorage.clear();
    toast.success('Logging out')
     setTimeout(()=>{
      navigate('/')
     },3000)
  }

  const token = localStorage.getItem("token")
  const header = {
    Authorization: `Bearer ${token}`
  }

  //function to get all user post
  const fetchPost=async()=>{
    try {
      const postDetails=await getUserpost(header)
      console.log(postDetails.data)
      setUserpost(postDetails.data)
    } catch (error) {
      alert('error in fetching post')
    }
  }
  console.log(userPost)

  useEffect(() => {
    fetchDetails()
    fetchPost()
    invalidLogin()
  }, [])


  return (
    <div className='body1'>

      <div >
        <Navbar />
        <Button className='mx-3 mt-2' style={{ backgroundColor: '#3b82f6' }} onClick={handleShow}>
        <i class="fa-solid fa-bars"></i>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title ><h2 style={{ fontWeight: "bolder" }}>{user.first_name}</h2> </Offcanvas.Title>

          </Offcanvas.Header>
          <Offcanvas.Body>
            <MDBCardImage className='userProfile my-3' style={{ width: '8rem', height: '8rem;', overflow: 'hidden' }} src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' position='top' alt='...' />
            <ListGroup>
              <Link to={'/userDashboard'}>
                <ListGroup.Item className='listgrp text-black '>Dashboard</ListGroup.Item>
              </Link>
              <ListGroup.Item className='listgrp text-black '>User Details</ListGroup.Item>
              <Link  to={'/addPost'}><ListGroup.Item className='listgrp text-black '>Add Posts</ListGroup.Item></Link>
              <ListGroup.Item className='listgrp text-black'> <Link className='link-tag'  href="#" onClick={handleOpen}>Reset Password</Link></ListGroup.Item>
              <ListGroup.Item onClick={()=>logoutUser()}  className='listgrp text-black '>Log Out</ListGroup.Item>

            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className='container'>
        <Row >
          {
              userPost.map((postData)=>(
                <Col sm={12} md={6} lg={4} xl={3} className='py-4 '>

                <Link style={{ textDecoration: 'none' }}>
                  <MDBCard className='card mt-5'>
                    <MDBCardImage src='http://127.0.0.1:8000/{postData.image}' position='top' alt='...' />
                    <MDBCardBody>
                      <MDBCardTitle className='text-dark'>{postData.title}</MDBCardTitle>
                      <MDBCardText >
                      {postData.description} <br />
                        <FaLocationDot /> CANADA
                      </MDBCardText>
                      <div className='bottom-content d-flex justify-content-between '>
                        <div className="action-item">
                          <span><FaHeart className='text-danger' /> 14 Like</span>
                        </div>
                        <div className="action-item">
                          <span><FaCommentAlt /> 4 comments</span>
                        </div>
                      </div>
                      <div className="userActions d-flex justify-content-between my-3 ">
                        <div className="edit">
                          <Link to={'/editPost'}>
                            <span> <FaEdit /></span>
                          </Link>
  
                        </div>
                        <div className="edit">
                          <Link>
                            <span> <FaTrashCan className='text-danger' /></span>
                          </Link>
  
                        </div>
                      </div>
  
                    </MDBCardBody>
                  </MDBCard>
                </Link>
  
  
              </Col>
              ))
           

          }


        </Row>

        <div>
         
          <Modal
            open={open}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Reset Password
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <form >
                <div class="form-outline" data-mdb-input-init>
                  <input className='input-box' type="text" id="formControlLg" class="form-control form-control-lg border  " />
                  <label class="form-label" for="formControlLg">Enter Username</label>
                </div>

                <div  class="form-outline my-3" data-mdb-input-init>
                  <input type="text" id="formControlLg" class="form-control form-control-lg border" />
                  <label class="form-label" for="formControlLg">Enter new password</label>
                </div>
                <div className='submitbtn my-2'>
                  <button className='btn btn-primary'>Submit</button>
                </div>
                </form>
              </Typography>
            </Box>
          </Modal>
        </div>
        <ToastContainer position='top-center' />
      </div>
      <Footer />
    </div>
  )
}

export default DashboardUser
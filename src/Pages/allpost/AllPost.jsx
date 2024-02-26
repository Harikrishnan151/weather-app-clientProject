import React from 'react'
import './AllPost.css'
import Navbar from '../navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function AllPost() {
  return (
    <div className='mainBody'>
        <Navbar/>
        <div className="container">
       <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <MDBCard className='card my-5'>
                  <MDBCardImage src='https://img.etimg.com/thumb/width-1200,height-900,imgsize-35974,resizemode-75,msid-102677774/news/india/imd-issues-heavy-to-very-heavy-rainfall-alert-for-these-states.jpg' position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-dark'>Snowfall...!</MDBCardTitle>
                    <MDBCardText >
                     Heavy snow fall <br />
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
    

                  </MDBCardBody>
                </MDBCard>
        </div>
        <div className="col-2"></div>
       </div>

        </div>
        <Footer/>
    </div>
  )
}

export default AllPost
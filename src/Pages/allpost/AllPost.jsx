import React, { useState } from 'react'
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
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AllPost() {

  const [addvalue,setComment]=useState(false)

  //Add comment toggle comment box display using comment link clicks

  const addComment=()=>{
    console.log("add comment");
    // setComment(true)
    setComment(prevState => !prevState);
  }


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
                        <span onClick={addComment}><FaCommentAlt /> 4 comments</span>
                      </div>
                    </div>
                    <div>
          {
           addvalue?

          //  comments display

          <Card className='mt-5'>
          <Card.Body>
            <Card.Title>Comments</Card.Title>
            <Card.Text>
              {/* comment enter field */}
             <input type="text" className='input-box' placeholder='Enter your comments here..' />    

            </Card.Text>
            {/* button for comments add  */}

            <Button variant="Success">Add comment</Button>

            {/* button for comments delete */}
            <Button variant="Success" className='ms-3'>Delete comment</Button>

{/* display comments loaded from server */}
            <div className='input-box mt-5 '>
              <p>disply comments here</p>

            </div>
          </Card.Body>
        </Card>
            
            
            
            
            :""
          }



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
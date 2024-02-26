import React, { useState } from 'react'
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
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Footer from '../../components/Footer/Footer';

function DashboardUser() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='body1'>
      <div >
        <Navbar />
        <Button className='mx-3 mt-2' variant="dark" onClick={handleShow}>
          Dashboard
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title ><h2 style={{fontWeight:"bolder"}}>User</h2> </Offcanvas.Title>

          </Offcanvas.Header>
          <Offcanvas.Body>
            <MDBCardImage className='userProfile my-3' style={{width: '8rem', height: '8rem;', overflow: 'hidden'}} src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' position='top' alt='...' />
            <ListGroup>
              <Link to={'/userDashboard'}>
                <ListGroup.Item className='listgrp'>Dashboard</ListGroup.Item>
              </Link>
              <Link to={'/addPost'}><ListGroup.Item className='listgrp'>Add Posts</ListGroup.Item></Link>
              <ListGroup.Item className='listgrp'>Log Out</ListGroup.Item>
      
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className='container'>
        <Row >
          {

            <Col sm={12} md={6} lg={4} xl={3} className='py-4 '>

              <Link style={{ textDecoration: 'none' }}>
                <MDBCard className='card mt-5'>
                  <MDBCardImage src='https://www.nj.com/resizer/v_3wPz72LVi-97Z-SkqYWwGfpQE=/500x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/QCKVQIEFZFG6JKW75ID27KCDVA.JPG' position='top' alt='...' />
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

          }


        </Row>

      </div>
      <Footer/>
    </div>
  )
}

export default DashboardUser
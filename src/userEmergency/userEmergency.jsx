import React from 'react'
import './userEmergency.css'
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
import Navbar from '../Pages/navbar/Navbar';
import Footer from '../components/Footer/Footer';

function userEmergency() {

  return (
    <div>
        <Navbar/>
    <div className='maindiv '>
      <h1 className='title py-3' >Emergency</h1>
      
    <Row className='p-5'>
      {

        <Col sm={12} md={6} lg={4} xl={3} className='py-4'>

          <Link to={`view/`} style={{ textDecoration: 'none' }}>
            <MDBCard className='card '>
              <MDBCardImage src='https://www.takeoffaviationindia.com/assets/img/courses/5.jpg' position='top' alt='...' />
              <MDBCardBody>
                <MDBCardTitle className='text-dark'>Fire Force</MDBCardTitle>
                <MDBCardText >
                  Address :  <br />
                  Number:
                </MDBCardText>

              </MDBCardBody>
            </MDBCard>
          </Link>
        </Col>
      }

    </Row>
   
    

  </div>
  <Footer />
  </div>
  )
}

export default userEmergency
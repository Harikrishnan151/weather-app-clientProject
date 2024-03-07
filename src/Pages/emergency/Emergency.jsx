import React from 'react'
import './Emergency.css'
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
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


function Emergency() {
  

  return (
    <div className='maindiv '>
      <Header />
      <div>
      <h1 className='title py-2' >Emergency</h1>
      
      <Row className='p-4'>
        {

          <Col sm={12} md={6} lg={4} xl={3} className='py-2 '>

            <Link to={`view/`} style={{ textDecoration: 'none' }}>
              <MDBCard className='card mt-5'>
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

export default Emergency
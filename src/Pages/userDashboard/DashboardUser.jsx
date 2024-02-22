import React, { useState } from 'react'
import './DashboardUser.css'
import Navbar from '../navbar/Navbar'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  MDBCardImage,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';


function DashboardUser() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div >
        <Navbar/>
        <Button className='mx-3 my-3' variant="primary" onClick={handleShow}>
        Dashboard
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User</Offcanvas.Title>
      
        </Offcanvas.Header>
        <Offcanvas.Body>
        {/* <MDBCardImage style={{height:'50vh',widows:'20vh', justifyContent:'center'}} src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' position='top' alt='...' /> */}
        <ListGroup>
          <Link to={'/userDashboard'}>
          <ListGroup.Item>Dashboard</ListGroup.Item>
          </Link>
     <Link to={'/addPost'}><ListGroup.Item>Add Posts</ListGroup.Item></Link> 
      <ListGroup.Item>Log Out</ListGroup.Item>
      {/* <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
    </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      </div>

      <div>
        <h1>User page </h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores aliquam hic aut, natus incidunt nostrum cum atque quia id blanditiis! Vel delectus quisquam commodi maiores praesentium quos debitis reiciendis alias?</p>
      </div>

   </div>
  )
}

export default DashboardUser
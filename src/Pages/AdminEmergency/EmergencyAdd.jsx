import React from 'react'
import Form from 'react-bootstrap/Form';
import './Emergency.css'
function EmergencyAdd() {
  return (
    <div className='container text-center w-75 mt-5 p-5 wrapper' >
     <div className='container ' style={{display:'flex'}}>
       <Form.Label className='me-5' htmlFor="inputPassword5">Title </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
     </div>
     <div className='container mt-5 ' style={{display:'flex'}}>
       <Form.Label className='me-5' htmlFor="inputPassword5">Phone Number </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
     </div>
     <div className='container mt-5 ' style={{display:'flex'}}>
       <Form.Label className='me-5' htmlFor="inputPassword5">Location </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
     </div>
     <div className='container mt-5 ' style={{display:'flex'}}>
       <Form.Label className='me-5' htmlFor="inputPassword5">Address </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
     </div>
     <div className='container mt-5 ' style={{display:'flex'}}>
       <Form.Label className='me-5' htmlFor="inputPassword5">Description </Form.Label>
        <Form.Control
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
     </div>
     <div className='container mt-5 ' style={{display:'flex'}}>
       <Form.Label className='me-5' htmlFor="inputPassword5">Image Upload </Form.Label>
        <Form.Control
          type="file"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
     </div>
    </div>
  )
}

export default EmergencyAdd

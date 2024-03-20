import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'react-bootstrap';
import { viewEmergency } from '../../services/allApi';
import BASE_URL from '../../services/baseurl';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function EmergencyView() {
    
const [emergencyData,setemergencyData]=useState([])
const [zoomedImage, setZoomedImage] = useState(null);
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const token= localStorage.getItem('token')
console.log(token);
const fetchEmergencyData=async()=>{

  
    const response = await viewEmergency()
    try {
        console.log(response);
        setemergencyData(response.data)

    } catch (error) {
        alert('faild to fetch data')

    }
    // console.log(response);

    
}

//zoom image in click
const handleImageClick = (imageUrl)=>{
  handleOpen();
  setZoomedImage(imageUrl)
}
const handleCloseZoom = () => {
  setZoomedImage(null);
  handleClose()
};

useEffect(()=>{
    fetchEmergencyData()
},[])




  return (
    <div>
     <Row className='text-center container '>
    { emergencyData.map(i=>
        <Col sm={12} >

         <Card sx={{ maxWidth: 345 }}>
      <img className='mt-3' style={{height:'200px', width:'200px',cursor:'pointer'}}
       id={i.id} src={`${BASE_URL}${i.image}`}
        alt=""
        onClick={()=>handleImageClick(`${BASE_URL}${i.image}`)} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{i.title}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div style={{justifyContent:'start'}}> 
        <h6>Address : {i.address} </h6>
        <h6>location: {i.location} </h6>
        <h6>Phone Number : {i.phone_number}</h6>
         <p>Description : {i.description}</p>
         <p>Created At : {i.created_at}</p> 
          
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
        
        </Col>
     )}
     </Row>

{/* view zoom image */}
<div >
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <img onClick={handleCloseZoom} style={{height:'600px', width:'600px' }} src={zoomedImage} alt="" />
          </Typography>
          
        </Box>
      </Modal>
</div>
     
    </div>
  )
}

export default EmergencyView

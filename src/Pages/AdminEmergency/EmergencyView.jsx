import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Col, Row } from 'react-bootstrap';
import { viewEmergency } from '../../services/allApi';


function EmergencyView() {
    
const [emergencyData,setemergencyData]=useState([])
const token= localStorage.getItem('token')
console.log(token);
const fetchEmergencyData=async()=>{

  
    const response = await viewEmergency()
    try {
        console.log(response);

    } catch (error) {
        alert('faild to fetch data')

    }
    // console.log(response);

    
}

useEffect(()=>{
    fetchEmergencyData()
},[])




  return (
    <div>
     <Row className='text-center container '>
        <Col >

         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        
        </Col>
     </Row>
    </div>
  )
}

export default EmergencyView

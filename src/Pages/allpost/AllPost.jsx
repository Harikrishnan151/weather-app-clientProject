import React, { useEffect, useState } from 'react'
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
import { getAllWeatherpost } from '../../services/allApi';
import BASE_URL from '../../services/baseurl';
// import moment from 'moment';


function AllPost() {

  const [addvalue, setComment] = useState(false)
  const [newDate,setNewdate]=useState()
  //Add comment toggle comment box display using comment link clicks

  const addComment = () => {
    console.log("add comment");
    // setComment(true)
    setComment(prevState => !prevState);
  }
  const [weatherPost, setWeatherpost] = useState([])

  const fetchWeatherPost = async () => {
    const response = await getAllWeatherpost()
    setWeatherpost(response.data)
    // const date=moment(response.data.created_at)

    // const formattedDate=date.format('DD-MM-YYYY')
    // setNewdate(formattedDate)
  }
  console.log(weatherPost)



  useEffect(() => {
    fetchWeatherPost()
  }, [])


  return (
    <div className='mainBody'>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            {
            weatherPost?weatherPost.map((data)=>(
                <MDBCard className='card my-5'>
                  <MDBCardTitle className='text-dark mt-2 mx-2'>{data.user}</MDBCardTitle>
                  <MDBCardText className='mx-2' >
                    {/* {data.created_at.slice(0,10)}  */}
                    {data.created_at.slice(8,10)}-{data.created_at.slice(5,8)}{data.created_at.slice(0,4)}
                  {/* {newDate} */}
                  </MDBCardText>
                <MDBCardImage height={'450px'} className='' src={`${BASE_URL}${data.image}`} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle className='text-dark '>{data.title}</MDBCardTitle>
                  <MDBCardText >
                    {data.description} 
                  </MDBCardText>
                  <MDBCardText >
                    <FaLocationDot  /> {data.location}
                  </MDBCardText>
                  <div className='bottom-content d-flex justify-content-between '>
                    <div className="action-item">
                      <span><FaHeart className='text-danger' /> {data.likes}  Like</span>
                    </div>
                    <div className="action-item">
                      <span onClick={addComment}><FaCommentAlt /> 4 comments</span>
                    </div>
                  </div>
                  <div>
                    {
                      addvalue ?
  
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
                              <p>{data.comments}</p>
                               
                            </div>
                          </Card.Body>
                        </Card>
  
                        : ""
                    }
                  </div>
  
                </MDBCardBody>
              </MDBCard>
              )):<div>
                <h4>Add post</h4>
              </div>
            }

          </div>

          <div className="col-2"></div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AllPost
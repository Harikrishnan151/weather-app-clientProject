import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './UserPost.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import { FaHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import BASE_URL from '../../services/baseurl';
import { Button } from 'react-bootstrap';
import { getComments, viewUserPost } from '../../services/allApi';
import { useParams } from 'react-router-dom';


function UserPost() {

    const { id } = useParams()
    console.log(id);

    const [data, setData] = useState([])
    const [comments, setComments] = useState([])
    const [addvalue, setComment] = useState(false)
    //Add comment toggle comment box display using comment link clicks
    const addComment = () => {
        console.log("add comment");
        // setComment(true)
        setComment(prevState => !prevState);
    }

    const token = localStorage.getItem("token")
    const header = {
        Authorization: `Bearer ${token}`
    }

    //function to fetch user post
    const fetchUserPost = async () => {
        try {
            const response = await viewUserPost(id, header)
            console.log(response.data);
            setData(response.data)

        } catch (error) {
            alert(error)
        }

    }



    useEffect(() => {
        fetchUserPost()
        comment()
    }, [])

    //function to get comment
    const comment= async() => {
     try {
        const result = await getComments(id)
        console.log(result)
        setComments(result)
     } catch (error) {
        alert(error)
     }
    }
    return (
        <>
            <Navbar />
            <div className='mainBodys'>
                <div className="container">

                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">

                            <MDBCard className='card my-5'>
                                {/* <MDBCardTitle className='text-dark mt-1 mx-2'><img style={{ width: '1.5rem', height: '1.3rem;', overflow: 'hidden' }} src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" /> {}</MDBCardTitle> */}
                                <MDBCardText className='mx-2' >

                                    <FaLocationDot /> {data.location}

                                </MDBCardText>
                                <MDBCardImage height={'450px'} className='postImg' src={`${BASE_URL}${data.image}`} position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle className='text-dark '>{data.title}</MDBCardTitle>
                                    <MDBCardText >
                                        {data.description}
                                    </MDBCardText>
                                    <MDBCardText >
                                        {/* {data.created_at.slice(8,10)}-{data.created_at.slice(5,8)}{data.created_at.slice(0,4)} */}



                                    </MDBCardText>
                                    <div className='bottom-content d-flex justify-content-between '>
                                        <div className="action-item">
                                            <span><FaHeart className='text-danger' />   Like</span>
                                        </div>
                                        <div className="action-item">
                                            <span onClick={addComment}><FaCommentAlt />  comments</span>
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
                                                            <p>{ }</p>

                                                        </div>
                                                    </Card.Body>
                                                </Card>

                                                : ""
                                        }
                                    </div>

                                </MDBCardBody>
                            </MDBCard>



                        </div>

                        <div className="col-2"></div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default UserPost
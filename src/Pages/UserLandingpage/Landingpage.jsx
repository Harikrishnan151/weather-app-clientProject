import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './Landingpage.css'

import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FaWater } from "react-icons/fa6";
import Footer from '../../components/Footer/Footer';
import { getWeather } from '../../services/allApi';

function Landingpage() {

  const [givenLocation, setGivenLocation] = useState('');
  const [weather, setWeather] = useState({})
  const [items, setItems] = useState([])
  const [dataFetched, setDataFetched] = useState(false)



  // api fetch function for weather search
  const fetchWeather = (latitude, longitude, type) => {
    if (type === 'given') {
      console.log("location search");
      // const response = await getWeather() //api fetch for weather by given location
    }
    else {
      console.log("current location");
      // api fetch weather by curent location
    }
  }

  // function to pass given location to get weather data
  const handleSubmit = async () => {
    console.log(givenLocation);
    try {
      const response = await getWeather(givenLocation)
      console.log(response.data.weather);
      console.log(response.data.necessary_items);
      setWeather(response.data.weather)
      setItems(response.data.necessary_items)
      setDataFetched(true)

    } catch (error) {
      alert('Faild to fetch weather')
    }
    console.log(weather);


  }
  return (
    <>
      <Navbar />

      <div className='body '>

<div className='homePage'>
  <div className='search-box'>
    <FaLocationDot className='icons' />
    <input type="text" placeholder='Enter Location' onChange={(e) => setGivenLocation(e.target.value)} />
    <button onClick={handleSubmit} ><FaSearchLocation /></button>
  </div>

  <div>
    {
      dataFetched ?
      <div className='weather-box'>
      <div className='box'>
        <div className='info-weather'>
          <div className='weather'>
            <img src="https://i.postimg.cc/2y9ncR7J/clouds.gif" alt="" />
            <p className='city'>{weather.city}</p>
            <p className='temparature'>{weather.temperature} <span> ℃</span></p>
            <p className='description'>{weather.description}</p>
          </div>
          <div className='humidity'>

            <div className='text'>
              <div className='info-humidity'>
                <span><FaWater className='icons' /> {weather.humidity} Humidity</span>
              </div>
              <div className="container my-3">
                <div className="row">
                  <h4>Suggested to take</h4>
                  <div className="col">
                    {
                      items.map((item, index) => (
                        <span className='items' key={index}>{item}</span>
                      ))
                    }
                  </div>
                </div>
                <div className='text-center my-2 '>
                  <button className='btn btn-primary'>Live Forecast</button>
              </div>
                
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
    :
    <div className='weather-box'>
     <img width={60} src="https://i.postimg.cc/2y9ncR7J/clouds.gif" alt="" />
     <div>
      <h5 className='content'>Introducing our weather app, your ultimate companion for both emergencies and daily forecasts. Stay ahead with real-time updates, detailed hourly forecasts.</h5>
     </div>
  </div>
    }




  </div>



</div>
</div>
<Footer />



    </>
  )
}

export default Landingpage
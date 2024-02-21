import React, { useEffect, useState } from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { FaWater } from "react-icons/fa6";
import './Home.css'
import axios from 'axios';

function Home() {

  // const [currentWeather, setCurrentWeather] = useState(null);
  const [locationWeather, setLocationWeather] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({});
  const [givenLocation, setGivenLocation] = useState('');
  


  useEffect(() => {
    // Fetch weather for current location on component mount
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      // console.log(latitude);
      setCurrentLocation({ latitude, longitude });
      fetchWeather(latitude, longitude,'current'); // fuction call to api fetch using current location
    });
  }, []);

  // api fetch function for weather search
  const fetchWeather=(latitude,longitude,type)=>{
    if(type==='given'){
      console.log("location search");
      // const response = await getWeather() //api fetch for weather by given location
    }
    else{
      console.log("current location");
      // api fetch weather by curent location
    }
  }

  // function to pass given location to get weather data
  const handleSubmit=()=>{
    console.log(givenLocation);
    fetchWeather(null,null,'given')  // function to fetch by given position
  }
  
  return (

    <div className='body'>

      <div className='homePage'>
        <div className='search-box'>
          <FaLocationDot className='icons' />
          <input type="text" placeholder='Enter Location' onChange={(e)=>setGivenLocation(e.target.value)} />
          <button onClick={handleSubmit} ><FaSearchLocation /></button>
        </div>

        <div className='weather-box'>
          <div className='box'>
            <div className='info-weather'>
              <div className='weather'>
                <img src="https://i.postimg.cc/2y9ncR7J/clouds.gif" alt="" />
                <p className='temparature'>16 <span> ℃</span></p>
                <p className='description'>Broken Clouds</p>

              </div>

            </div>

          </div>

        </div>


        {/* weather details */}
        <div className='weather-details '>
          {/* humidity */}
          <div className='humidity'>
            <FaWater  className='icons'/>
            <div className='text'>
              <div className='info-humidity'>
                <span>0%</span>
              </div>
              <p>Humidity</p>
            </div>
          </div>

        {/* wind  */}
        <div className='wind'>
            <FaWind className='icons' />
            <div className='text'>
              <div className='info-wind'>
                <span>0%</span>
              </div>
              <p>Humidity</p>
            </div>
          </div>
          
        </div>


      </div>
    </div>



  )
}

export default Home
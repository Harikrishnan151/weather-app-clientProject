
import BASE_URL from "./baseurl"
import { commonRequest } from "./commonReq"


// / admin login
export const adminLogin=async(userdata)=>{
    return commonRequest("POST",`${BASE_URL}superuser-login/`,userdata)
}

//User Registeration
export const userReg=async(userData)=>{
    return commonRequest("POST",`${BASE_URL}users/register/`,userData)
}

//User Login
export const userLogin=async(body)=>{
    return commonRequest("POST",`${BASE_URL}users/login/`,body)
}

//Get current weather
export const getWeather=async(city)=>{
    return commonRequest("GET",`${BASE_URL}weather/weather/${city}/`)
}



//get 1 hour forecast
export const onehourForecast=async()=>{
    return commonRequest("GET",`${BASE_URL}weather/accuweather-one-hourly-forecast/`)
} 

//get hourly forecast
export const hourlyForecast=async()=>{
    return commonRequest("GET",`${BASE_URL}weather/accuweather-hourly-forecast/`)
}

//get 1 day weather forecast
export const onedayWeatherForecast=async()=>{
    return commonRequest("GET",`${BASE_URL}weather/accuweather-one-day-forecast/`)
}

//get 5 days forecast
export const fivedayForecast=async()=>{
    return commonRequest("Get",`${BASE_URL}weather/accuweather-5day-forecast/`)
}
//get user details 
export const getUserdetails=async(id)=>{
    return commonRequest("GET",`${BASE_URL}users/${id}/`,"")
}

//get user uploaded post inside user profile
export const getUserpost=async(header)=>{
    return commonRequest("GET",`${BASE_URL}posts/`,"",header)
}
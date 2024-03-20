
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

//get 1 day weather forecast
export const onedayWeatherForecast=async()=>{
    return commonRequest("GET",`${BASE_URL}weather/accuweather-one-day-forecast/`)
}

//getv user details 
export const getUserdetails=async(id,headers)=>{
    return commonRequest("GET",`${BASE_URL}users/${id}/`,"",headers)
}

//Emergency view

export const viewEmergency= async()=>{
    return commonRequest("GET",`${BASE_URL}emergencies/`,"")
    
}

// forget password
export const resetPasswordUser= async(body)=>{
    console.log(body);
    return commonRequest("POST",`${BASE_URL}forgot-password/`,body)
    
}

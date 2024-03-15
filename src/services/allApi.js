
import BASE_URL from "./baseurl"
import { commonRequest } from "./commonReq"


//get assembli description
// export const get_list_places=async()=>{
//     return commonRequest("GET",`${BASE_URL}/busbooking/places/getplaces`,"")
// }

// export const getbus=async(userData)=>{
//     return commonRequest("POST",`${BASE_URL}/busbooking/getbusdetails`,userData)
// }

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
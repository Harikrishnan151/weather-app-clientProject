
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
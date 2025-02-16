import commonApi from "./commonApi"
import serverUrl from "./serverUrl"

// regiter Api called by Auth
export const registerApi= async(reqBody)=>{
    return commonApi("POST",`${serverUrl}/register`,reqBody)
}

// login api called by auth when clicked on login button 
export const loginApi= async(reqBody)=>{
    return commonApi("POST",`${serverUrl}/login`,reqBody)
}
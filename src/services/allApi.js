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


// addProjectApi  called by add when clicked on add-project button 
export const addProjectApi= async(reqBody,reqHeader)=>{
    return commonApi("POST",`${serverUrl}/add-project`,reqBody,reqHeader)
}

// getHomeProjectApi api called by home when clicked on add-project button 
export const getHomeProjectApi= async()=>{
    return commonApi("GET",`${serverUrl}/home-project`,{})
}

// allProjectsApi called by project when clicked on add-project button 
export const allProjectsApi= async(searchKey,reqHeader)=>{
    return commonApi("GET",`${serverUrl}/all-project?search=${searchKey}`,{},reqHeader)
}

// userProjectsApi called by project when clicked on add-project button 
export const userProjectsApi= async(reqHeader)=>{
    return commonApi("GET",`${serverUrl}/user-project`,{},reqHeader)
}

// ediProjectsApi called by edit when clicked on add-project button 
export const editProjectsApi= async(id,reqBody,reqHeader)=>{
    return commonApi("PUT",`${serverUrl}/projects/${id}/edit`,reqBody,reqHeader)
}

// removeProjectsApi called by view when clicked on add-project button 
export const removeProjectsApi= async(id,reqHeader)=>{
    return commonApi("DELETE",`${serverUrl}/projects/${id}/remove`,{},reqHeader)
}

// updateUserApi called by Profile when clicked on update button 
export const updateUserApi= async(reqBody,reqHeader)=>{
    return commonApi("PUT",`${serverUrl}/edit-user`,reqBody,reqHeader)
}
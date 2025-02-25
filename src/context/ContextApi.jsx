import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const addResponseImageContext = createContext()
const ContextApi = ({ children }) => {
    const [addProjectResponse, setAddProjectResponse] = useState("")
    const [updateProjectImage, setUpdateProjectImage] = useState("")
    return (
        <addResponseImageContext.Provider value={{ updateProjectImage, setUpdateProjectImage }} >
            <addResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                {children}
            </addResponseContext.Provider>
        </addResponseImageContext.Provider>
    )
}

export default ContextApi
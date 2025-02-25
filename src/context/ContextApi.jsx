import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const editResponseImageContext = createContext()
const ContextApi = ({ children }) => {
    const [addProjectResponse, setAddProjectResponse] = useState("")
    const [editProjectResponse, setEditProjectResponse] = useState("")
    return (
        <editResponseImageContext.Provider value={{ editProjectResponse, setEditProjectResponse }} >
            <addResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                {children}
            </addResponseContext.Provider>
        </editResponseImageContext.Provider>
    )
}

export default ContextApi
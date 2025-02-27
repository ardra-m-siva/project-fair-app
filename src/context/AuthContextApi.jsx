import React, { Children, createContext, useEffect, useState } from 'react'
export const tokenAuthContext = createContext()
const AuthContextApi = ({ Children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    useEffect(() => {
        if (sessionStorage.setItem("token")) {
            setIsAuthorized(true)
        } else {
            setIsAuthorized(false)
        }
    }, [isAuthorized])
    return (
        <tokenAuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
            {Children}
        </tokenAuthContext.Provider>
    )
}

export default AuthContextApi
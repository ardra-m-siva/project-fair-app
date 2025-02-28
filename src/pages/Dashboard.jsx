import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'
import { tokenAuthContext } from '../context/AuthContextApi'

const Dashboard = () => {
  const { isAuthorized, setIsAuthorized } = useContext(tokenAuthContext)

  const [username, setUsername] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuthorized(true)
    } else {
      setIsAuthorized(false)
    }
    if (sessionStorage.getItem("user")) {
      setUsername(JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])
    } else {
      setUsername("")
    }
  }, [])
  return (
    <>
      <Header insideDashboard={true} />
      <div className='container-fluid' style={{ paddingTop: '100px' }}>
        <div className="row mt-3">
          <div className="col-lg-8">
            <h1>Welcome <span className='text-warning'>{username}</span></h1>
            <View />
          </div>
          <div className="col-lg-4">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
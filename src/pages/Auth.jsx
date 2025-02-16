import React, { useState } from 'react'
import { FloatingLabel, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../services/allApi'

const Auth = ({ insideRegister }) => {
  const [isLogined, setIsLogined] = useState(false)
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: ''
  })
  console.log(inputData);

  const handleRegister = async (e) => {
    e.preventDefault()
    if (inputData.email && inputData.password && inputData.username) {
      // make an api call
      // alert("Make an api call")
      try {
        const result = await registerApi(inputData)
        console.log(result);
        if (result.status == 200) {
          alert(`Welcome ${result.data?.username}, Please Login to explore more`)
          navigate('/login')
          setInputData({
            username: '',
            email: '',
            password: ''
          })
        } else {
          if (result.response.status == 406) {
            alert(result.response.data)
            setInputData({
              username: '',
              email: '',
              password: ''
            })
          }
        }

      } catch (err) {
        console.log(err);

      }
    } else {
      alert("Please fill the form")
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (inputData.email && inputData.password) {
      try {
        const result = await loginApi(inputData)
        if (result.status == 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          setIsLogined(true)
          setTimeout(() => {
            setInputData({ username: '', email: '', password: '' })
            navigate('/')
            setIsLogined(false)
          }, 2000)
        } else {
          if (result.response.status == 404) {
            alert(result.response.data)
          }
        }

      } catch (err) {
        console.log(err)
      }
    } else {
      alert("Please fill the form completely")
    }
  }
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className='shadow card p-2'>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <img width={'400px'} className='img-fluid d-flex' src="src/assets/5179440-removebg-preview.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h1 className='mt-2'><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <h5>Sign {insideRegister ? "UP" : "In"} to your Account</h5>
              {
                insideRegister &&
                <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3">
                  <Form.Control value={inputData?.username} onChange={e => setInputData({ ...inputData, username: e.target.value })} type="text" placeholder="username" />
                </FloatingLabel>
              }

              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control value={inputData?.email} onChange={e => setInputData({ ...inputData, email: e.target.value })} type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control value={inputData?.password} onChange={e => setInputData({ ...inputData, password: e.target.value })} type="password" placeholder="Password" />
              </FloatingLabel>

              {
                insideRegister ?
                  <div className='mt-3'>
                    <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                    <p>Already A User ? Please Click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className='mt-3'>
                    <button onClick={handleLogin} className='btn btn-primary mb-2'>Login
                      {
                        isLogined && <Spinner animation="border" variant="light" />
                      }
                    </button>
                    <p>New User ? Please Click here to <Link to={'/register'}>Register</Link></p>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
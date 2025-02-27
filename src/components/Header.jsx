import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ insideDashboard }) => {
const navigate=useNavigate()
  const logout=()=>{
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <>
      {/* position-fixed */}
      <Navbar style={{ zIndex: 1 }} className="border w-100 ">
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand className='text-light fs-4 fw-bolder'>
              <i className='fa-brands fa-docker me-2'></i>
              Project Fair
            </Navbar.Brand>
          </Link>
          {
            insideDashboard &&
            <div className='ms-auto'>
              <button onClick={logout} className='btn btn-link'>Logout <i className='fa-solid fa-right-from-bracket'></i></button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header
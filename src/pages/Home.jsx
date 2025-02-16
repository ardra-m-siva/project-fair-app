import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import langingImg from '../assets/homeimage2.webp'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'

const Home = () => {
  const navigate=useNavigate()
  const handleProjects=()=>{
    if(sessionStorage.getItem('token')){
      navigate('projects')
    }else{
      alert("Please Login")
    }
  }
  return (
    <>
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}><i class="fa-brands fa-docker"></i> Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id dicta illo commodi necessitatibus a nesciunt consequatur ipsa voluptatum porro dolor perferendis, magnam facere ut, accusamus magni, ab ratione sunt?</p>
              {
                sessionStorage.getItem("token") ?
                  <Link to={'/dashboard'} className='btn btn-warning mt-1' >MANAGE TOUR PROJECTS</Link>
                  :
                  <Link to={'/login'} className='btn btn-warning mt-1' >START TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={langingImg} alt="landing" />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 text-center'>
        <h1 className='mb-2'>Explore Our Projects</h1>
        <marquee behavior="" direction="">
          <div className='me-5'>
            <ProjectCard />
          </div>
        </marquee>
        <button onClick={handleProjects} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS..</button>
      </div>

      <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
        <h1>Our Testimonials</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-3 w-100'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://static.vecteezy.com/system/resources/previews/029/364/941/non_2x/3d-carton-of-boy-going-to-school-ai-photo.jpg" alt="" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center mb-1'>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum consequatur, dolorum iusto aspernatur a non corrupti voluptatibus, debitis illum maxime amet, rerum obcaecati et distinctio velit ab quia odio vel.</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://imgv3.fotor.com/images/gallery/a-man-animed-character-generated-by-cartoon-character-maker-in-Fotor.jpg" alt="" />
                <span>Robinson cruso</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center mb-1'>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum consequatur, dolorum iusto aspernatur a non corrupti voluptatibus, debitis illum maxime amet, rerum obcaecati et distinctio velit ab quia odio vel.</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://pics.craiyon.com/2023-10-28/749f3c8df82f44ecb01118be46d17fb2.webp" alt="" />
                <span>Jack Sparrow</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center mb-1'>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                  <i className='fa-solid fa-star text-warning'></i>
                </div>
                <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum consequatur, dolorum iusto aspernatur a non corrupti voluptatibus, debitis illum maxime amet, rerum obcaecati et distinctio velit ab quia odio vel.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home 
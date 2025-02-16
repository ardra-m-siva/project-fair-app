import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container-fluid'>
        <div className="d-flex justify-content-between">
          <h1>All projects</h1>
          <input type="text" placeholder='Search projects by their Languages' className='form-control w-25' />
        </div>
        <Row className='mt-3'>
            <Col className='mb-3 ' sm={12} md={6} lg={4}>
              <ProjectCard />
            </Col>
          </Row>
      </div>
    </div>
  )
}

export default Projects
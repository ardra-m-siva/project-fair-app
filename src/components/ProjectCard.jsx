import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'

const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} style={{ width: '18rem' }} className='mt-2'>
        <Card.Img height={'200px'} variant="top" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" />
        <Card.Body>
          <Card.Title>Project Name</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className="col-lg-6">
              <img className='img-fluid' src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Project Title</h3>
              <h6 className='fw-bolder'>Language Used: <span className='text-danger'>HTML , CSS</span></h6>
              <p style={{textAlign:'justify'}}> <span className='fw-bolder'>Project OverView</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quos quae eveniet voluptas! Consequatur, cupiditate a culpa exercitationem inventore, saepe suscipit eveniet nesciunt similique minus consectetur ipsam harum, assumenda omnis?</p>
            </div>

          </div>
          <div className='mt-2 float start'>
          <a href="https://github.com/ardra-m-siva/portfolio-ardra-m-s" className='btn btn-secondary' target='_blank'><i className='fa-brands fa-github'></i></a>
          <a href="https://portfolio-react-e57dcfj9m-ardra-m-sivas-projects.vercel.app/" className='btn btn-secondary ms-2' target='_blank'><i class="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
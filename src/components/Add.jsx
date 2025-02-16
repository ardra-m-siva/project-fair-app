import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/imageUploadbuttonimage-removebg-preview.png'

const Add = () => {
  const [show, setShow] = useState(false);
  const [projectDetails,setProjectDetails]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImg:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <button onClick={handleShow} className='btn btn-primary'>+ New Project</button>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input type="file" style={{display:'none'}} />
                <img height={'200px'} className='img-fluid' src={uploadImg} alt="" />
              </label>
              <div className='text-warning fw-bolder my-2'>
                Upload only the following file types (jpg, jpeg, png ) here !!!
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" className='form-control' placeholder='Project Title'/>
              </div>
              <div className="mb-2">
                <input  value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" className='form-control' placeholder='Languages used in project'/>
              </div>
              <div className="mb-2">
                <input  value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} type="text" className='form-control' placeholder='Project Overview'/>
              </div>
              <div className="mb-2">
                <input value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} type="text" className='form-control' placeholder='Project GitHub Link'/>
              </div>
              <div className="mb-2">
                <input value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" className='form-control' placeholder='Project Website Link'/>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
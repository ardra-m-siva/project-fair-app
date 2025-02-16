import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';
import uploadImg from '../assets/Userimageupload.png'


const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className='d-flex justify-content-evenly'>
        <h3 className='text-warning'>Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning'><i className='fa-solid fa-chevron-down'></i></button>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text" className='row container-fluid align-items-center justify-content-center shadow p-2 rounded'>
          <label className='text-center'>
            <input type="file" style={{ display: 'none' }} />
            <img className='rounded' width={'200px'} height={'200px'} src={uploadImg} alt="" />
          </label>
          <div className="mb-2 w-100">
            <input type="text" className='form-control' placeholder='User GitHub Profile Link' />
          </div>
          <div className="mb-2 w-100">
            <input type="text" className='form-control' placeholder='User LinkedIn Profile Link' />
          </div>
          <div className="d-grid w-100">
            <button className='btn btn-warning'>Update profile</button>
          </div>
        </div>
      </Collapse>
    </>

  )
}

export default Profile
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap';
import uploadImg from '../assets/Userimageupload.png'
import serverUrl from '../services/serverUrl';
import { updateUserApi } from '../services/allApi';


const Profile = () => {
  const [preview, setPreview] = useState("")
  const [existingProfileImg, setExistingProfileImg] = useState("")
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: "", github: "", linkedin: "", profilePic: ""
  })
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({
        ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin
      })
      setExistingProfileImg(user.profilePic)
      setPreview("")
    }
  }, [open])

  useEffect(() => {
    if (userDetails.profilePic) {
      setPreview(URL.createObjectURL(userDetails.profilePic))
    } else {
      setPreview("")
    }
  }, [userDetails.profilePic])

  const handleUpdateProfile = async () => {
    const { username,email, password, github, linkedin, profilePic } = userDetails
    if (github && linkedin) {
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ? reqBody.append("profilePic", profilePic) : reqBody.append("profilePic", existingProfileImg)
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeaders = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {
          const result = await updateUserApi(reqBody, reqHeaders)
          console.log(result);
          if (result.status == 200) {
            alert("ProfileUpdated Successfully")
            sessionStorage.setItem("user", JSON.stringify(result.data))
            setOpen(!open)
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log(result);
      }
    } else {
      alert("Please fill the form")
    }
  }
  return (
    <>
      <div className='d-flex justify-content-evenly'>
        <h3 className='text-warning'>Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning'><i className='fa-solid fa-chevron-down'></i></button>
      </div>

      <Collapse in={open}>
        <div id="example-collapse-text" className='row container-fluid align-items-center justify-content-center shadow p-2 rounded'>
          <label className='text-center'>
            <input onChange={e => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })} type="file" style={{ display: 'none' }} />
            {
              existingProfileImg == "" ?
                <img className='rounded' width={'200px'} height={'200px'} src={preview ? preview : uploadImg} alt="" />
                : <img className='rounded' width={'200px'} height={'200px'} src={preview ? preview : `${serverUrl}/uploads/${existingProfileImg}`} alt="" />

            }
          </label>
          <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e => setUserDetails({ ...userDetails, github: e.target.value })} type="text" className='form-control' placeholder='User GitHub Profile Link' />
          </div>
          <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e => setUserDetails({ ...userDetails, linkedin: e.target.value })} type="text" className='form-control' placeholder='User LinkedIn Profile Link' />
          </div>
          <div className="d-grid w-100">
            <button onClick={handleUpdateProfile} className='btn btn-warning'>Update profile</button>
          </div>
        </div>
      </Collapse>
    </>

  )
}

export default Profile
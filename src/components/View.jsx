import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { userProjectsApi } from '../services/allApi'
import { addResponseContext, editResponseImageContext } from '../context/ContextApi'

const View = () => {
  const [userProjects, setUserProjects] = useState([])

  const {addProjectResponse, setAddProjectResponse}=useContext(addResponseContext)
  const {editProjectResponse, setEditProjectResponse } =useContext(editResponseImageContext)

  useEffect(() => {
    getUserProjects()
  }, [addProjectResponse,editProjectResponse])

  const getUserProjects = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await userProjectsApi(reqHeader)
        if (result.status == 200) {
          setUserProjects(result.data)
        }
      } catch (err) {
        console.log(err);

      }
    }
  }
  return (
    <>
      <div className='d-flex justify-content-between '>
        <h2 className='text-warning'>All Projects</h2>
        <div>
          <Add />
        </div>
      </div>
      <div className="mt-2 allProjects">
        {
          userProjects?.length > 0 ?
            userProjects.map(project => (
              <div key={project?._id} className="border ronded p-1 d-flex justify-content-between mb-2">
                <h3 className='d-flex align-items-center'>{project?.title}</h3>
                <div className="d-flex align-items-center">
                  <div className='btn'><Edit project={project} /></div>
                  <div className="btn"><a target='_blank' href={project?.github}><i className='fa-brands fa-github'></i></a></div>
                  <button className='btn text-danger'><i className='fa-solid fa-trash'></i></button>
                </div>
              </div>
            )) :
            <div className='text-warning fw-bolder'>
              User not Uploaded any projects
            </div>
        }
      </div>
    </>
  )
}

export default View
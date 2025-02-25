import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsApi } from '../services/allApi'

const Projects = () => {
  
  const [searchKey,setSearchKey]=useState("")
  const [allProjects, setAllProjects] = useState([])
  useEffect(() => {
    getAllProjects()
  }, [searchKey])

  const getAllProjects = async () => {
    const token = sessionStorage.getItem("token")    
    if (token) {
      const reqHeaders = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await allProjectsApi(searchKey,reqHeaders)
        console.log(result);
        
        if (result.status == 200) {
          setAllProjects(result.data)
        }
      } catch (err) {
        console.log(err);

      }
    }
  }
  return (
    <div>
      <Header />
      <div style={{ paddingTop: '100px' }} className='container-fluid'>
        <div className="d-flex justify-content-between">
          <h1>All projects</h1>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search projects by their Languages' className='form-control w-25' />
        </div>
        <Row className='mt-3'>
          {
            allProjects?.length > 0 ?
              allProjects?.map(project => (
                <Col key={allProjects?.id} className='mb-3 ' sm={12} md={6} lg={4}>
                  <ProjectCard displayData={project} />
                </Col>
              ))
              :
              <div className='text-danger fw-bolder'>Project not found!!!</div>
            }
        </Row>
      </div>
    </div>
  )
}

export default Projects
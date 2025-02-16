import React from 'react'
import Add from './Add'
import Edit from './Edit'

const View = () => {
  return (
    <>
        <div className='d-flex justify-content-between '>
          <h2 className='text-warning'>All Projects</h2>
          <div>
            <Add/>
          </div>
        </div>
        <div className="mt-2 allProjects">
          <div className="border ronded p-1 d-flex justify-content-between mb-2">
            <h3 className='d-flex align-items-center'>Title</h3>
            <div className="d-flex align-items-center">
              <div className='btn'><Edit/></div>
              <div className="btn"><a target='_blank' href="https://github.com/ardra-m-siva/portfolio-ardra-m-s"><i className='fa-brands fa-github'></i></a></div>
              <button className='btn text-danger'><i className='fa-solid fa-trash'></i></button>

            </div>

          </div>
        </div>
    </>
  )
}

export default View
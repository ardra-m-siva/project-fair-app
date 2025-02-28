import React from 'react'
import pnfImage from '../assets/pageNotFound.png'
const Pnf = () => {
  return (
    <>
        <div className='d-flex justify-content-center'>
            <img  src={pnfImage } alt="" />
        </div>
        <h1 className='text-center'>Error 404: Page Not Found</h1>

    </>
  )
}

export default Pnf
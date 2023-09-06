import React from 'react'
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <>
    
      <div class="text-center" >
       <h1 >404</h1>
       <h2>we are sorry,page not found</h2>
       <p>the page you are looking might have changed name or not available</p>
      </div>
      <div class="text-center"  >
      < NavLink to="/"><span id="B-home">back to home</span> </NavLink> 
      </div>
     
    </>
  )
}

export default Error

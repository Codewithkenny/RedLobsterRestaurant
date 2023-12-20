import React from 'react'
import GuestComp from '../../components/GuestComp/GuestComp'


const GuestMenu = () => {
    console.log('Rendering GuestMenu');
  return (
    <>
      <a href="/login" className="p__opensans">
          Log In / Register
      </a>
      <GuestComp />
      
      
    </>
  )
}

export default GuestMenu
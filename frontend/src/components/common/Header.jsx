import React from 'react'
import Topbar from '../layout/Topbar.jsx'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div className='border-b border-gray-200'>
        {/**top bar */}
        <Topbar/>
         {/**navbar*/}
         <Navbar/>
          {/**cart drawer*/}
      
    </div>
  )
}

export default Header

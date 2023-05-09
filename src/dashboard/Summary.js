/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DashboardNav from './DashboardNav'

import welcome from '../assets/welcome.jpg';

function Summary() {
  return (
    <div className='bg-gray-100'>

        <DashboardNav />


        <div>
        <a style={{ backgroundImage: `url(${welcome})` }} className="relative block overflow-hidden h-screen rounded-xl bg-cover bg-center bg-no-repeat">
          
        </a>
        </div>
    </div>
  )
}

export default Summary
import React from 'react'
import DashboardNav from './DashboardNav'

import { FaMoneyCheck } from 'react-icons/fa'

function Earnings() {
  return (
    <div className='bg-gray-100'>

      <DashboardNav />
      
     <div className='lg:p-24 p-4'>

      <div className='bg-white border flex justify-between lg:p-4 p-2'>
        <div>
        <FaMoneyCheck className=' text-blue-600 lg:w-[35px] lg:h-[35px]'/>
        </div>
        <div>
        <p className='text-lg'>+ 0.02556988 ETH</p>
        <p className='text-blue-400 text-sm'>+ $47.41 USD</p>
        </div>
        </div>
        

     </div>

    </div>
  )
}

export default Earnings
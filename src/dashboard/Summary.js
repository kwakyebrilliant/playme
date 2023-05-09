/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DashboardNav from './DashboardNav'


function Summary() {
  return (
    <div className='bg-gray-100'>

        <DashboardNav />

        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold lg:pt-16 pt-8 ">
              You have a word to share?
            </h1>
            <p className='pt-4 text-gray-500'>
                Think of any english word from the dictionary and put it out there
            </p>
          </div>
        </div>

        
    </div>
  )
}

export default Summary
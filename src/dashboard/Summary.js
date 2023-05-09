/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DashboardNav from './DashboardNav'

import { FaPlusCircle } from 'react-icons/fa'


function Summary() {
  return (
    <div className='bg-gray-100'>

        <DashboardNav />

        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold lg:pt-16 pt-8 ">
              You have a word to share?
            </h1>
            <p className='pt-4 text-lg text-gray-500'>
                Think of any english word from the dictionary and put it out there for someone to solve it.
            </p>
            <p className='text-lg text-gray-500'>
                Specify the reward to be rewarded or reward.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className='lg:pt-16 pt-8'>

            <div className='bg-white rounded-lg shadow-md p-8'>

            <div className='bg-white rounded-lg border p-8'>

            <div className='bg-white rounded-lg shadow-md p-16'>

            <FaPlusCircle className=' text-blue-600 h-8 w-8' />

            </div>

            <p className='text-lg pt-4 uppercase font-bold'>
                Add a new word
            </p>

            </div>

            </div>
            
          </div>
        </div>

        
    </div>
  )
}

export default Summary
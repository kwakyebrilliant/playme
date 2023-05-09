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

        <div className="relative">
        <div className="flex items-center lg:pt-8 lg:px-24 p-4">
         <p className='text-2xl font-bold'>Words</p>  <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

        <div className='lg:px-24 lg:pt-8 p-4'>
          <div className="flex flex-col shadow-md rounded-lg bg-white m-auto p-4">

            <form>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm rounded-lg bg-gray-100" placeholder="Search word" />
                </div>
              </form>
            </div>
        </div>

        <div className='lg:pt-8 lg:px-24 p-4'>

        <div className='bg-white border flex justify-between lg:p-4 p-2'>
          <div>
          <p className='lg:text-lg sm:text-sm'>Opportunities</p>
          </div>
          <div>
          <p className='text-lg'>+ 0.02556988 ETH</p>
          <p className='text-blue-400 text-sm'>+ $47.41 USD</p>
          </div>
          </div>

          <div className='bg-white border flex justify-between lg:p-4 p-2'>
          <div>
          <p className='lg:text-lg sm:text-sm'>Opportunities</p>
          </div>
          <div>
          <p className='text-lg'>+ 0.02556988 ETH</p>
          <p className='text-blue-400 text-sm'>+ $47.41 USD</p>
          </div>
          </div>

          <div className='bg-white border flex justify-between lg:p-4 p-2'>
          <div>
          <p className='lg:text-lg sm:text-sm'>Opportunities</p>
          </div>
          <div>
          <p className='text-lg'>+ 0.02556988 ETH</p>
          <p className='text-blue-400 text-sm'>+ $47.41 USD</p>
          </div>
          </div>

          <div className='bg-white border flex justify-between lg:p-4 p-2'>
          <div>
          <p className='lg:text-lg sm:text-sm'>Opportunities</p>
          </div>
          <div>
          <p className='text-lg'>+ 0.02556988 ETH</p>
          <p className='text-blue-400 text-sm'>+ $47.41 USD</p>
          </div>
          </div>

          <div className='bg-white border flex justify-between lg:p-4 p-2'>
          <div>
          <p className='lg:text-lg sm:text-sm'>Opportunities</p>
          </div>
          <div>
          <p className='text-lg'>+ 0.02556988 ETH</p>
          <p className='text-blue-400 text-sm'>+ $47.41 USD</p>
          </div>
          </div>

          <div className='bg-white border flex justify-between lg:p-4 p-2'>
          <div>
          <p className='lg:text-lg sm:text-sm'>Opportunities</p>
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

export default Summary
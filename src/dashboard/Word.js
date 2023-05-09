/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DashboardNav from './DashboardNav'


function Word() {
  return (
    <div className='bg-gray-100'>

        <DashboardNav />

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

        <div className="relative">
        <div className="flex items-center lg:pt-8 lg:px-24 p-4">
         <p className='text-2xl font-bold'>Latest</p>  <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>

        <div className='lg:pt-8 lg:px-24 p-4'>

        <div className='w-full flex flex-col justify-between'>
        

       

        </div> 
        
        </div>
      

    </div>
  )
}

export default Word
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DashboardNav from './DashboardNav'

import trophy from '../assets/trophy.jpg';


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

        <div className='grid md:grid-cols-2 gap-x-10 lg:p-4 p-2'>
        
        <div>
        {/* <a className="block">
        <img
          alt="Signage"
          src={trophy}
          className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-52"
        />
        </a> */}
        <a style={{ backgroundImage: `url(${trophy})` }} className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
            <div className="sm:pt-18 pt-12 text-white lg:pt-24">
              <h3 className="text-xl font-bold sm:text-2xl">$47.41 USD</h3>

              <p className="text-sm">Reward</p>
            </div>
          </div>
        </a>
        </div>

        <div>
            <a className="relative flex items-start justify-between rounded-xl bg-white border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
      <div className="pt-4 text-gray-500">
        <svg
          className="h-8 w-8 sm:h-10 sm:w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          ></path>
        </svg>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Science of Chemistry
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          You can manage phone, email and chat conversations all from a single
          mailbox.
        </p>
      </div>

      <span
        className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
      >
        4.3
      </span>
    </a>
        </div>
       

        </div> 
        
        </div>
      

    </div>
  )
}

export default Word
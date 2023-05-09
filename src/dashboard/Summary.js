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

            <a className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-24">
              <div>
                <h3 className="text-3xl font-bold text-indigo-600 sm:text-5xl">100+</h3>

                <div className="mt-4 border-t-2 border-gray-100 pt-4">
                  <p className="text-sm font-medium uppercase text-gray-500">New employees</p>
                </div>
              </div>

              <div
                className="mt-8 inline-flex items-center gap-2 text-indigo-600 sm:mt-12 lg:mt-16"
              >
                <p className="font-medium sm:text-lg">How we did it</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
            
          </div>
        </div>

        
    </div>
  )
}

export default Summary
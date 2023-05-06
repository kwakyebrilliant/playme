import React from 'react'
import Navigation from './Navigation'

import { FaTrophy } from 'react-icons/fa'

function Earners() {
  return (
    <div>
        <Navigation />


        <div className="flex flex-col bg-white m-auto px-20 pt-36">

            <div>
                <label className="sr-only" for="user">User</label>
                <input
                className="w-full rounded-lg shadow-md p-3 text-sm"
                placeholder="Search user"
                type="text"
                id="user"
                />
            </div>
        </div>

        {/* Top 3 Earners */}
        <div className="flex flex-col bg-white m-auto pt-10">
        <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
        <FaTrophy className=' text-yellow-600 lg:w-[35px] lg:h-[35px] mx-2' />
                Top 3
        </h1>
        </div>


       <h1>Earners</h1> 
    </div>
  )
}

export default Earners
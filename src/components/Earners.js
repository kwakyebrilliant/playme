import React from 'react'
import Navigation from './Navigation'

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


       <h1>Earners</h1> 
    </div>
  )
}

export default Earners
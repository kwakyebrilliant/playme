import React from 'react'
import Navigation from './Navigation'

import { FaHeadphones, FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
        <Navigation />


        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <header className="py-6">
        <div className="flex justify-center items-center text-2xl text-purple-500 font-bold">
          <FaHeadphones className="mr-2" />
          PlayMe
        </div>
      </header>

      <main className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-6">
          Unlimited music streaming, ad-free.
        </h1>
        <p className="text-lg text-gray-500 text-center mb-8">
          Get access to over 50 million songs, albums, and playlists. Listen
          without interruptions, and download your favorite tracks to listen
          offline.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 mb-8">
          <div className="flex items-center border rounded-full px-4 py-2 mb-4 md:mb-0">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for artists, songs, or albums"
              className="w-full bg-gray-100 text-black placeholder-black focus:outline-none"
            />
          </div>
          <button className="bg-purple-500 hover:bg-purple-600 hover:text-black text-white rounded-full px-8 py-2 font-semibold">
            Start Free Trial
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1531908968050-4d8ce6789b9e"
          alt="Music streaming platform"
          className="w-full max-w-2xl rounded-lg shadow-lg"
        />
      </main>
      </div>

        
        <div className='w-full px-20'>
            HomePage
        </div>
        
    </div>
  )
}

export default HomePage
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import DashboardNav from './DashboardNav'

import trophy from '../assets/trophy.jpg';

import { FaRegFileWord } from 'react-icons/fa'


function Word() {


  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


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
        <a style={{ backgroundImage: `url(${trophy})` }} className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/25"></div>

          <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
            <div className="sm:pt-18 pt-12 text-white lg:pt-24">
              <h3 className="text-xl font-bold sm:text-2xl">0.02556988 ETH</h3>

              <p className="text-sm">$47.41 USD</p>
            </div>
          </div>
        </a>
        </div>

        <div>
            <a className="relative flex items-start justify-between rounded-xl bg-white border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
      <div className="pt-4 text-gray-500">
      <FaRegFileWord className=' text-gray-500 lg:w-8 lg:h-8 sm:h-10 sm:w-10'/>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          C__mis__y
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          Once you are sure of the word, proceed to stake the required amount
          and solve the word in the 30 seconds period to be rewarded
        </p>
      </div>

      <span
        className="rounded-full cursor-pointer bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600"
        onClick={togglePopup}
      >
        Solve
      </span>
    </a>
        </div>

        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/2 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
            C__mis__y
            </h2>
            <div className="relative">

          <div className="flex items-center py-2">
          <div className="w-full border-b border-gray-300"></div>
          </div>

        </div>
        <div>
            <p>This is the content of the popup.</p>

            <div className="flex items-center py-2">
          <div className="w-full border-b border-gray-300"></div>
          </div>
        </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
       

        </div> 
        
        </div>

        <div className="relative">
        <div className="flex items-center lg:pt-8 lg:px-24 p-4">
         <p className='text-2xl font-bold'>Others</p>  <div className="w-full border-b border-gray-300"></div>
        </div>
        </div>


        <div className='lg:pt-8 lg:px-24 p-4'>

        <div className='grid md:grid-cols-2 gap-x-10 lg:p-4 p-2'>
        
        <div>
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
      <FaRegFileWord className=' text-gray-500 lg:w-8 lg:h-8 sm:h-10 sm:w-10'/>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          C__mis__y
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          Once you are sure of the word, proceed to stake the required amount
          and solve the word in the 30 seconds period to be rewarded
        </p>
      </div>

      <span
        className="rounded-full cursor-pointer bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600"
      >
        Solve
      </span>
    </a>
        </div>
       

        </div> 
        
        </div>


        <div className='lg:pt-8 lg:px-24 p-4'>

        <div className='grid md:grid-cols-2 gap-x-10 lg:p-4 p-2'>
        
        <div>
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
      <FaRegFileWord className=' text-gray-500 lg:w-8 lg:h-8 sm:h-10 sm:w-10'/>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          C__mis__y
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          Once you are sure of the word, proceed to stake the required amount
          and solve the word in the 30 seconds period to be rewarded
        </p>
      </div>

      <span
        className="rounded-full cursor-pointer bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600"
      >
        Solve
      </span>
    </a>
        </div>
       

        </div> 
        
        </div>


        <div className='lg:pt-8 lg:px-24 p-4'>

        <div className='grid md:grid-cols-2 gap-x-10 lg:p-4 p-2'>
        
        <div>
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
      <FaRegFileWord className=' text-gray-500 lg:w-8 lg:h-8 sm:h-10 sm:w-10'/>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          C__mis__y
        </h3>

        <p className="mt-2 hidden text-sm sm:block">
          Once you are sure of the word, proceed to stake the required amount
          and solve the word in the 30 seconds period to be rewarded
        </p>
      </div>

      <span
        className="rounded-full cursor-pointer bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600"
      >
        Solve
      </span>
    </a>
        </div>
       

        </div> 
        
        </div>
      

    </div>
  )
}

export default Word
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import DashboardNav from './DashboardNav'

import { FaPlusCircle } from 'react-icons/fa'

import welcome2 from '../assets/welcome2.jpg'


function Summary() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-gray-100'>

        <DashboardNav />

        <div style={{ backgroundImage: `url(${welcome2})` }} className="relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat">

        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold lg:pt-16 pt-8 ">
              You have a word to share?
            </h1>
            <p className='pt-4 text-lg text-gray-700'>
                Think of any english word from the dictionary and put it out there for someone to solve it.
            </p>
            <p className='text-lg text-gray-700'>
                Specify the reward to be rewarded or reward.
            </p>
          </div>
        </div>

        <div className="flex pb-16 justify-center items-center">
          <div className='lg:pt-16 pt-8'>

            <div className='bg-white rounded-lg shadow-md p-8'>

            <div className='bg-white rounded-lg border p-8'>

            <div className='bg-white rounded-lg shadow-md p-16'>

            <FaPlusCircle onClick={() => setShowModal(true)} className=' text-blue-600 cursor-pointer h-8 w-8' />

            </div>

            {showModal ? (
                                <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-full my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-semibold">
                                            Add Word
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                            </span>
                                        </button>
                                        </div>
                                        {/*body*/}
                                        <div className="relative space-y-4 p-6 flex-auto">
                                       
                                        <p className='text-md font-medium'>
                                        Word
                                         </p>

                                    <div>
                                        <label className="sr-only" for="word">Word</label>
                                        <input
                                        className="w-full rounded-lg  text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                        placeholder="eg. Enter word"
                                        type="text"
                                        id="word"
                                        />
                                    </div>
             

                                    <p className='text-md font-medium'>
                                        Reward Amount
                                    </p>

                                    <div>
                                        <label className="sr-only" for="amount">Amount</label>
                                        <input
                                        className="w-full rounded-lg text-black border border-gray-300 focus:outline-none focus:ring active:bg-gray-300 p-3 text-sm"
                                        placeholder="eg. 15 ETH"
                                        type="number"
                                        id="amount"
                                        />
                                    </div>

                                 

                                    <a className="group w-full relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-600" href="/">
                                        <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                                            <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
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
                                        </span>
                                        
                                        <span className="text-sm font-medium transition-all group-hover:ml-4">
                                            Submit
                                        </span>
                                        </a>

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}

            <p className='text-lg pt-4 uppercase font-bold'>
                Add a new word
            </p>

            </div>

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
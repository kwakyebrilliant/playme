import React from 'react'
import Navigation from './Navigation'

import person from '../assets/person.jpg';
import Footer from './Footer';

function Previous() {
  return (
    <div>
        <Navigation />


        <div className="flex flex-col bg-white m-auto px-20 pt-36">

            <div>
                <label className="sr-only" for="word">Word</label>
                <input
                className="w-full rounded-lg shadow-md p-3 text-sm"
                placeholder="Search any word"
                type="text"
                id="word"
                />
            </div>
        </div>


         {/* Previous solved worlds */}
         <div className="flex flex-col bg-white m-auto pt-10">
        <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
                Previous Solved Words
        </h1>
        <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-200 md:ml-20 ml-10 ">

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-green-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions in the Black Community
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Africa
                        </p>

                    </div>

                </div>
            </div>

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-blue-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Second-Smallest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Europe
                        </p>

                    </div>

                </div>
            </div>

           
            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-orange-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Largest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Asia
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-pink-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Fouth-Largest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            South America
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-yellow-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Actions In The Third-Largest Continent
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            North America
                        </p>

                    </div>

                </div>
            </div>


            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-red-700 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Climate Action Targeting Renewables
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Renewables
                        </p>

                    </div>

                </div>
            </div>

            <div className="inline-block px-3">
                <div className="w-64 h-max max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-400 hover:shadow-xl transition-shadow duration-300 ease-in-out">

                    <div className="relative p-4 sm:p-6 lg:p-8">

                        <p className="text-sm font-medium capitalize tracking-widest text-white">
                            Any Category Not Mentioned
                        </p>

                        <p className="text-xl font-bold text-white sm:text-2xl">
                            Others
                        </p>

                    </div>

                </div>
            </div> 
            
           
           
            
            </div>
        </div>
    </div>



    <div className='w-full h-screen px-20 bg-white flex flex-col justify-between pt-16'>
        <div className='grid md:grid-cols-2 max-w-[1240px]'>

            <div className='flex flex-col justify-center md:items-start w-full px-2'>
                
                <img className='w-full justify-center' src={person} alt="Person" />


            </div>
            
            <div className='shadow-md text-center lg:mx-0 lg:text-left'>
                

                <div className='relative p-10 grid grid-cols-1 lg:grid-cols-4 gap-y-8'>
                    
              
                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Paid</p>
                    </span>


                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Success</p>
                    </span>


                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Paid</p>
                    </span>


                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Newcastle</p>
                    </span>




                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Paid</p>
                    </span>


                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Inheritance</p>
                    </span>


                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Paid</p>
                    </span>


                    <span
                    className="inline-flex items-center justify-center rounded-full bg-black px-2.5 mx-2 py-0.5 text-white"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ms-1 me-1.5 h-4 w-4"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <p className="whitespace-nowrap text-sm">Experimetal</p>
                    </span>


                </div>            


            </div>
           

           
        </div>


    </div>

    {/* Footer */}
    <Footer />
        
    </div>
  )
}

export default Previous
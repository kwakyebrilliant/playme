/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from './Navigation'

import { FaTrophy, FaPeopleCarry } from 'react-icons/fa'
import Footer from './Footer'

function Earners() {
  return (
    <div>
        <Navigation />


        <div className="flex flex-col bg-white m-auto px-10 pt-36">

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
        <h1 className="flex py-5 lg:mx-10 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
        <FaTrophy className=' text-yellow-600 lg:w-[35px] lg:h-[35px] mx-2' />
                Top 3
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-10'>
            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8" href="#">
            <div className="pt-4 text-gray-500">
           
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                0.0007ETH
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                0x22B...6ba9
                </p>
            </div>

            <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
            >
                #1
            </span>
            </a>

            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8" href="#">
            <div className="pt-4 text-gray-500">
           
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                0.0007ETH
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                0x22B...6ba9
                </p>
            </div>

            <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
            >
                #2
            </span>
            </a>

            <a className="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-md sm:p-6 lg:p-8" href="#">
            <div className="pt-4 text-gray-500">
           
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                0.0007ETH
                </h3>

                <p className="mt-2 hidden text-sm sm:block">
                0x22B...6ba9
                </p>
            </div>

            <span
                className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
            >
                #3
            </span>
            </a>


        </div>


        </div>


        {/* Leadership board */}
        <div className="flex flex-col bg-white m-auto pt-10">
        <h1 className="flex py-5 lg:mx-10 md:mx-10 mx-5 font-bold text-3xl text-gray-800">
        <FaPeopleCarry className=' text-yellow-600 lg:w-[35px] lg:h-[35px] mx-2' />
                Leadership Board
        </h1>

   

        <div className="overflow-x-auto px-10">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 text-xl font-medium text-gray-900">
                Number
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-xl font-medium text-gray-900">
                Address
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-xl font-medium text-gray-900">
                Amount
                </th>
            </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            <tr style={{height: 70}}>
                <td className="whitespace-nowrap px-4 py-2 text-lg font-medium text-center text-gray-900">
                #1
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Developer</td>
            </tr>

            <tr style={{height: 70}}>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center font-medium text-gray-900">
                #2
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">04/11/1980</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Web Designer</td>
            </tr>

            <tr style={{height: 70}}>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center font-medium text-gray-900">
                #3
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">24/05/1995</td>
                <td className="whitespace-nowrap px-4 py-2 text-lg text-center text-gray-700">Singer</td>
            </tr>
            </tbody>
        </table>
        </div>


        </div>

        {/* Footer */}
        <Footer />


    </div>
  )
}

export default Earners
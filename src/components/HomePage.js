/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { FaFileWord } from 'react-icons/fa'

const HomePage = () => {
  return (
    <div>
        <Navigation />


<section className="bg-white pt-16">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
      <FaFileWord className=' text-blue-600 lg:w-[35px] lg:h-[35px]' />

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          WELCOME TO PLAYME
        </h1>

        <p className="my-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>

        <h1 className='py-3 text-4xl md:text-6xl font-bold'>Climate <strong className="font-extrabold text-blue-600 sm:block">Actions</strong></h1>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>Champion, solicit and undertake </p>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>actions to help safeguard our planet.</p>
                <div className="flex flex-wrap gap-4 mt-8 text-center">
                <a className="group relative inline-flex items-center overflow-hidden rounded bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-600" href="#">
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
                    Get Started
                </span>
                </a>

             
                </div>
       
      </div>
    </main>
  </div>
</section>

        
        <div classNameName='w-full px-20'>
            HomePage
        </div>


        {/* Footer */}
        <Footer />
        
    </div>
  )
}

export default HomePage
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navigation from './Navigation'

import word from '../assets/word.jpg';
import solve from '../assets/solve.jpg';
import reward from '../assets/reward.jpg';

import Footer from './Footer'

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


      <h1 className='py-3 text-4xl md:text-6xl font-bold'>Word <strong className="font-extrabold text-blue-600 sm:block">Scribble</strong></h1>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>Stake to solve words others have placed </p>
                <p className='max-w-lg sm:leading-relaxed sm:text-xl'>reward on and get rewarded or lose your stake.</p>
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

      

        <h1 className="text-2xl pt-10 font-bold text-gray-900 sm:text-3xl md:text-4xl">
          WELCOME TO PLAYME
        </h1>

        <p className="my-4 leading-relaxed text-gray-500">
          The best part of a work is getting rewarded for your efforts.
          Join this new platform to solve words and get rewarded. All
          activities on the platform run on blockchain
        </p>

        
       
      </div>
    </main>
  </div>
</section>

        
        <div className='border'>

        <h1 className="flex py-5 lg:mx-20 md:mx-10 mx-5 font-bold text-8xl text-gray-800">
                How we work,
        </h1>


         <div className='px-20 py-20 m-auto'>

          <article className="flex lg:w-[900px] m-auto bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Solve</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Words</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src={word}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a>
                <h3 className="font-bold uppercase text-gray-900">
                  user generate a word
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                A user will have the opportunity to generate an english dictionary word
                where he or she will specify the reward that will be given to anyone that
                correctly spells the word.
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a className="block bg-blue-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-400">
                #1
              </a>
            </div>
          </div>
        </article>

        <article className="flex mt-20 lg:w-[900px] m-auto bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Solve</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Words</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src={solve}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a>
                <h3 className="font-bold uppercase text-gray-900">
                  Solve a user generated word
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a className="block bg-blue-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-400">
                #2
              </a>
            </div>
          </div>
        </article>

        <article className="flex mt-20 lg:w-[900px] m-auto bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>Solve</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Words</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Guitar"
              src={reward}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a>
                <h3 className="font-bold uppercase text-gray-900">
                  Receive reward for solved word
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                Molestias explicabo corporis voluptatem?
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a className="block bg-blue-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-blue-400">
                #3
              </a>
            </div>
          </div>
        </article>

         </div>
            
        </div>


        {/* Footer */}
        <Footer />
        
    </div>
  )
}

export default HomePage
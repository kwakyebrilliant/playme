import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'


const HomePage = () => {
  return (
    <div>
        <Navigation />

        
        <div className='w-full px-20'>
            HomePage
        </div>


        {/* Footer */}
        <Footer />
        
    </div>
  )
}

export default HomePage
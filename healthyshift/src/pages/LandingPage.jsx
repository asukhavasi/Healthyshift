import React from 'react'
import Navbar from '../components/Navbar'
import MainBanner from '../components/MainBanner'
import WorkoutComp from '../components/WorkoutComp'
import BannerThree from '../components/BannerThree'
import Copyright from '../components/Copyright'

const LandingPage = () => {
  return (
    <>
    <div className='main'>
      
        <Navbar/>
        <MainBanner />
        <WorkoutComp />
        <BannerThree />
    
      
      </div>
      <div className="copyright">
          <Copyright />
      </div>
    </>
  )
}

export default LandingPage
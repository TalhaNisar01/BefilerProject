import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Playstore from '../components/Playstore'
import Talent from '../components/Talent'
import Feature from '../components/Feature'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import CopyRight from '../components/CopyRight'
import Feedback from '../components/Feedback'

import Popular from '../components/Popular'



const Home = () => {
  return (
    <>
    
      <Navbar />
      <Header />
       <Services />
       <Playstore/>
       <Popular />
       <Feedback/>
       <Talent/>
       <Feature/>
      <Blogs/>
      <Footer />
      <CopyRight />
      </>
  )
}

export default Home

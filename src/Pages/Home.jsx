import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from './About/About'
import Features from './Features/Features'
import Testimonial from './Testimonial/Testimonial'
import Security from './Security/Security'
import Achievements from './Achievements/Achievements'
import Contact from './Contact/Contact'
import FAQs from './FAQs/FAQs'
import Footer from './Footer/Footer'


const Home = () => {
  return (
    <>
      <div className='w-full h-screen box-border overflow-x-hidden'>
        <Hero />
        <About />
        <Features />
        <Security />
        <Testimonial />
        <Achievements />
        <Contact />
        <FAQs />
        <Footer />
      </div>
    </>
  )
}

export default Home


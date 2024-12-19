'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Objectives from '../components/Objectives'
import Services from '../components/Services'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Objectives/>
      <Events/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default Home

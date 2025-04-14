import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Activities from './components/Activities'
import Events from './components/Events'
import Gallery from './components/Gallery'
import NewMosqueProject from './components/NewMosqueProject'
import Donation from './components/Donation'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="activites">
          <Activities />
          <Events />
          <section id="galerie">
          <Gallery />
        </section>
        </section>
        <section id="projet-mosquee">
          <NewMosqueProject />
        </section>       
         <section id="faire-un-don">
          <Donation />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
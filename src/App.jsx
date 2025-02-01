import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Activities from './components/Activities'
import NewMosqueProject from './components/NewMosqueProject'
import Contact from './components/Contact'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="activites">
          <Activities />
        </section>
        <section id="projet-mosquee">
          <NewMosqueProject />
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
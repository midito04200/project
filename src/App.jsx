import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Activities from './components/Activities.jsx'
import Gallery from './components/Gallery.jsx'
import NewMosqueProject from './components/NewMosqueProject.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1">
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
          </section>
          <section id="galerie">
            <Gallery />
          </section>
          <section id="projet-mosquee">
            <NewMosqueProject />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
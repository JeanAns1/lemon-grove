import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  )
}

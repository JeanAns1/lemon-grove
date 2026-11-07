import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import Specials from './sections/Specials'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Menu />
        <Specials />
      </main>
      <Footer />
    </>
  )
}

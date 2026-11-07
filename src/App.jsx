import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Menu from './sections/Menu'
import Reservation from './sections/Reservation'
import Specials from './sections/Specials'
import Visit from './sections/Visit'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Reservation />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

import Header from './components/Header'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* <Header /> */}
      {/* <main> */}
        <Hero />
        <WhyUs />
        <Services />
        <Projects/>
        <Testimonials />
       
        <FAQ />
      {/* </main> */}
      <Footer />
    </div>
  )
}

export default App


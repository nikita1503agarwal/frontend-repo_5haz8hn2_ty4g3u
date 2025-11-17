import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Membership from './components/Membership'
import Categories from './components/Categories'
import WhyChoose from './components/WhyChoose'
import PartnersCTA from './components/PartnersCTA'
import Testimonials from './components/Testimonials'
import DownloadApp from './components/DownloadApp'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Membership />
      <Categories />
      <WhyChoose />
      <PartnersCTA />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default App

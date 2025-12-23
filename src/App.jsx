import './App.css'
import FeaturedJobs from './components/FeaturedJobs'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Nav from './components/Nav'
import SkillsGrid from './components/SkillsGrid'
import Testimonials from './components/Testimonial'

function App() {

  return (
    <>
      <div className=''>
        <Nav />
        <div className=''>
          <HeroSection />
          <SkillsGrid />
          <FeaturedJobs />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App

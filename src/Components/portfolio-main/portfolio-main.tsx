import React from 'react'
import Contact from '../contact/contact'
import Intro from '../intro/intro'
import NavBar from '../navbar/nav-bar'
import Portfolio from '../portfolio/portfolio'
import Testimonials from '../testimonials/testimonials'
import Works from '../works/works'
import './portfolio-main.scss'

const PortfolioMain: React.FC = () => {
  /* const [menuOpen, setMenuOpen] = useState(false) */
  return (
    <div className="container">
      <NavBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default PortfolioMain

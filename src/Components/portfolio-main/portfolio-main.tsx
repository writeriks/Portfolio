import React from 'react'
import Intro from '../intro/intro'
import NavBar from '../navbar/nav-bar'
import Portfolio from '../portfolio/portfolio'
import SideBarMenu from '../side-bar-menu/side-bar-menu'
import './portfolio-main.scss'

const PortfolioMain: React.FC = () => {
  return (
    <div className="container">
      <NavBar />
      <SideBarMenu />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/*         <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  )
}

export default PortfolioMain

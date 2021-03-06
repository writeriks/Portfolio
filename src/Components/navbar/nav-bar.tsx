import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useSelector } from 'react-redux'
import navBarHelper from './nav-bar-helper'
import classnames from 'classnames'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector'
import './nav-bar.scss'

const NavBar = () => {
  const isHamburgerMenuOpen = useSelector(displayReducerSelector.getIsHamburgerMenuOpen)
  const componentInViewPort = useSelector(displayReducerSelector.getComponentInViewport)

  const { toggleHamburgerMenu } = navBarHelper
  const active = classnames({ active: isHamburgerMenuOpen })
  const viewPortComponent = componentInViewPort.toLowerCase()
  const color = classnames(viewPortComponent)

  return (
    <div className={'nav-bar ' + active + ' ' + color} id="nav-bar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <ArrowBackIosIcon />
            <span>Emir</span>
            <ArrowForwardIosIcon />
          </a>
          <div className="item-container">
            <a href="https://github.com/writeriks" target="_blank" rel="noreferrer">
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div className="item-container">
            <a href="https://www.linkedin.com/in/emir-haktan-%C3%B6zt%C3%BCrk-b80685a6/" target="_blank" rel="noreferrer">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger-menu" onClick={() => toggleHamburgerMenu()}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

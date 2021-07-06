import React from 'react'
import navBarHelper from '../navbar/nav-bar-helper'
import './side-bar-element.scss'

interface SideBarElementProp {
  elementName: String,
}

const SideBarElement = ({ elementName }: SideBarElementProp) => {
  const { toggleHamburgerMenu } = navBarHelper
  const path = elementName.toLowerCase()
  return (
    <li onClick={() => toggleHamburgerMenu()}>
      <a href={`#${path}`}>{elementName}</a>
    </li>
  )
}

export default SideBarElement

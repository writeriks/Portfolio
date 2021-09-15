import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector'
import SideBarElement from './side-bar-element'
import './side-bar-menu.scss'
import { sideBarMenuConstants } from './side-bar-menu-constants'

const SideBarMenu = () => {
  const isHamburgerMenuOpen = useSelector(displayReducerSelector.getIsHamburgerMenuOpen)
  const active = classNames({ active: isHamburgerMenuOpen })
  const componentInViewPort = useSelector(displayReducerSelector.getComponentInViewport)
  const viewPortComponent = componentInViewPort.toLowerCase()
  const color = classNames(viewPortComponent)

  return (
    <div className={'side-bar-menu ' + active + ' ' + color}>
      <ul>
        {
          sideBarMenuConstants.map((element, index) =>
            (<SideBarElement key={index} elementName={element.elementName} />)
          )
        }
      </ul>
    </div>
  )
}

export default SideBarMenu

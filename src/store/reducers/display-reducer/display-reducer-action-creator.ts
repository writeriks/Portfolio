import { DisplayAction, DisplayActions } from './display-reducer-types'

class DisplayReducerActionCreator {
  toggleHamburgerMenu(): DisplayAction {
    return {
      type: DisplayActions.TOGGLE_HAMBURGER_MENU
    }
  }

  setComponentInViewPort(componentInViewPort: string): DisplayAction {
    return {
      type: DisplayActions.SET_COMPONENT_IN_VIEWPORT,
      componentInViewPort
    }
  }

  setIsTechListShown(isTechListShown: boolean): DisplayAction {
    return {
      type: DisplayActions.SET_TECH_LIST_SHOWN,
      isTechListShown
    }
  }
}

const displayReducerActionCreator = new DisplayReducerActionCreator()
export default displayReducerActionCreator

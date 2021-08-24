import { DisplayAction, DisplayActions, DisplayState } from './display-reducer-types'

export const initialDisplayState = {
  isHamburgerMenuOpen: false,
  componentInViewPort: '',
  isTechListShown: false
}

const displayReducer = (state: DisplayState = initialDisplayState, action: DisplayAction): DisplayState => {
  switch (action.type) {
    case DisplayActions.TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        isHamburgerMenuOpen: !state.isHamburgerMenuOpen
      }

    case DisplayActions.SET_COMPONENT_IN_VIEWPORT:
      return {
        ...state,
        componentInViewPort: action.componentInViewPort
      }

    case DisplayActions.SET_TECH_LIST_SHOWN:
      return {
        ...state,
        isTechListShown: action.isTechListShown
      }

    default:
      return state
  }
}

export default displayReducer

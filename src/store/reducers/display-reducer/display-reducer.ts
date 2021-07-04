import { DisplayAction, DisplayActions, DisplayState } from './display-reducer-types'

export const initialDisplayState = {
  isHamburgerMenuOpen: false
}

const displayReducer = (state: DisplayState = initialDisplayState, action: DisplayAction): DisplayState => {
  switch (action.type) {
    case DisplayActions.TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        isHamburgerMenuOpen: !state.isHamburgerMenuOpen
      }

    default:
      return state
  }
}

export default displayReducer

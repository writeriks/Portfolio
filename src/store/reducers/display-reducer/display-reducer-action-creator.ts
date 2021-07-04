import { DisplayAction, DisplayActions } from './display-reducer-types'

class DisplayReducerActionCreator {
  toggleHamburgerMenu(): DisplayAction {
    return {
      type: DisplayActions.TOGGLE_HAMBURGER_MENU
    }
  }
}

const displayReducerActionCreator = new DisplayReducerActionCreator()
export default displayReducerActionCreator

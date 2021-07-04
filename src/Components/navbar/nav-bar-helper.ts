import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'

class NavBarHelper {
  toggleHamburgerMenu() {
    store.dispatch(displayReducerActionCreator.toggleHamburgerMenu())
  }
}

const navBarHelper = new NavBarHelper()
export default navBarHelper

import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class DisplayReducerSelector {
  getIsHamburgerMenuOpen = createSelector(
    rootStateReducer.getDisplayReducer,
    (displayReducer) => displayReducer.isHamburgerMenuOpen
  );
}

const displayReducerSelector = new DisplayReducerSelector()
export default displayReducerSelector

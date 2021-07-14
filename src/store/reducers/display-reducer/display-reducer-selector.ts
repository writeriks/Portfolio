import { createSelector } from 'reselect'
import rootStateReducer from '../root-reducer-selector'

class DisplayReducerSelector {
  getIsHamburgerMenuOpen = createSelector(
    rootStateReducer.getDisplayReducer,
    (displayReducer) => displayReducer.isHamburgerMenuOpen
  );

  getComponentInViewport = createSelector(
    rootStateReducer.getDisplayReducer,
    (displayReducer) => displayReducer.componentInViewPort
  );
}

const displayReducerSelector = new DisplayReducerSelector()
export default displayReducerSelector

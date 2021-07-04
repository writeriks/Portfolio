export enum DisplayActions {
  TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU',
}

export interface DisplayState {

  isHamburgerMenuOpen: Boolean
}

export type DisplayAction =
  | { type: DisplayActions.TOGGLE_HAMBURGER_MENU }

export enum DisplayActions {
  TOGGLE_HAMBURGER_MENU = 'TOGGLE_HAMBURGER_MENU',
  SET_COMPONENT_IN_VIEWPORT = 'SET_COMPONENT_IN_VIEWPORT',
}

export interface DisplayState {
  isHamburgerMenuOpen: Boolean
  componentInViewPort: string
}

export type DisplayAction =
  | { type: DisplayActions.TOGGLE_HAMBURGER_MENU }
  | { type: DisplayActions.SET_COMPONENT_IN_VIEWPORT, componentInViewPort: string }

export enum ComponentsInViewport {
  INTRO = 'INTRO-COMPONENT',
  PORTFOLIO = 'PORTFOLIO-COMPONENT',
  TESTIMONIALS = 'TESTIMONIALS-COMPONENT',
  WORKS = 'WORKS-COMPONENT',
  CONTACT = 'CONTACT-COMPONENT'
}

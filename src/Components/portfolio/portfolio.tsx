import React, { useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import Bubble from './bubble'
import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import { ComponentsInViewport } from '../../store/reducers/display-reducer/display-reducer-types'
import './portfolio.scss'
import PortfolioStoryWithTyping from './portfolio-story-witht-typing'
import { useSelector } from 'react-redux'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector'
import PortfolioStoryWithoutTyping from './portfolio-story-without-typing'

function Portfolio(props: any) {
  const isTechListShown = useSelector(displayReducerSelector.getIsTechListShown)
  const viewPortRef: any = useRef()
  const {
    inViewport
  } = useInViewport(
    viewPortRef,
    { rootMargin: '-100.0px' },
    { disconnectOnLeave: false },
    props
  )

  useEffect(() => {
    if (inViewport) {
      store.dispatch(displayReducerActionCreator.setComponentInViewPort(ComponentsInViewport.PORTFOLIO))
    }
  }, [])

  return (
    <div className="portfolio" id="portfolio" ref={viewPortRef}>
      <Bubble >
        {
          inViewport && (isTechListShown ? <PortfolioStoryWithoutTyping /> : <PortfolioStoryWithTyping />)
        }
      </Bubble>
    </div>
  )
}

export default Portfolio

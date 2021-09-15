import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useInViewport } from 'react-in-viewport'
import { store } from '../../store/createStore'
import PortfolioStoryWithTyping from './portfolio-story-witht-typing'
import PortfolioStoryWithoutTyping from './portfolio-story-without-typing'
import Bubble from './bubble'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import { ComponentsInViewport } from '../../store/reducers/display-reducer/display-reducer-types'
import './portfolio.scss'

function Portfolio(props: any) {
  const isTechListShown = useSelector(displayReducerSelector.getIsTechListShown)
  const viewPortRef = useRef<HTMLDivElement>(null)
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
  }, [inViewport])

  return (
    <div className="portfolio" id="portfolio" ref={viewPortRef}>
      <Bubble>
        {
          inViewport && (isTechListShown ? <PortfolioStoryWithoutTyping /> : <PortfolioStoryWithTyping />)
        }
      </Bubble>
    </div>
  )
}

export default Portfolio

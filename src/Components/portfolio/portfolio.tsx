import React, { useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import Bubble from './bubble'
import TechIUse from './tech-i-use'
import Typing from 'react-typing-animation'
import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import { ComponentsInViewport } from '../../store/reducers/display-reducer/display-reducer-types'
import './portfolio.scss'

function Portfolio(props: any) {
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
  })

  return (
    <div className="portfolio" id="portfolio" ref={viewPortRef}>
      <Bubble >
        {
          inViewport &&
          (
            <>
              <span className="self-description">
                <span>
                  <Typing speed={10}>
                    <p>I am a software engineer living in Warsaw, Poland. Currently i work for Microstrategy Poland.</p>
                    <Typing.Delay ms={500} />
                    <p>I love programming, travelling, doing sport and playing computer games...</p>
                    <Typing.Delay ms={500} />
                  </Typing>
                </span>
              </span>
              <span className="tech-i-use">
                <TechIUse />
              </span>
            </>
          )
        }
      </Bubble>
    </div>
  )
}

export default Portfolio

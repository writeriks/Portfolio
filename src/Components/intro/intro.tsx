import React, { useRef, useEffect } from 'react'
import './intro.scss'
import Robot from './robot'
import IntroName from './intro-name'
import { useInViewport } from 'react-in-viewport'
import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import { ComponentsInViewport } from '../../store/reducers/display-reducer/display-reducer-types'

const Intro = (props: any) => {
  const myRef: any = useRef()
  const {
    inViewport
  } = useInViewport(
    myRef,
    { rootMargin: '-100.0px' },
    { disconnectOnLeave: false },
    props
  )

  useEffect(() => {
    if (inViewport) {
      store.dispatch(displayReducerActionCreator.setComponentInViewPort(ComponentsInViewport.INTRO))
    }
  })

  return (
    <div className="intro" id="intro" ref={myRef}>
      <IntroName />
      <Robot />
    </div>
  )
}

export default Intro

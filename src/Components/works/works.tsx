import { useEffect, useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import { ComponentsInViewport } from '../../store/reducers/display-reducer/display-reducer-types'
import './works.scss'

function Works(props: any) {
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
      store.dispatch(displayReducerActionCreator.setComponentInViewPort(ComponentsInViewport.WORKS))
    }
  })

  return (
    <div className='works' id="works" ref={viewPortRef}>

    </div>
  )
}

export default Works

import { useEffect, useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import { ComponentsInViewport } from '../../store/reducers/display-reducer/display-reducer-types'
import './testimonials.scss'

function Testimonials(props: any) {
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
      store.dispatch(displayReducerActionCreator.setComponentInViewPort(ComponentsInViewport.TESTIMONIALS))
    }
  }, [inViewport])

  return (
    <div className="testimonials" id="testimonials" ref={viewPortRef}>

    </div>
  )
}

export default Testimonials

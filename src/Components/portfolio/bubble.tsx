import React from 'react'
import './bubble.scss'

const Bubble = (props: any) => {
  return (
    <div className="bubble">
      <div className="inner">
        {props.children}
      </div>
    </div>
  )
}

export default Bubble

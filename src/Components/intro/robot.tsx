import React from 'react'
import './robot.scss'

const Robot = () => {
  return (
    <div className="robot">
      <div className="antenna">
        <div className="white-point"></div>
      </div>
      <div className="vertical-line"></div>
      <div className="head-square">
        <div className="face-square">
          <div className="face-container">
            <div className="top">
              <span>
                <span></span>
              </span>
              <span>
                <span></span>
              </span>
            </div>
            <div className="bottom">
              <div className="mouth"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="body-rect">
        <div className="inner-body-rect">
          <div className="inner-body-container">
            <div className="left-arm">
              <div className="left-hand">
                <div className="left-hand-space"></div>
              </div>
            </div>
            <div className="right-arm">
              <div className="right-hand">
                <div className="right-hand-space"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="legs">
        <div className="left">
          <div className="foot"></div>
        </div>
        <div className="right">
          <div className="foot"></div>
        </div>
      </div>
    </div>
  )
}

export default Robot

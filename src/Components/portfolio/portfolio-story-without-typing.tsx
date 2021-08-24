import React from 'react'
import TechIUse from './tech-i-use'

const PortfolioStoryWithoutTyping = () => {
  return (
    <>
      <span className="self-description">
        <span>
          <p>I am a software engineer living in Warsaw, Poland. Currently i work for Microstrategy Poland.</p>
          <p>I love programming, travelling, doing sport and playing computer games...</p>
        </span>
      </span>
      <span className="tech-i-use">
        <TechIUse />
      </span>
    </>
  )
}

export default PortfolioStoryWithoutTyping

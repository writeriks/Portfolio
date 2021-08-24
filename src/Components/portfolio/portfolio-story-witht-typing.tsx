import React from 'react'
import TechIUse from './tech-i-use'
import Typing from 'react-typing-animation'

const PortfolioStoryWithTyping = () => {
  return (
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

export default PortfolioStoryWithTyping

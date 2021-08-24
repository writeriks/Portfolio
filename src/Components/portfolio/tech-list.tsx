import React from 'react'
import Star from './star'

const TechList = () => {
  const starsComponent = (count: number) => {
    const starArray = Array.from({ length: 5 }, (e, i) => i + 1)

    const component = starArray.map(number => {
      if (number <= count) {
        return <Star isFilled={true} />
      } else {
        return <Star isFilled={false} />
      }
    })

    return component
  }

  return (
    <ul>
      <li>
        <span className="tech">
          Javascript
        </span>
        <span className="stars">
          {starsComponent(4)}
        </span>
      </li>
      <li>
        <span className="tech">
          React
        </span>
        <span className="stars">
          {starsComponent(3)}
        </span>
      </li>
      <li>
        <span className="tech">
          Redux
        </span>
        <span className="stars">
          {starsComponent(3)}
        </span>
      </li>
      <li>
        <span className="tech">
          CSS
        </span>
        <span className="stars">
          {starsComponent(3)}
        </span>
      </li>
    </ul>
  )
}

export default TechList

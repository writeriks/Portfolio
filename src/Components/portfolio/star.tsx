import React from 'react'
import './star.scss'

interface starProps {
  isFilled: boolean,
}

const Star: React.FC<starProps> = ({ isFilled }: starProps) => {
  const startClass = isFilled ? 'star-filled' : 'star-empty'

  return (

    <div className={startClass}>
    </div>
  )
}

export default Star

import './intro.scss'
import Robot from './robot'
import IntroName from './intro-name'

function Intro() {
  return (
    <div className="intro" id="intro">
      <IntroName />
      <Robot />
    </div>
  )
}

export default Intro

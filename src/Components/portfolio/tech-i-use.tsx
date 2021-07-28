import React, { useEffect, useState } from 'react'
import Typing from 'react-typing-animation'
import TechList from './tech-list'

const TechIUse = () => {
  const [show, setShow] = useState(false)
  const delay = 7
  const a = 1

  useEffect(
    () => {
      const timer1 = setTimeout(() => setShow(true), delay * 1000)
      return () => {
        clearTimeout(timer1)
      }
    }, [])

  return (
    <>
      <Typing speed={10}>
        <Typing.Delay ms={6000} />
        <a >Technologies i use :</a>
      </Typing>
      {show && <TechList />}
    </>
  )
}

export default TechIUse

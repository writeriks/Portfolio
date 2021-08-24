import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Typing from 'react-typing-animation'
import { store } from '../../store/createStore'
import displayReducerActionCreator from '../../store/reducers/display-reducer/display-reducer-action-creator'
import displayReducerSelector from '../../store/reducers/display-reducer/display-reducer-selector'
import TechList from './tech-list'

const TechIUse = () => {
  const isTechListShown = useSelector(displayReducerSelector.getIsTechListShown)
  const [shouldShowTechList, setShouldShowTechList] = useState(false)
  const delay = 7

  useEffect(
    () => {
      const timer1 = setTimeout(() => {
        setShouldShowTechList(true)
        if (!isTechListShown) {
          store.dispatch(displayReducerActionCreator.setIsTechListShown(true))
        }
      }, delay * 1000)
      return () => {
        clearTimeout(timer1)
      }
    }, [setShouldShowTechList])

  const shownTechlist = (
    <>
      <a>Technologies i use :</a>
      <TechList />
    </>
  )

  const unShownTechlist = (
    <>
      <Typing speed={10}>
        <Typing.Delay ms={6000} />
        <a>Technologies i use :</a>
      </Typing>
      {shouldShowTechList && <TechList />}
    </>
  )

  return (
    <>
      {
        isTechListShown ? shownTechlist : unShownTechlist
      }
    </>
  )
}

export default TechIUse

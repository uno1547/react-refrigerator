import { useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
// import getData from '../utils/getData'
import Modal from './Modal'
import { NormalModal, StateModal } from './Modal'
const Test1 = () => {
  const [AOpen, setAOpen] = useState(false)
  const [BOpen, setBOpen] = useState(false)

  const AModalHandler = () => {
    setAOpen(prev => !prev)
  }

  const BModalHandler = () => {
    setBOpen(prev => !prev)
  }

  return (
    <>
    <button onClick={AModalHandler}>A열기</button>
    {AOpen ? createPortal(
      <NormalModal closeHandler={AModalHandler}/>, document.body
    ) : null}
    <button onClick={BModalHandler}>B열기</button>
    {BOpen ? createPortal(
      <StateModal closeHandler={BModalHandler}/>, document.body
    ) : null}
    </>
  )
}

export default Test1
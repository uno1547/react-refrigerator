import { useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
// import getData from '../utils/getData'
import Modal from './Modal'
import { NormalModal, StateModal } from './Modal'
const Test1 = () => {
  const [AOpen, setAOpen] = useState(false)
  const [BOpen, setBOpen] = useState(false)

  const AModalHandler = (evt) => {
    console.log('A모달핸들러 호출!');
    if(!evt) {
      console.log('이벤트없음');
      return
    } else if (!evt.target.classList.contains("trigger")) {
      const target = evt.target
      console.log(target, 'trigger없음');
      return
    }
    console.log('A모달창 닫을게요');
    setAOpen(prev => !prev)
  }

  const AHandler = async () => {
    console.log('비동기시작');
    AModalHandler()
  }

  const BModalHandler = (evt) => {
    console.log('B모달핸들러 호출!');
    if(!evt) {
      console.log('이벤트없음');
      return
    } else if (!evt.target.classList.contains("trigger")) {
      const target = evt.target
      console.log(target, 'trigger없음');
      return
    }
    console.log('B모달창 닫을게요');
    setBOpen(prev => !prev)
  }

  const BHandler = async (value) => {
    console.log('비동기시작');
    BModalHandler()
  }

  return (
    <>
    <button onClick={AModalHandler} className='trigger'>A열기</button>
    {AOpen ? createPortal(
      <NormalModal closeHandler={AModalHandler} aHandler={AHandler}/>, document.body
    ) : null}
    <button onClick={BModalHandler} className='trigger'>B열기</button>
    {BOpen ? createPortal(
      <StateModal closeHandler={BModalHandler} bHandler={BHandler}/>, document.body
    ) : null}
    </>
  )
}

export default Test1
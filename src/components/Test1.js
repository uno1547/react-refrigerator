import { useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
// import getData from '../utils/getData'
import Modal from './Modal'

const Test1 = () => {
  const [open, setOpen] = useState(false)
  const handler = (evt) => {
    evt.stopPropagation()
    setOpen(prev => !prev)
    // console.log('닫힘');
  }

  return (
  <div>
    <button onClick={handler}>모달창 열기</button>
    {open ? createPortal(
      <Modal mainText = {`Discard`} subText = {'Really want to discard?'} close = {handler}/>, document.body
    ): null}
  </div>
  )
}

export default Test1
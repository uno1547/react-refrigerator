import { useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
// import getData from '../utils/getData'
import Modal from './Modal'

const Test1 = () => {
  const [open, setOpen] = useState(false)
  console.log('뭔가 바뀜');
  const handler = (evt) => {
    if (!evt.target.classList.contains("trigger")) return
    setOpen(prev => !prev)
    // console.log(evt.target.classList);
    // evt.stopPropagation()

    // setOpen(prev => !prev)
    // setOpen(!open) //얜머지
    // console.log('닫힘');
  }

  return (
  <div>
    <button onClick={handler} className='trigger'>모달창 열기</button>
    {open ? createPortal(
      <Modal mainText = {`Discard`} subText = {'Really want to discard?'} close = {handler}/>, document.body
    ): null}
  </div>
  )
}

export default Test1
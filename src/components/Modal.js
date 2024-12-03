import { useState } from 'react'

import styles from './Modal.module.css'
import Button from './Button'

const Modal = ({mainText, subText, closeHandler, deleteHandler}) => {
  return (
  <div className={`${styles.background} ${'trigger'}`} onClick={closeHandler}>
    <div className={styles.modal_container}>
      <span className={`${styles.close} ${'trigger'}`} >&times;</span>
      <h4>{mainText}</h4>
      <span>{subText}</span>
      <div className={styles.btn_area}>
        {/* <button className={styles.cancle}>cancle</button> */}
        {/* <button className={styles.run}>discard</button> */}
        <Button text = 'cancle' className = 'trigger' />
      </div>
    </div>
  </div>)
}

export default Modal;

const DiscardModal = ({mainText, subText, closeHandler, deleteHandler}) => {
  console.log('discard컴포넌트!');
  return (
    <div className={`${styles.background} ${'trigger'}`} onClick={closeHandler}>
      <div className={styles.modal_container}>
        <span className={`${styles.close} ${'trigger'}`} >&times;</span>
        <h4>{mainText}</h4>
        <span>{subText}</span>
        <div className={styles.btn_area}>
          <Button text = 'cancle' className = 'trigger'/>
          <Button text = 'discard' handler={deleteHandler}/>
        </div>
      </div>
    </div>)
}

const EditModal = ({ mainText, subText, closeHandler, editsHandler, value}) => {
  console.log('edit컴포넌트!!');
  const [number, setNumber] = useState(value)

  const onChange = (evt) => {
    setNumber(evt.target.value)
  }
  return (
    <div className={`${styles.background} ${'trigger'}`} onClick={closeHandler}>
      <div className={styles.modal_container}>
        <span className={`${styles.close} ${'trigger'}`} >&times;</span>
        <h4>{mainText}</h4>
        <span>{subText}</span>
        {/* <input></input> */}
        <input type='number' value={number} onChange={onChange}/>
        <div className={styles.btn_area}>
          <Button text = 'cancle' className = 'trigger'/>
          {/* <Button text = 'edit' handler={() => editHandler(number)} /> */}
          <Button text = 'edit' handler={()=>{editsHandler(number)}} />
        </div>
      </div>
    </div>
  )
}

const NormalModal = ({closeHandler}) => {
  return(
    <div className={styles.background}>
      <div className={styles.modal_container}>
        <span className={styles.close}  onClick={closeHandler}>&times;</span>
        <div className={styles.btn_area}>
          <Button text = '일반모달 닫기' handler={closeHandler}/>
        </div>
    </div>
    </div>
  )
}

const StateModal = ({closeHandler}) => {
  const [number, setNumber] = useState(0)
  const onChange = (evt) => {
    setNumber(evt.target.value)
  }
  return(
    <div className={styles.background}>
      <div className={styles.modal_container}>
        <span className={styles.close}  onClick={closeHandler}>&times;</span>
        <div className={styles.btn_area}>
          <input type='number' value={number} onChange={onChange}/>
          <Button text = 'state 모달 닫기' handler={closeHandler}/>
        </div>
    </div>
    </div>
  )
}

export {DiscardModal, EditModal, NormalModal, StateModal} 
// export DiscardModal
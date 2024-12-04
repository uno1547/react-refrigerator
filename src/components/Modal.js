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
  // console.log('discard컴포넌트!');
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

const EditModal = ({ mainText, subText, closeHandler, editsHandler, prevVal}) => {
// const EditModal = ({ mainText, subText, closeHandler, editsHandler}) => {
  console.log('edit컴포넌트!!');
  const [number, setNumber] = useState(prevVal)

  const onChange = (evt) => {
    console.log(evt.target.value);
    if(evt.target.value == -1) return
    setNumber(evt.target.value)
  }
  return (
    <div className={`${styles.background} ${'trigger'}`} onClick={closeHandler}>
      <div className={styles.modal_container}>
        <span className={`${styles.close} ${'trigger'}`} >&times;</span>
        <h4>{mainText}</h4>
        <span>{subText}</span>
        <input type='number' value={number} onChange={onChange}/>개
        <div className={styles.btn_area}>
          <Button text = 'cancle' className = 'trigger'/>
          {/* <Button text = 'edit' handler={() => editHandler(number)} /> */}
          <Button text = 'edit' handler={()=>{editsHandler(number)}} />
        </div>
      </div>
    </div>
  )
}

const NormalModal = ({closeHandler, aHandler}) => {

  return (
    <div className={`${styles.background} ${'trigger'}`} onClick={closeHandler}>
      <div className={styles.modal_container}>
        <span className={`${styles.close} ${'trigger'}`} >&times;</span>
        <div className={styles.btn_area}>
          <Button text = 'A모달 닫기' className = 'trigger'/>
          <Button text = 'A모달 동작' handler={aHandler}/>
        </div>
      </div>
    </div>)
}
/*
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
*/ 


const StateModal = ({closeHandler, bHandler, value}) => {
  const [number, setNumber] = useState(value)

  const onChange = (evt) => {
    console.log(evt.target.value);
    setNumber(evt.target.value)
  }
  return (
    <div className={`${styles.background} ${'trigger'}`} onClick={closeHandler}>
      <div className={styles.modal_container}>
        <span className={`${styles.close} ${'trigger'}`} >&times;</span>
        <input type='number' value={number} onChange={onChange}/>
        <div className={styles.btn_area}>
          <Button text = 'B모달 닫기' className = 'trigger'/>
          <Button text = 'B모달 동작' handler={()=>{bHandler(number)}} />
        </div>
      </div>
    </div>
  )
}

export {DiscardModal, EditModal, NormalModal, StateModal} 
// export DiscardModal
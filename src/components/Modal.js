import { useState } from 'react'

import styles from './Modal.module.css'
import Button from './Button'

const Modal = ({mainText, subText, close, deleteHandler}) => {

  /*

    close = modalHandler

    const modalHandler = (evt) => {
    // if(evt) evt.stopPropagation()
    setModalOpen(prev => !prev)
    }
  */


  return (
  <div className={`${styles.background} ${'trigger'}`} onClick={close}>
    <div className={styles.modal_container}>
      <span className={`${styles.close} ${'trigger'}`} >&times;</span>
      <h4>{mainText}</h4>
      <span>{subText}</span>
      <div className={styles.btn_area}>
        {/* <button className={styles.cancle}>cancle</button> */}
        {/* <button className={styles.run}>discard</button> */}
        <Button text = 'cancle' className = 'trigger' />
        <Button text = 'discard' handler={deleteHandler}/>
      </div>
    </div>
  </div>)
  
  
  /*
  // const [isOpen, setIsOpen] = useState(true)

  // const onClickHandler = () => {
  //   setIsOpen(false)
  // }
  return isOpen ? (
    <div className={styles.background}>
      <div className={styles.modal_container}>
        <span className={styles.close} onClick={onClickHandler}>&times;</span>
        <h4>{mainText}</h4>
        <span>{subText}</span>
        <div className={styles.btn_area}>
          <button className={styles.cancle}>cancle</button>
          <button className={styles.run}>discard</button>
          <Button text = 'cancle' handler={onClickHandler}/>
          <Button text = 'discard' handler={onClickHandler}/>
        </div>
      </div>
    </div>) : null
*/
}
export default Modal
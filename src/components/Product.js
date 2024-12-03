import { useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './Product.module.css'
import Button from './Button'
import Modal, { DiscardModal, EditModal } from './Modal'

import {checkExpire} from '../utils/reduceExpire'
import deleteData from '../utils/deleteData'
import updateData from '../utils/updateData'

const Product = ({ product, fetchDatas }) => {
  const [discardModalOpen, setDiscardModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)

  const discardModalHandler = (evt) => {
    if(!evt) {
      console.log('이벤트없음');
    // setModalOpen(prev => !prev)
      return
    } else if(!evt.target.classList.contains("trigger")) {
      console.log('trigger없음');
      return
    }
    console.log('discard 창 닫을게요!');
    console.log(discardModalOpen);
    setDiscardModalOpen(prev => !prev)
  }

  const discardHandler = async () => {
    /*
    1. 클릭시
    2. firebase 삭제
    3. productsArr 리랜더링
    */
    await deleteData(product.id)
    fetchDatas()
    console.log('제출!!');
    discardModalHandler()
  }

  const editModalHandler = (evt) => {
    if(!evt) {
      console.log('이벤트없음');
    // setModalOpen(prev => !prev)
      return
    } else if(!evt.target.classList.contains("trigger")) {
      console.log('trigger없음');
      return
    }
    console.log('edit 창 닫을게요!');
    console.log(editModalOpen);
    setEditModalOpen(prev => !prev)
  }
  const editHandler = async (value) => {
    await updateData(product.id, value)
    fetchDatas()
    console.log('제출!!');
    editModalHandler()
  }
  return (
    <li className={styles.product_box}>
      <div className={styles.product_info}>
        <div className={styles.bold}>{product.name}</div>
        <div className={`${styles.count} ${styles.small}`}>
          <span>수량 : </span><span className={styles.bold}>{product.amount}개</span>     
          <Button text='edit' handler={editModalHandler} className='trigger'/>
          {editModalOpen ? createPortal(
            <EditModal mainText='edit' subText= 'select amount' closeHandler={editModalHandler} editsHandler={editHandler} value ={product.amount}/>, document.body
          ) : null}
        </div>
        <div className={`${styles.small} ${styles.categories}`}>
          {/* <span>유제품</span>
          <span>냉장</span> */}
          {product.category.map((el, idx) => (
            <span key={`${product.id}cat${idx}`}>{el}</span>
          ))}
        </div>
      </div>
      {checkExpire(product) ? checkExpire(product) == "discard" ? <h2 className={`${styles.discard} ${styles.notice}`}>폐기</h2> : <h2 className={`${styles.expire} ${styles.notice}`}>만료 임박</h2> : null}
      <div className={`${styles.product_date_info} ${styles.small}`}>
        <div className={styles.add}>
          <span >add date : </span><span className={styles.bold}>{` ${product.add_date}`}</span>
        </div>
        <div className={styles.exp}>
          <span >expire date : </span><span className={`${styles.bold} ${ styles[checkExpire(product)]}`}>{` ${product.expire_date}`}</span>
        </div>
        <div>
        {/* {checkExpire(product) == "discard" ? <span>폐기요망</span> : null} */}
        </div>
        <Button text='discard' handler={discardModalHandler} className='trigger'/>
        {discardModalOpen ? createPortal(
          <DiscardModal mainText='discard' subText= 'Really want to discard?' closeHandler={discardModalHandler} deleteHandler = {discardHandler}/>, document.body
        ) : null}
      </div>
    </li>
  )
}
// ${checkExpire(product) ? styles.red : null}

export default Product
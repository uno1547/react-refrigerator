import { useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './Product.module.css'
import Button from './Button'
import Modal from './Modal'

import {checkExpire} from '../utils/reduceExpire'
import deleteData from '../utils/deleteData'

const Product = ({ product, fetchDatas }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const modalHandler = (evt) => {
    // if(evt) evt.stopPropagation()
    setModalOpen(prev => !prev)
  }

  const deleteHandler = async () => {
    /*
    1. 클릭시
    2. firebase 삭제
    3. productsArr 리랜더링
    */
    deleteData(product.id)
    fetchDatas()
    modalHandler()
  }

  return (
    <li className={styles.product_box}>
      <div className={styles.product_info}>
        <div className={styles.bold}>{product.name}</div>
        <div className={`${styles.count} ${styles.small}`}>
          <span>수량 : </span><span className={styles.bold}>{product.amount}개</span>     
          <Button text='edit' handler={modalHandler} />
          {/* {modalOpen ? createPortal(
            <Modal mainText='edit' subText= 'select amount' close={modalHandler}/>, document.body
          ) : null} */}
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
        <Button text='discard' handler={modalHandler}/>
        {modalOpen ? createPortal(
          <Modal mainText='discard' subText= 'Really want to discard?' close={modalHandler} deleteHandler = {deleteHandler}/>, document.body
        ) : null}
      </div>
    </li>
  )
}
// ${checkExpire(product) ? styles.red : null}

export default Product
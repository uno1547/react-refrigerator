import { useState } from 'react'
import { createPortal } from 'react-dom'

import styles from './Product.module.css'
import Button from './Button'
import Modal, { DiscardModal, EditModal } from './Modal'

import {checkExpire} from '../utils/reduceExpire'
import deleteData from '../utils/deleteData'
import updateData from '../utils/updateData'

const Product = ({ product, fetchDatas }) => {
  // console.log('product component');
  const [discardModalOpen, setDiscardModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  // console.log('discard창', discardModalOpen);
  // console.log('edit창', editModalOpen);

  const discardModalHandler = (evt) => {
    if(evt && !evt.target.classList.contains('trigger')) { // 클릭에의해 트리거, 버블링 포함
      // 버튼아닌곳 클릭시에만 리턴하기
      return
    }
    setDiscardModalOpen(prev => !prev)
  }

  const discardHandler = async () => {
    // console.log('비동기시작');
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
    // 1 trigger클래스의 클릭이벤트에의해 닫히기 (evt O, trigger O)
    // 2 evt없이 직접 호출 (evt X)
    // 예외 : evt O, trigger X 
    if(evt && !evt.target.classList.contains('trigger')) { // 클릭에의해 트리거, 버블링 포함
      // 버튼아닌곳 클릭시에만 리턴하기
      return
    }
    setEditModalOpen(prev => !prev)
    // setEditModalOpen(prev => !prev)
  }

  const editHandler = async (value) => {
    await updateData(product.id, value)
    fetchDatas()
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
            <EditModal mainText='edit' subText= 'select amount' closeHandler={editModalHandler} editsHandler={editHandler} prevVal ={product.amount}/>, document.body
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
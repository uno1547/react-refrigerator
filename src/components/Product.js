import styles from './Product.module.css'
import Button from './Button'

const Product = ({ product }) => {
  return (
    <li className={styles.product_box}>
      <div className={styles.product_info}>
        <div className={styles.bold}>{product.name}</div>
        <div className={`${styles.count} ${styles.small}`}>
          <span>수량 : </span><span className={styles.bold}>{product.amount}개</span>     
          <Button text='edit'/>
        </div>
        <div className={`${styles.small} ${styles.categories}`}>
          <span>유제품</span>
          <span>냉장</span>
        </div>
      </div>
      <div className={`${styles.product_date_info} ${styles.small}`}>
        <div className={styles.add}>
          <span >add date : </span><span className={styles.bold}>{product.add_date}</span>
        </div>
        <div className={styles.exp}>
          <span >expire date : </span><span className={styles.bold}>{product.expire_date}</span>
        </div>
        <Button text='discard'/>
      </div>
    </li>
  )
}


export default Product
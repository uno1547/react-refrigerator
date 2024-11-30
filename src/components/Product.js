import styles from './Product.module.css'
import Button from './Button'
import {checkExpire} from '../utils/reduceExpire'

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
          {/* <span>유제품</span>
          <span>냉장</span> */}
          {product.category.map((el, idx) => (
            <span key={`${product.id}cat${idx}`}>{el}</span>
          ))}
        </div>
      </div>
      {checkExpire(product) ? checkExpire(product) == "discard" ? <h2 className={styles.discard}>폐기 요망</h2> : <h2 className={styles.expire}>만료 임박</h2> : null}
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
        <Button text='discard'/>
      </div>
    </li>
  )
}
// ${checkExpire(product) ? styles.red : null}

export default Product
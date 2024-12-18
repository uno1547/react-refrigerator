import Product from "./Product.js"
import styles from "./ListBody.module.css"
import {getExpireNum} from "../utils/reduceExpire.js";

const ListBody = ({ productsArr, category, fetchDatas }) => {
  console.log('ListBody 컴포넌트 생성');
  console.log(productsArr);
  /*
  받은 category로 sort
  */
  console.log(category)
  if(category == "date") {
    console.log('date정렬');
    productsArr.sort((a, b) => {
      // console.log(a.expire_date - b.expire_date);
      if(a.expire_date < b.expire_date) return -1
      else if(a.expire_date > b.expire_date) return 1
      // else return 0 
    })
  } else if(category == "name") {
    console.log('name정렬');
    productsArr.sort((a, b) => {
      if(a.name < b.name) return -1
      else if(a.name > b.name) return 1
      else return 0 
    })
  } else {
    console.log('category정렬');
    productsArr.sort((a, b) => {
      
    })
  }

  return (
    <div className = {styles['list_body']}>
      <div className={styles.indicator}>
        <span className={styles.small}>total number </span><span className={styles.bold}>{productsArr.length}</span>
        <span className={styles.small}>expire number </span><span className={`${styles.bold} ${styles.expire}`}>{getExpireNum(productsArr)}</span>
      </div>
      <ul>
        {productsArr.map((product) => {
          return <Product product = {product} key={product.id} fetchDatas = {fetchDatas}></Product>
        })}
      </ul>      
    </div>
  )
}

export default ListBody
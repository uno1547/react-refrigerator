const Product = ({ product }) => {
  return (
    <li>
      <span>{product.name}</span>

      <span>{product.amount}개</span>

      <span>{product.expire_date}</span>

      <span>{product.category}</span>
    </li>
  )
}


export default Product
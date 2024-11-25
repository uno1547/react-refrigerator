import Product from "./Product.js"

const ListBody = ({ productsArr, category }) => {
  console.log('ListBody 컴포넌트 생성');
  /*
  받은 category로 sort
  */
  console.log(category);
  if(category == "date") {
    console.log('date정렬');
    productsArr.sort((a, b) => {
      // console.log(a.expire_date - b.expire_date);
      if(a.expire_date < b.expire_date) return -1
      else if(a.expire_date > b.expire_date) return 1
      else return 0 
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
    <>
      <ul>
        {productsArr.map((product) => {
          return <Product product = {product} key={product.id}></Product>
        })}
      </ul>      
    </>
  )
}

export default ListBody
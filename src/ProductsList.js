import { useState, useEffect } from "react";

const ProductsList = () => {
  const [productsArr, setProductsArr] = useState(0);
  useEffect(() => {
    console.log('all state detecting')
    // setProductsArr(10)
  }, [])
  console.log(productsArr);
  /*
  useEffect를 통해 처음 품목들 배열을(불러와서) 초기화하고,
  productsArr가 변경될때마다, rerendering되어야함(컴포넌트 재설정)
  
  */
  const onClickHandler = () => {
    setProductsArr((prev) => prev + 1);
  }

  return (
    <div>
      이것은 품목리스트
      <button onClick={onClickHandler}>stateChange</button>
    </div>
  )
}

export default ProductsList;
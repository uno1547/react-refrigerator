import { useState, useEffect } from "react";
import getDataFunc from "../utils/getData.js"
import addData from "../utils/addData.js";

const ProductsList = () => {

  const [productsArr, setProductsArr] = useState([]);
  // productsArr state 설정
  // 1. useEffect > 전체불러오기 > setToDo
  
  const fetchDatas = async () => {
    const response = await getDataFunc()
    console.log(response);
    setProductsArr(response)
  }
  useEffect(() => {
    console.log('useEffect!');
    fetchDatas()
  }, []) // 여기에 productsArr를 넣으면 무한리랜더링 발생
  /*
  useEffect를 통해 처음 품목들 배열을(불러와서) 초기화하고,
  productsArr가 변경될때마다, rerendering되어야함(컴포넌트 재설정)
  
  */
  const onClickHandler = () => {
    // 여기서는 데이터를 서버에 등록하고, 리랜더링을 촉발시켜야함
  }

  return (
    <div>
      이것은 품목리스트
      <button onClick={onClickHandler}>stateChange</button>
    </div>
  )
}

export default ProductsList;
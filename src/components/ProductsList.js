import { useState, useEffect } from "react";
import getDataFunc from "../utils/getData.js"
import addData from "../utils/addData.js";

import ListHeader from "./ListHeader.js";
import ListBody from "./ListBody.js";
// import Product from "./Product.js";

const ProductsList = () => {
  console.log("Productslist 컴포넌트 생성");

  const [productsArr, setProductsArr] = useState([]);

  const [category, setCategory] = useState("date")
  // console.log(productsArr);

  const fetchDatas = async () => {
    // console.log('데이터불러오기!!');
    const response = await getDataFunc() // data받아오기
    // console.log('응답받음');
    setProductsArr(response) // 받아온 data로 state설정
  }

  useEffect(() => {
    // console.log('useEffect!');
    fetchDatas()
  }, []) // 여기에 productsArr를 넣으면 무한리랜더링 발생
  /*
  useEffect를 통해 처음 품목들 배열을(불러와서) 초기화하고,
  productsArr가 변경될때마다, rerendering되어야함(컴포넌트 재설정)
  */
  const onClickHandler = async () => {
    await addData() // addData가 호출되더라도, 
    console.log('click');
    await fetchDatas() 
    // 여기서는 데이터를 서버에 등록하고, 리랜더링을 촉발시켜야함
  }

  return (
    <>
      <ListHeader setCategory = {setCategory} />
      <ListBody productsArr = {productsArr} category = {category}/>
      {/* <button onClick={onClickHandler}>stateChange</button> */}
    </>
  )
}

export default ProductsList;
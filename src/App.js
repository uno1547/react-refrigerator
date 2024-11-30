import ProductsList from "./components/ProductsList.js";
import Date from "./components/Date.js";
import Test from "./components/Test.js"
import Test1 from "./components/Test1.js"
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="inner">
      <h1>Refrigerator</h1>
      <Date/>
      <ProductsList/>
      {/* <button onClick={() => {setShow(!show)}}>{show ? '제거' : '생성'}</button> */}
      {/* {show && <Test show = {show}/>} */}
      {<Test1/>}
    </div>
  );
}
export default App;
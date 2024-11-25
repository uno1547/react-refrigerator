import ProductsList from "./ProductsList.js";
import Date from "./Date.js";
import Test from "./Test.js"
function App() {
  return (
    <div className="inner">
      <h1>Refrigerator</h1>
      <Date/>
      <ProductsList/>
      {/* <Test/> */}
    </div>
  );
}
export default App;
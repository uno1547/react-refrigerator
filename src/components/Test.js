import styles from "./Test.module.css"

import Select from "./Select.js"

const arr = ["name", "date", "category"]
const Test = () => {
  return (<Select options={arr}/>)
}
export default Test
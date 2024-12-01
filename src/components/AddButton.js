import addDataFunc from "../utils/addData"

const AddButton = () => {
  const addData = () => {
    addDataFunc()
  }
  return (<button onClick={addData}>데이터추가</button>)
}

export default AddButton;
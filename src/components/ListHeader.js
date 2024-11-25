const ListHeader = ({ setCategory }) => {
  console.log('ListHeader 컴포넌트 생성');
  const changeHandler = (evt) => {
    const selectedValue = evt.target.value
    console.log(selectedValue);
    setCategory(selectedValue)
  }

  return (
    <div>
      <select onChange = {changeHandler}>
        <option value={"date"}>date</option>
        <option value={"name"}>name</option>
        <option value={"category"}>category</option>
      </select>
      <button>검색하기</button>
    </div>
  )
}

export default ListHeader
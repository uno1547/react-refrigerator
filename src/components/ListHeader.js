import styles from "./ListHeader.module.css"
import btnStyles from "./Button.module.css"
import Select from "./Select";


const ListHeader = ({ setCategory }) => {
  console.log('ListHeader 컴포넌트 생성');

  const changeHandler = (evt) => {
    const selectedValue = evt.target.value
    console.log(selectedValue);
    setCategory(selectedValue)
  }

  return (
    <div className={styles.header_flex_container}>
      <div className={styles.header_select_div}>
        <span>select view</span>
        <Select options = {["date", "name", "category"]} onChange = {changeHandler}/>
      </div>
      <button className={btnStyles.button}><span class="material-symbols-outlined">search</span></button>
    </div>
  )
}

export default ListHeader
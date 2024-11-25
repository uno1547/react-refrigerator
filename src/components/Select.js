import styles from "./Select.module.css"

const Select = ({ options, onChange }) => {

  return (
    <select className={styles.select} onChange={onChange}>
      {options.map(option => (<option value = {option} key = {option} onChange={onChange}>{option}</option>))}
    </select>
  )
}

export default Select
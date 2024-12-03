import styles from "./Button.module.css"
const Button = ( {text = '', handler, className = ''} ) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={handler}>{text}</button>
  )
}
export default Button
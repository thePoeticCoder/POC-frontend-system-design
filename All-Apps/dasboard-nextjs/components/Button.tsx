import styles from '../styles/button.module.css'
import { ButtonType } from '../types'

const Button = ({
  content,
  handleClick,
  className,
  buttonType,
  isDisabled,
}: ButtonType) => {
  return (
    <button
      disabled={isDisabled}
      type={buttonType}
      onClick={handleClick}
      className={`${styles.btn} ${className}`}
    >
      {content}
    </button>
  )
}

export default Button

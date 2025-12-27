import styles from '../styles/userCardSmall.module.css'
import { ReactChildren } from '../types'

const UserCardSmall = ({ children }: ReactChildren) => {
  return <div className={styles.container}>{children}</div>
}

export default UserCardSmall

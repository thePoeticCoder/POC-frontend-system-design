import styles from "../styles/queryCard.module.css";
import { queryCardType } from '../types'

const QueryCard = ({title, time, content} : queryCardType ) => {
  return (
    <div className={styles.container}>
        <div className={styles.headSection}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.time}>{time}</p>
        </div>
        <p className={styles.content}>
            {content}
        </p>
    </div>
  )
}

export default QueryCard
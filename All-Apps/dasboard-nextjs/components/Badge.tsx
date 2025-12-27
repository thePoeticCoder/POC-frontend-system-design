import styles from '../styles/badge.module.css'
import { BadgeType } from '../types/index'

const Badge = ({ content, className }: BadgeType) => {
  return <div className={`${styles.container} ${className}`}>{content}</div>
}

// TODO: Add default props

export default Badge

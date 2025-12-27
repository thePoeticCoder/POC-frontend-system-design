import React from 'react'
import styles from '../styles/userCardHeader.module.css'
import { ReactChildren } from '../types'

export const UserCardHeader = ({ children }: ReactChildren) => {
  return <div className={styles.cardHeader}>{children}</div>
}

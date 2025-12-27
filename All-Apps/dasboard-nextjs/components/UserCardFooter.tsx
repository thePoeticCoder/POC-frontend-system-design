import React from 'react'
import { ReactChildren } from '../types'
import styles from '../styles/userCardFooter.module.css'

export const UserCardFooter = ({ children }: ReactChildren) => {
  return <div className={styles.cardFooter}>{children}</div>
}

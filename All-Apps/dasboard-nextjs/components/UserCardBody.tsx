import React from 'react'
import styles from '../styles/userCardBody.module.css'

import { ReactChildren } from '../types'

export const UserCardBody = ({ children }: ReactChildren) => {
  return <div className={styles.cardBody}>{children}</div>
}

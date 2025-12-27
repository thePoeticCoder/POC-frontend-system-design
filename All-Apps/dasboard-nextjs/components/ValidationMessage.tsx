import React from 'react'
import styles from '../styles/filledInput.module.css'

export const ValidationMessage = ({ children }: { children: string }) => {
  return <div className={styles.errorMessage}>{children}</div>
}

import React from 'react'
import { ReactChildren } from '../types'
import styles from '../styles/accordion.module.css'

export const AccordionHeader = ({ children }: ReactChildren) => {
  return <div className={styles.accordionHeader}>{children}</div>
}

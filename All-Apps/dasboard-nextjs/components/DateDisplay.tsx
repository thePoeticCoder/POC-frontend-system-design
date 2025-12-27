import React from 'react'
import styles from '../styles/claimDetails.module.css'

export type DateDisplayType = {
  title: string
  date: string
}

export const DateDisplay = ({ date, title }: DateDisplayType) => {
  return (
    <div className={styles.dateContainer}>
      {date !== 'undefined undefined undefined' ? (
        <p className={styles.date}>{date}</p>
      ) : null}
      <p>{title}</p>
    </div>
  )
}

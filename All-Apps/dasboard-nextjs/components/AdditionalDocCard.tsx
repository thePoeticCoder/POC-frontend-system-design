import React from 'react'
import styles from '../styles/additionalDocCard.module.css'

type AdditionalCardPropType = {
  additionalDocsArray: string[]
}

export const AdditionalDocCard = ({
  additionalDocsArray,
}: AdditionalCardPropType) => {
  return (
    <div className={styles.rejectedDocsContainer}>
      <h3 className={styles.heading}>Additional Docs</h3>
      <div>
        {additionalDocsArray.map((doc) => (
          <p key={crypto.randomUUID()}>{doc}</p>
        ))}
      </div>
    </div>
  )
}

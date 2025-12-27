import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from '../styles/userFriendlyMessage.module.css'

type UserFriendlyMessagePropType = {
  imageUrl: StaticImageData
  title: string
  titleEmoji?: StaticImageData
  subTitle: string
}

export const UserFriendlyMessage = ({
  imageUrl,
  title,
  subTitle,
}: UserFriendlyMessagePropType) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Image src={imageUrl} alt='action symbol' />
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </div>
  )
}

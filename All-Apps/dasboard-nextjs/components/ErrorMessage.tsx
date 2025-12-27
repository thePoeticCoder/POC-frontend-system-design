import React from 'react'
import { UserFriendlyMessage } from './UserFriendlyMessage'
import styles from '../styles/ErrorMessage.module.css'
import { StaticImageData } from 'next/image'

type ErrorMessagePropType = {
  message: string
  title: string
  imageUrl: StaticImageData
  btnHandler: () => void
  buttonContent: string
}

export const ErrorMessage = ({
  message,
  title,
  imageUrl,
  btnHandler,
  buttonContent,
}: ErrorMessagePropType) => {
  return (
    <div className={styles.container}>
      <UserFriendlyMessage
        imageUrl={imageUrl}
        title={title}
        subTitle={message}
      />
      <div onClick={btnHandler} className={styles.btnContainer}>
        <p>{buttonContent}</p>
      </div>
    </div>
  )
}

import React from 'react'
import PdfIcon from './icons/PdfIcon'
import styles from '../styles/uploadedFile.module.css'

type UploadFileType = {
  link: string
  fileName: string
}

export const UploadedFile = ({ link, fileName }: UploadFileType) => {
  return (
    <a className={styles.link} href={link} rel='noreferrer' target='_blank'>
      <div className={styles.container}>
        <PdfIcon width={35} height={43} />
        <p>{fileName}</p>
      </div>
    </a>
  )
}

import React from 'react'
import styles from '../styles/fileUploadInput.module.css'
import { ReactChangeEvent } from '../types'
import UploadIcon from './icons/UploadIcon'

type FileInputUploadInputType = {
  documentType: string
  placeHolder: string
  fileChangeHandler: (e: ReactChangeEvent) => void
  containerStyle: string
  name: string
}

export const FileUploadInput = ({
  placeHolder,
  fileChangeHandler,
  containerStyle,
  name,
}: FileInputUploadInputType) => {
  return (
    <label htmlFor={name} className={containerStyle}>
      <input
        multiple
        accept='.pdf, .jpeg, .jpg, .png'
        id={name}
        type='file'
        name={name}
        className={styles.fileInputBtn}
        onChange={fileChangeHandler}
      />
      {`${placeHolder}`}
      <UploadIcon height={16} width={16} color='#9d9d9d' />
    </label>
  )
}

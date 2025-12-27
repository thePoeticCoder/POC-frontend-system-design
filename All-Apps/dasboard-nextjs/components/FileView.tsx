import Image from 'next/image'
import React from 'react'
import Pdf from '../public/Pdf.png'
import CrossIcon from './icons/CrossIcon'
import styles from '../styles/fileView.module.css'

type FileViewPropsType = {
  fileName: string
  removeDocumentHandler: (fileName: string) => void
  fileViewContainerStyle: string
}

export const FileView = ({
  fileName,
  removeDocumentHandler,
  fileViewContainerStyle,
}: FileViewPropsType) => {
  return (
    <div className={fileViewContainerStyle}>
      <Image alt='Tick-logo' src={Pdf} width={17.76} height={21.69} />
      <p className={styles.fileName}>{fileName}</p>
      <button
        type='button'
        onClick={() => removeDocumentHandler(fileName)}
        className={styles.crossBtn}
      >
        <CrossIcon height={12} width={12} color='#003032' />
      </button>
    </div>
  )
}

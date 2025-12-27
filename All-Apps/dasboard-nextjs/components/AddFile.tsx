import React from 'react'
import styles from '../styles/addFile.module.css'
import PlusIcon from './icons/PlusIcon'

type AddFilePropsType = {
  text: string
  clickHandler: () => void
}

export const AddFile = ({ text, clickHandler }: AddFilePropsType) => {
  return (
    <div onClick={clickHandler} className={styles.container}>
      <p>{text}</p>
      <PlusIcon height={16} width={16} color='#9d9d9d' />
    </div>
  )
}

import React from 'react'
import { sectionDFormsData } from '../constants/FieldsSectionD'
import styles from '../styles/formSectionD.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionD = () => {
  const inputStyle = {
    inputContainer: styles.inputContainer,
    input: styles.input,
    errorBorder: styles.errorBorder,
    normalBorder: styles.normalBorder,
    errorMessage: styles.errorMessage,
    hide: styles.hide,
  }
  return (
    <div>
      <p className={styles.sectionHeading}>
        Section D: Payee Name Confirmation
      </p>
      {sectionDFormsData.map((field) => (
        <FormikControl
          key={crypto.randomUUID()}
          name={field.name}
          label={field.label}
          type={field.type}
          isViewOnly={field.isViewOnly}
          isHide={field.isHide}
          inputStyle={inputStyle}
        />
      ))}
    </div>
  )
}

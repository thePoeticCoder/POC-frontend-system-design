import React from 'react'
import { sectionCFormsData } from '../constants/FieldsSectionC'
import styles from '../styles/formSectionC.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionC = () => {
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
      <p className={styles.sectionHeading}>Section C: Bank Details</p>
      <div className={styles.gridSectionContainer}>
        {sectionCFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            type={field.type}
            name={field.name}
            label={field.label}
            options={field.options}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            inputStyle={inputStyle}
          />
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { sectionGFormsData } from '../constants/FieldsSectionG'
import styles from '../styles/formSectionG.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionG = () => {
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
      <p className={styles.sectionHeading}>SECTION G: Hospital Staffing</p>
      <div className={styles.gridSectionContainer}>
        {sectionGFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={field.name}
            type={field.type}
            label={field.label}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            inputStyle={inputStyle}
          />
        ))}
      </div>
    </div>
  )
}

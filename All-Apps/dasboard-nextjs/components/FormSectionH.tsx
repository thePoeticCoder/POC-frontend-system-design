import React from 'react'
import { sectionHFormsData } from '../constants/FieldsSectionH'
import styles from '../styles/formSectionH.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionH = () => {
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
        SECTION H: Ownership and Accerediatation
      </p>
      <div>
        {sectionHFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={field.name}
            type={field.type}
            label={field.label}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            options={field.options}
            multiSelectOption={field.multiSelectOption}
            inputStyle={inputStyle}
          />
        ))}
      </div>
    </div>
  )
}

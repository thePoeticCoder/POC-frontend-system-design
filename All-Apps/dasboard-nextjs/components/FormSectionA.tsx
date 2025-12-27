import React from 'react'
import { FormikControl } from './FormikControl'
import styles from '../styles/formSectionA.module.css'
import {
  getSectionABasicInfo,
  sectionAFormData,
} from '../constants/FieldsSectionA'

type FormSectionAPropType = { userRole: string; isShow: boolean }

export const FormSectionA = ({ userRole, isShow }: FormSectionAPropType) => {
  const inputStyle = {
    inputContainer: styles.inputContainer,
    input: styles.input,
    errorBorder: styles.errorBorder,
    normalBorder: styles.normalBorder,
    errorMessage: styles.errorMessage,
    hide: styles.hide,
  }
  const sectionABasicInfo = getSectionABasicInfo(userRole)

  return (
    <>
      {isShow ? (
        <div>
          <p className={styles.sectionHeading}>
            Section A: Basic hospital information
          </p>
          <div>
            {sectionABasicInfo.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                name={field.name}
                type={field.type}
                label={field.label}
                isViewOnly={field.isEditable}
                isHide={field.isHide}
                inputStyle={inputStyle}
              />
            ))}
          </div>
          <div className={styles.gridSectionContainer}>
            {sectionAFormData.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                name={field.name}
                type={field.type}
                label={field.label}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                options={field.options}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}

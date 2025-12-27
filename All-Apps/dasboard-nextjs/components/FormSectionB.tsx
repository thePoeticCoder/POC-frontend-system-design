import React from 'react'
import {
  sectionBAccountsData,
  sectionBAdminHeadFormData,
  sectionBInsuranceFormData,
  sectionBKenkoSPOCFormData,
  sectionBMarketingHeadFormData,
  sectionBMedicalDirectorFormData,
} from '../constants/FieldsSectionB'
import styles from '../styles/formSectionB.module.css'
import { HospitalDetails } from '../types/hospitalDetails.types'
import { FormikControl } from './FormikControl'

export const FormSectionB = ({
  initialValues,
}: {
  initialValues: HospitalDetails
}) => {
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
      <p className={styles.sectionHeading}>Section B: Contact Details</p>

      {initialValues.hospitalContactDetails[0].id ? (
        <>
          <p className={styles.sectionSubHeading}>
            Insurance desk/ Mediclaim desk:
          </p>
          <div className={styles.gridSectionContainer}>
            {sectionBInsuranceFormData.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                type={field.type}
                label={field.label}
                name={`hospitalContactDetails[0].${field.name}`}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </>
      ) : null}
      <p className={styles.sectionSubHeading}>Accounts / Billing:</p>
      {initialValues.hospitalContactDetails[1]?.id ? (
        <>
          <div className={styles.gridSectionContainer}>
            {sectionBAccountsData.map((field) => {
              return (
                <FormikControl
                  key={crypto.randomUUID()}
                  type={field.type}
                  label={field.label}
                  name={`hospitalContactDetails[1].${field.name}`}
                  isViewOnly={field.isViewOnly}
                  isHide={field.isHide}
                  inputStyle={inputStyle}
                />
              )
            })}
          </div>
        </>
      ) : null}

      {initialValues.hospitalContactDetails[2]?.id ? (
        <>
          <p className={styles.sectionSubHeading}>Marketing Head:</p>
          <div className={styles.gridSectionContainer}>
            {sectionBMarketingHeadFormData.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                type={field.type}
                label={field.label}
                name={`hospitalContactDetails[2].${field.name}`}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </>
      ) : null}

      {initialValues.hospitalContactDetails[3]?.id ? (
        <>
          <p className={styles.sectionSubHeading}>Medical Director:</p>
          <div className={styles.gridSectionContainer}>
            {sectionBMedicalDirectorFormData.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                type={field.type}
                label={field.label}
                name={`hospitalContactDetails[3].${field.name}`}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </>
      ) : null}

      {initialValues.hospitalContactDetails[4]?.id ? (
        <>
          <p className={styles.sectionSubHeading}>Kenko SPOC:</p>
          <div className={styles.gridSectionContainer}>
            {sectionBKenkoSPOCFormData.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                type={field.type}
                label={field.label}
                name={`hospitalContactDetails[4].${field.name}`}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </>
      ) : null}

      {initialValues.hospitalContactDetails[5]?.id ? (
        <>
          <p className={styles.sectionSubHeading}>Admin Head:</p>
          <div className={styles.gridSectionContainer}>
            {sectionBAdminHeadFormData.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                type={field.type}
                label={field.label}
                name={`hospitalContactDetails[5].${field.name}`}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}

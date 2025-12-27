import React from 'react'
import {
  sectionIClinicalServices,
  sectionIInHouseServices,
  sectionIOtDescription,
  sectionISterilizationPractice,
} from '../constants/FieldsSectionI'
import styles from '../styles/formSectionI.module.css'
import { HospitalDetails } from '../types/hospitalDetails.types'
import { findIndex } from '../utils/extractObject'
import { FormikControl } from './FormikControl'

export const FormSectionI = ({
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
  const clinicalServicesFormData = sectionIClinicalServices.filter((field) =>
    initialValues.clinicalServices.find(
      (item) => item.service === field.fieldName
    )
  )
  return (
    <div>
      <p className={styles.sectionHeading}>SECTION I: Clinical Services</p>
      {clinicalServicesFormData.map(({ title, forms }) => (
        <div key={crypto.randomUUID()}>
          <p className={styles.sectionSubHeading}>{title}</p>
          <div className={styles.threeSectionGridContainer}>
            {forms.map((field) => (
              <FormikControl
                key={crypto.randomUUID()}
                name={`clinicalServices[${findIndex(
                  field.service,
                  initialValues.clinicalServices
                )}].${field.name}`}
                isViewOnly={field.isViewOnly}
                isHide={field.isHide}
                label={field.label}
                type={field.type}
                options={field.options}
                inputStyle={inputStyle}
              />
            ))}
          </div>
        </div>
      ))}
      <p className={styles.sectionSubHeading}>STERILIZATION PRACTICE</p>
      <div className={styles.sectionContainer}>
        {sectionISterilizationPractice.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            name={`clinicalServices[${findIndex(
              field.service,
              initialValues.clinicalServices
            )}].${field.name}`}
            label={field.label}
            type={field.type}
            options={field.options}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>IN-HOUSE SERVICES</p>
      <div className={styles.gridSectionContainer}>
        {sectionIInHouseServices.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`clinicalServices[${findIndex(
              field.service,
              initialValues.clinicalServices
            )}].${field.name}`}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            type={field.type}
            options={field.options}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>OT Description</p>
      <div className={styles.gridSectionContainer}>
        {sectionIOtDescription.map((field) => {
          return (
            <FormikControl
              key={crypto.randomUUID()}
              name={`clinicalServices[${findIndex(
                field.service,
                initialValues.clinicalServices
              )}].${field.name}`}
              isViewOnly={field.isViewOnly}
              isHide={field.isHide}
              label={field.label}
              type={field.type}
              options={field.options}
              inputStyle={inputStyle}
            />
          )
        })}
      </div>
    </div>
  )
}

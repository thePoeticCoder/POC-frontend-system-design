import React from 'react'
import {
  sectionECareUnitsFormsData,
  sectionEFacilitiesFormsData,
  sectionEGeneralFormsData,
  sectionEInternalInfrastructureFormsData,
} from '../constants/FieldsSectionE'
import styles from '../styles/formSectionE.module.css'
import { HospitalDetails } from '../types/hospitalDetails.types'
import { FormikControl } from './FormikControl'

export const FormSectionE = ({
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

  const infrastructureFormsData =
    sectionEInternalInfrastructureFormsData.filter((field) =>
      initialValues.facilities.internalInfrastructure.find(
        (item) => item.name === field.fieldName
      )
    )
  return (
    <div>
      <p className={styles.sectionHeading}>
        Section E: Infrastructure and Facilities
      </p>
      <div className={styles.gridSectionContainer}>
        {sectionEGeneralFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={field.name}
            label={field.label}
            type={field.type}
            multiSelectOption={field.multiSelectOption}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionHeading}>Operation Theater:</p>
      <div className={styles.gridSectionContainer}>
        {sectionECareUnitsFormsData.slice(0, 3).map((field, index) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`careUnitCounts[${index}].${field.name}`}
            label={field.label}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionHeading}>Intensive Care Unit:</p>
      <div className={styles.gridSectionContainer}>
        <FormikControl
          name={`careUnitCounts[3].count`}
          label='Intensive Care Unit:'
          type='number'
          isViewOnly={false}
          isHide={false}
          inputStyle={inputStyle}
        />
        <FormikControl
          name={`careUnitCounts[4].count`}
          label='Intensive Critical Care Unit:'
          type='number'
          isViewOnly={false}
          isHide={false}
          inputStyle={inputStyle}
        />
        <FormikControl
          name={`careUnitCounts[5].count`}
          label='Medical ICU:'
          type='number'
          isViewOnly={false}
          isHide={false}
          inputStyle={inputStyle}
        />
        <FormikControl
          name={`careUnitCounts[6].count`}
          label='Pediatric ICU:'
          type='number'
          isViewOnly={false}
          isHide={false}
          inputStyle={inputStyle}
        />
        <FormikControl
          name={`careUnitCounts[7].count`}
          label='Surgical ICU:'
          type='number'
          isViewOnly={false}
          isHide={false}
          inputStyle={inputStyle}
        />
      </div>
      <div className={styles.gridSectionContainer}>
        {sectionEFacilitiesFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={field.name}
            label={field.label}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            inputStyle={inputStyle}
            options={field.options}
          />
        ))}
      </div>
      {infrastructureFormsData.length > 0 ? (
        <p className={styles.sectionHeading}>
          Hospital Internal Infrastructure
        </p>
      ) : null}
      <div className={styles.gridSectionContainer}>
        {infrastructureFormsData.map((field, index) => {
          return (
            <FormikControl
              key={crypto.randomUUID()}
              name={`facilities.internalInfrastructure[${index}].${field.name}`}
              label={field.label}
              type={field.type}
              options={field.options}
              isViewOnly={field.isViewOnly}
              isHide={field.isHide}
              inputStyle={inputStyle}
            />
          )
        })}
      </div>
    </div>
  )
}

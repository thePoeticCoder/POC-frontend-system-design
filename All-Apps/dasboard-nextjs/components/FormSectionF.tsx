import React from 'react'
import {
  acBedInfo,
  acSingleBedInfo,
  acTwinSharingBedInfo,
  generalWardBedInfo,
  iccuBedInfo,
  icuBedInfo,
  micuBedInfo,
  multiSharingBedInfo,
  nonAcSingleBedInfo,
  nonAcTwinSharingBedInfo,
  picuBedInfo,
  sicuBedInfo,
} from '../constants/FieldsSectionF'
import styles from '../styles/formSectionF.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionF = () => {
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
        SECTION F: DETAILS OF BED STRENGTH (PLEASE SPECIFY THE EXACT COUNT)
      </p>
      <p className={styles.sectionSubHeading}>AC Suite:</p>
      <div className={styles.gridSectionContainer}>
        {acBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[0].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>AC Single:</p>
      <div className={styles.gridSectionContainer}>
        {acSingleBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            type={field.type}
            name={`detailsToBedStrength[1].${field.name}`}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>NON AC Single:</p>
      <div className={styles.gridSectionContainer}>
        {nonAcSingleBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[2].${field.name}`}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            type={field.type}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>AC Twin Sharing:</p>
      <div className={styles.gridSectionContainer}>
        {acTwinSharingBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[3].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>Non AC Twin Sharing:</p>
      <div className={styles.gridSectionContainer}>
        {nonAcTwinSharingBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[4].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>Multi Sharing 3-4 beds:</p>
      <div className={styles.gridSectionContainer}>
        {multiSharingBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[5].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>General Ward (AC/Non AC):</p>
      <div className={styles.gridSectionContainer}>
        {generalWardBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[6].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>ICU:</p>
      <div className={styles.gridSectionContainer}>
        {icuBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[7].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>ICCU:</p>
      <div className={styles.gridSectionContainer}>
        {iccuBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[8].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>MICU:</p>
      <div className={styles.gridSectionContainer}>
        {micuBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[9].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}{' '}
      </div>
      <p className={styles.sectionSubHeading}>SICU:</p>
      <div className={styles.gridSectionContainer}>
        {sicuBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[10].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
      <p className={styles.sectionSubHeading}>PICU:</p>
      <div className={styles.gridSectionContainer}>
        {picuBedInfo.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={`detailsToBedStrength[11].${field.name}`}
            type={field.type}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
    </div>
  )
}

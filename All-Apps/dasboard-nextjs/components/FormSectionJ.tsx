import { sectionJFormsData } from '../constants/FieldsSectionJ'
import styles from '../styles/formSectionJ.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionJ = () => {
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
      <p className={styles.sectionHeading}>SECTION J: Quality Parameters</p>
      <div className={styles.gridSectionContainer}>
        {sectionJFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={field.name}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            type={field.type}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
    </div>
  )
}

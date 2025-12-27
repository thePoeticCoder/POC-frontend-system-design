import { sectionKFormsData } from '../constants/FieldsSectionK'
import styles from '../styles/formSectionK.module.css'
import { FormikControl } from './FormikControl'

export const FormSectionK = () => {
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
        SECTION K: Enclosures (Mandatorily to be submitted by hospitals)
      </p>
      <div className={styles.gridSectionContainer}>
        {sectionKFormsData.map((field) => (
          <FormikControl
            key={crypto.randomUUID()}
            name={field.name}
            isViewOnly={field.isViewOnly}
            isHide={field.isHide}
            type={field.type}
            options={field.options}
            label={field.label}
            inputStyle={inputStyle}
          />
        ))}
      </div>
    </div>
  )
}

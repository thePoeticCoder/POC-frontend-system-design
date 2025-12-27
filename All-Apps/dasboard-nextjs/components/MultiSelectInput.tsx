import { ErrorMessage, Field, FieldProps } from 'formik'
import React from 'react'
import styles from '../styles/multiselect.module.css'
import { StyleType } from './FilledInput'
import { SelectField } from './SelectField'

export type MultiSelectInputOptionType = {
  name: string
  availability: boolean
  label: string
  value: string
}

type MultiSelectInputType = {
  label: string
  name: string
  options: MultiSelectInputOptionType[]
  isViewOnly: boolean
  isHide: boolean
  inputStyle: StyleType
}

export const MultiSelectInput = ({
  label,
  name,
  options,
  isViewOnly,
  isHide,
  inputStyle,
}: MultiSelectInputType) => {
  const { errorMessage, input } = inputStyle
  return (
    <div className={`${styles.container} ${isHide ? '' : ''}`}>
      <label htmlFor={name}>{label}</label>
      <div>
        <Field
          className={input}
          component={SelectField}
          name={name}
          options={options}
        />
        <ErrorMessage name={name}>
          {(msg) => <div className={errorMessage}>{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  )
}

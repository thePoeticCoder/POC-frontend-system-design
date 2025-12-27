import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import { StyleType } from './FilledInput'

export type OptionType = { key: string; value: any }

type SelectInputType = {
  type: string
  label: string
  name: string
  isDisabled: boolean
  isHide: boolean
  options: OptionType[] // options: any
  inputStyle: StyleType
}

export const SelectInput = ({
  label,
  name,
  options,
  isDisabled,
  inputStyle,
  isHide,
}: SelectInputType) => {
  const { errorMessage, input, inputContainer, hide } = inputStyle
  return (
    <div className={`${inputContainer} ${isHide ? hide : ''}`}>
      <label htmlFor={name}>{label}</label>
      <div>
        <Field name={name} id={name}>
          {({ field }: FieldProps) => {
            return (
              <select disabled={isDisabled} className={input} {...field}>
                {options?.map((option) => (
                  <option key={option.key} value={option.value}>
                    {option.key}
                  </option>
                ))}
              </select>
            )
          }}
        </Field>
        <ErrorMessage name={name}>
          {(msg) => <div className={errorMessage}>{msg}</div>}
        </ErrorMessage>
      </div>
    </div>
  )
}

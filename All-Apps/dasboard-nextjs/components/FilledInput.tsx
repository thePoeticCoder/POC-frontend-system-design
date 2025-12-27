import { ErrorMessage, Field, FieldProps } from 'formik'
import React from 'react'

export type StyleType = {
  inputContainer: string
  input: string
  errorBorder: string
  normalBorder: string
  errorMessage: string
  hide: string
}

type FilledInputPropsType = {
  type: string
  name: string
  label: string
  isDisabled: boolean
  isHide: boolean
  inputStyle: StyleType
}

export const FilledInput = ({
  type,
  name,
  label,
  isDisabled,
  isHide,
  inputStyle,
}: FilledInputPropsType) => {
  const {
    inputContainer,
    errorBorder,
    errorMessage,
    normalBorder,
    input,
    hide,
  } = inputStyle

  return (
    <div className={`${inputContainer} ${isHide ? hide : ''}`}>
      <label htmlFor={name}>{label}</label>
      <div>
        <Field type={type} id={name} name={name}>
          {({ field, meta }: FieldProps) => {
            return (
              <input
                disabled={isDisabled}
                className={`${input} ${
                  meta.touched
                    ? meta.error
                      ? errorBorder
                      : normalBorder
                    : normalBorder
                }`}
                type={type}
                {...field}
              />
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

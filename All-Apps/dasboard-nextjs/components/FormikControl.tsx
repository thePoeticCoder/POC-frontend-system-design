import React from 'react'
import { FilledInput, StyleType } from './FilledInput'
import {
  MultiSelectInput,
  MultiSelectInputOptionType,
} from './MultiSelectInput'
import { OptionType, SelectInput } from './SelectInput'

type FormikControlPropsType = {
  type: string
  label: string
  name: string
  isViewOnly: boolean
  isHide: boolean
  options?: OptionType[]
  multiSelectOption?: MultiSelectInputOptionType[]
  inputStyle: StyleType
}

export const FormikControl = ({
  type,
  label,
  name,
  options,
  multiSelectOption,
  isViewOnly,
  isHide,
  inputStyle,
}: FormikControlPropsType) => {
  switch (type) {
    case 'number':
    case 'email':
    case 'password':
    case 'text':
      return (
        <FilledInput
          isDisabled={isViewOnly}
          isHide={isHide}
          name={name}
          label={label}
          type={type}
          inputStyle={inputStyle}
        />
      )

    case 'select':
      return (
        <SelectInput
          isDisabled={isViewOnly}
          isHide={isHide}
          name={name}
          label={label}
          type={type}
          options={options ? options : []}
          inputStyle={inputStyle}
        />
      )
    case 'multiselect':
      return (
        <MultiSelectInput
          label={label}
          name={name}
          options={multiSelectOption ? multiSelectOption : []}
          isHide={isHide}
          isViewOnly={isViewOnly}
          inputStyle={inputStyle}
        />
      )
    default:
      return <></>
  }
}

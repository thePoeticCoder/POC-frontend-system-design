import Select from 'react-select'
import { FieldProps, FormikProps, useField } from 'formik'
import React from 'react'
import styles from '../styles/multiselect.module.css'
import { MultiSelectInputOptionType } from './MultiSelectInput'
const SelectField = (props: any) => {
  const [_, state, { setValue, setTouched }] = useField(props.field.name)
  const onChange = (value: MultiSelectInputOptionType[]) => {
    setValue(value)
  }

  return (
    <Select
      {...props}
      value={state?.value}
      isMulti
      onChange={onChange}
      onBlur={setTouched}
      className={styles.multiselectDropdown}
      options={props.options}
    />
  )
}

export { SelectField }

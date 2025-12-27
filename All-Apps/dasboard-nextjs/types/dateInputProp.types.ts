import { AdmissionFormActionTypes } from './admissionReducer.types'
import { Dispatch } from 'react'

export type DateInputPropType = {
  isDisableInput:boolean
  placeholder?: string
  setDate: (e: Date) => void
  date: Date | undefined | null
  initialDate?: Date | undefined | null
  container: string
  datePickerContainerStyle: string
  isDateDisable: (date: Date) => boolean
}

export type DatePickerType = {
  isDateDisable: (date: Date) => boolean
  toggleDisplay: () => void
  setSelectedDay: (arg: Date) => void
  selectedDay: Date | undefined | null
  initialDate: Date | null
}

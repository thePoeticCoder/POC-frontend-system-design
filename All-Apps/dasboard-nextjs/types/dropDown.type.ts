import { Dispatch } from 'react'
import { OpenTicketsSearchOptionActionType } from './openTicketsTable.types'

type OptionType = {
  option: string
  value: string
}

type DropDownType = {
  searchFilter: OptionType //DONE: Fix any type
  selectOption: (option: string, value: string) => void //DONE: Fix any type
  options: OptionType[]
  initialOption?: string
  initialValue?: string
  classNameForOpenDropDown: string
  classNameForDropDown: string
  classNameForOption: string
}

export type { DropDownType, OptionType }

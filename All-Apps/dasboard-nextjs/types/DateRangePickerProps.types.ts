import { Dispatch, SetStateAction } from 'react'
import {
  CloseTicketsActionTypes,
  DateRangeType,
} from './closeTicketsTable.types'

export type DateRangePickerPropType = {
  toggleDisplay: Dispatch<SetStateAction<boolean>>
  dateRange: DateRangeType
  ticketsDispatch: React.Dispatch<CloseTicketsActionTypes> // DONE: Fix any types
}

import { DateRangeType } from './closeTicketsTable.types'

export type OpenTicketsHooksType = {
  searchKeyForOpenTickets: string
  searchOptionForOpenTickets: string
  pageNoForOpenTickets: number
}

export type CloseTicketsHooksType = {
  searchOptionForCloseTickets: string
  searchKeyForCloseTickets: string
  pageNoForCloseTickets: number
  dateRange: DateRangeType
}

export type PaymentsTicketsHooksType = {
  searchOption: string
  searchFilter: string
  newPage: number
}

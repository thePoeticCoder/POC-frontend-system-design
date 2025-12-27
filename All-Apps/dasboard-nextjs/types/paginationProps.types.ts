import { CloseTicketsActionTypes } from './closeTicketsTable.types'
import { OpenTicketsActionType } from './openTicketsTable.types'

export type PaginationPropType = {
  pageNo: number
  totalPages: number
  ticketsDispatch: (
    arg: OpenTicketsActionType
  ) => void | ((arg: CloseTicketsActionTypes) => void)
  paginationData: PaginationType | undefined
}
export type PaginationType = {
  pageNo: number
  pageSize: number
  totalOrdersCount: number
}

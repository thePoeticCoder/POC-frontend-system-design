import { Notification } from './notification.type'

export type CashlessServiceResponse<T> = {
  data: T
  respId: string
  code: number
  errMsg: string
  dispMsg: string
}

export type FetchNotificationsResponse = {
  count: number
  pageSize: number
  hasMore: boolean
  notifications: Notification[]
}

import { Dispatch, SetStateAction } from 'react'

export type ReusablePaginationProps = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  pageSize: number
  totalRecords: number
  hasMore: boolean
  isPreviousData: boolean
}

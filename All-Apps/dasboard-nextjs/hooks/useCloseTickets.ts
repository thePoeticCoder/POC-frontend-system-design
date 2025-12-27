import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { useAuth } from '../providers/AuthProvider'
import {
  dateRangeFilterForCloseTickets,
  searchFilterForTables,
} from '../utils/utils'
import { closeTicketsService } from '../services/closeTickets.service'
import { CloseTicketsHooksType } from '../types/queryHooksParameter.types'

const getCloseTickets = async ({
  queryKey,
}: QueryFunctionContext<
  [
    string,
    string,
    string,
    number,
    { from: Date | undefined; to: Date | undefined },
    string
  ]
>) => {
  const [_, searchQuery, searchKey, page, dateRange, hospitalId] = queryKey
  const searchFilterCloseTickets = searchFilterForTables(searchQuery, searchKey)
  const dateRangeFilterCloseTickets = dateRangeFilterForCloseTickets(
    dateRange.from,
    dateRange.to
  )
  const { closed } = await closeTicketsService({
    hospitalId,
    page,
    orderStatus: 'CLOSED',
    searchFilterCloseTickets,
    dateRangeFilterCloseTickets,
  })
  return closed
}

export const useCloseTickets = ({
  searchKeyForCloseTickets,
  searchOptionForCloseTickets,
  pageNoForCloseTickets,
  dateRange,
}: CloseTicketsHooksType) => {
  const { hospitalId } = useAuth()

  const { data, isPreviousData, isError, error, isLoading } = useQuery({
    queryKey: [
      'close-tickets',
      searchOptionForCloseTickets,
      searchKeyForCloseTickets,
      pageNoForCloseTickets,
      dateRange,
      hospitalId,
    ],
    queryFn: getCloseTickets,
    keepPreviousData: true,
  })
  return { data, isPreviousData, isError, error, isLoading }
}

import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import { useAuth } from '../providers/AuthProvider'
import { openTicketsService } from '../services/openTickets.service'
import { OpenTicketsHooksType } from '../types/queryHooksParameter.types'
import { searchFilterForTables } from '../utils/utils'

const getOpenTickets = async ({
  queryKey,
}: QueryFunctionContext<[string, string, string, number, string]>) => {
  const [_, searchQuery, searchKey, page, hospitalId] = queryKey
  const searchFilterOpenTickets = searchFilterForTables(searchQuery, searchKey)
  const { open: openTicketsData } = await openTicketsService({
    hospitalId,
    page,
    orderStatus: 'OPEN',
    searchFilterOpenTickets,
  })
  return openTicketsData
}

export const useOpenTickets = ({
  searchKeyForOpenTickets,
  searchOptionForOpenTickets,
  pageNoForOpenTickets,
}: OpenTicketsHooksType) => {
  const { hospitalId } = useAuth()
  const { data, isPreviousData, isError, error, isLoading } = useQuery({
    queryKey: [
      'open-tickets',
      searchOptionForOpenTickets,
      searchKeyForOpenTickets,
      pageNoForOpenTickets,
      hospitalId,
    ],
    queryFn: getOpenTickets,
    keepPreviousData: true,
  })
  return { data, isPreviousData, isError, error, isLoading }
}

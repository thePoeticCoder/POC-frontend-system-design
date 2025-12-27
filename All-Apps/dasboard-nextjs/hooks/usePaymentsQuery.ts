import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import { searchFilterForTables } from '../utils/utils'
import { useAuth } from '../providers/AuthProvider'
import { paymentService } from '../services/payments.service'
import { PaymentsTicketsHooksType } from '../types/queryHooksParameter.types'

const getPayments = async ({
  queryKey,
}: QueryFunctionContext<[string, string, string, number, string]>) => {
  const [_, searchOption, searchQuery, page, hospitalId] = queryKey
  const searchFilter = searchFilterForTables(searchOption, searchQuery)
  const { data } = await paymentService({ hospitalId, page, searchFilter })
  return data
}

export const usePaymentsQuery = ({
  searchOption,
  searchFilter,
  newPage,
}: PaymentsTicketsHooksType) => {
  const { hospitalId } = useAuth()
  const { data, isPreviousData, isError, isLoading, error } = useQuery({
    queryKey: ['query', searchOption, searchFilter, newPage, hospitalId],
    queryFn: getPayments,
    keepPreviousData: true,
  })
  return { data, isPreviousData, isError, isLoading, error }
}

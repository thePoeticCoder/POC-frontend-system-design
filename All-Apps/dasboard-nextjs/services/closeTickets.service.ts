import authAxios from './axios'
import { CloseTicketsServiceType } from '../types/services.types'
import { CashlessServiceResponse } from '../types/CashlessServiceResponse.type'
import { ClosedTicketsType } from '../types/ticketsService.types'

export const closeTicketsService = async ({
  hospitalId,
  page,
  searchFilterCloseTickets,
  dateRangeFilterCloseTickets,
  orderStatus,
}: CloseTicketsServiceType) => {
  const { data } = await authAxios.get<
    CashlessServiceResponse<ClosedTicketsType>
  >(`/cashless/orders/${hospitalId}`, {
    params: {
      hospitalId,
      pageNo: page,
      pageSize: 5,
      orderStatus,
      ...searchFilterCloseTickets,
      ...dateRangeFilterCloseTickets,
    },
    headers: { hospitalId },
  })

  return data.data
}

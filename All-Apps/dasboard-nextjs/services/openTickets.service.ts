import authAxios from './axios'
import { OpenTicketsServiceType } from '../types/services.types'
import { CashlessServiceResponse } from '../types/CashlessServiceResponse.type'
import { OpenTicketsType } from '../types/ticketsService.types'

export const openTicketsService = async ({
  hospitalId,
  orderStatus,
  page,
  searchFilterOpenTickets,
}: OpenTicketsServiceType) => {
  const { data } = await authAxios.get<
    CashlessServiceResponse<OpenTicketsType>
  >(`/cashless/orders/${hospitalId}`, {
    params: {
      hospitalId,
      pageNo: page,
      pageSize: 5,
      orderStatus,
      ...searchFilterOpenTickets,
    },
    headers: { hospitalId },
  })
  return data.data
}

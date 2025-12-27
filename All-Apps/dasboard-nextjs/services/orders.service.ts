import { QueryFunctionContext } from '@tanstack/react-query'
import { Details } from '../types'
import { CashlessServiceResponse } from '../types/CashlessServiceResponse.type'
import authAxios from './axios'

export const fetchOrderDetails = async ({
  queryKey,
}: QueryFunctionContext<[string, string | string[] | undefined, string]>) => {
  const [_, orderId, hospitalId] = queryKey
  const url = `/cashless/order/details/${orderId}`
  const { data } = orderId
    ? await authAxios.get<CashlessServiceResponse<Details>>(url, {
        params: { hospitalId },
      })
    : ({} as { data: { data: Details } }) //DONE: Pass type to axios<type>
  return data.data
}

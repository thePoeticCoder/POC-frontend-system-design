import authAxios from './axios'
import { PaymentServiceType } from '../types/services.types'
import { CashlessServiceResponse } from '../types/CashlessServiceResponse.type'
import { PaymentResponseType, PaymentsDataType } from '../types/payments.types'

export const paymentService = async ({
  hospitalId,
  page,
  searchFilter,
}: PaymentServiceType) => {
  const { data } = await authAxios.get<
    CashlessServiceResponse<PaymentResponseType[]>
  >(`/cashless/payments/${hospitalId}`, {
    //DONE: use authAxios.get(url, {params: {}})
    params: {
      hospitalId,
      pageNo: page,
      pageSize: 5,
      sortType: 'DEC',
      ...searchFilter,
    },
    headers: { hospitalId },
  })

  return data
}

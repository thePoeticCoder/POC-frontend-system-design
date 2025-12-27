import axios from '../services/axios'
import { CreateOrderData } from '../types/docPayload.types'

const makeOrderService = (orderData: CreateOrderData, hospitalId: string) => {
  const headers = {
    hospitalId: hospitalId,
  }
  return axios.post('/cashless/order/create', orderData, { headers })
}

export const createOrder = ({
  orderData,
  hospitalId,
}: {
  orderData: CreateOrderData
  hospitalId: string
}) => {
  const apiData = makeOrderService(orderData, hospitalId)
  return apiData
}

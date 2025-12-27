import authAxios from './axios'

type VerifyOrderType = {
  orderId: string | string[] | undefined
  userId: string | undefined
  hospitalId: string
}

export const verifyOrder = ({
  orderId,
  userId,
  hospitalId,
}: VerifyOrderType) => {
  const requestPayload = {
    orderId,
    userId,
    hospitalId,
  }
  const apiData = authAxios.post('/cashless/verifyOrder', requestPayload)
  return apiData
}

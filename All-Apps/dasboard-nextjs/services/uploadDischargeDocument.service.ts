import {
  DischargeDocPayload,
  IntimationDocPayload,
} from '../types/docPayload.types'
import authAxios from './axios'

export const uploadDocumentService = async (
  formData: IntimationDocPayload | DischargeDocPayload,
  hospitalId: string
) => {
  const headers = {
    hospitalId: hospitalId,
  }
  return await authAxios.post('/cashless/updateOrder', formData, { headers })
}

export const uploadDocuments = async ({
  formData,
  hospitalId,
}: {
  formData: IntimationDocPayload | DischargeDocPayload
  hospitalId: string
}) => {
  const apiData = await uploadDocumentService(formData, hospitalId)
  return apiData
}

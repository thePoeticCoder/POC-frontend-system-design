import authAxios from '../services/axios'

export type UploadDocType = {
  formData: FormData
  hospitalId: string
}

const docService = async (formData: FormData, hospitalId: string) => {
  const headers = {
    hospitalId,
  }
  const { data } = await authAxios.post('/cashless/uploadFile', formData, {
    headers,
  })
  return data
}

export const uploadDoc = async ({ formData, hospitalId }: UploadDocType) => {
  const apiData = await docService(formData, hospitalId)
  return apiData
}

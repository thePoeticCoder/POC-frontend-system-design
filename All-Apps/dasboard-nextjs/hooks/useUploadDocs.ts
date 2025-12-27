import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import axios from '../services/axios'

export const useUploadDocs = (formData: FormData) => {
  const uploadDocs = async ({
    queryKey,
  }: QueryFunctionContext<[string, FormData]>) => {
    const [_, formData] = queryKey
    const { data } = await axios.post('/cashless/uploadFile', formData)
    return data
  }
  const { data, refetch } = useQuery({
    queryKey: ['upload-docs', formData],
    queryFn: uploadDocs,
    enabled: false,
  })
  return { data, refetch }
}

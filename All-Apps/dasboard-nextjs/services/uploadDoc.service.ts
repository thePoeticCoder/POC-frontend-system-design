import { AxiosError } from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { DocumentInitialValue } from '../constants/constants'
import {
  DocResponseType,
  DocumentsDataType,
  DocumentType,
} from '../types/documentUploadModal.types'
import { filterDuplicateFiles } from '../utils/utils'
import axios from './axios'

type uploadServiceType = {
  hospitalId: string
  formData: FormData
  fileName: string
  setFormData: Dispatch<SetStateAction<DocumentsDataType[]>>
}
export const uploadDocService = async ({
  fileName,
  formData,
  hospitalId,
  setFormData,
}: uploadServiceType) => {
  try {
    const {
      data: { data: apiData },
    }: DocResponseType = await axios.post('/cashless/uploadFile', formData, {
      headers: {
        hospitalId,
      },
    })
    setFormData((prev) =>
      prev.map((doc) =>
        doc.name === fileName
          ? {
              ...doc,
              data: filterDuplicateFiles(doc.data, apiData),
            }
          : doc
      )
    )
  } catch (error: any) {
    setFormData((prev) =>
      prev.map((doc) =>
        doc.name === fileName
          ? {
              ...doc,
              error: error.message,
              data: [
                ...doc.data,
                { error: error.message, fileData: DocumentInitialValue },
              ],
            }
          : doc
      )
    )
  }
}

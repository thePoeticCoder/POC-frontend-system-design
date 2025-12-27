import { DocumentInitialValue, UploadDocType } from '../constants/constants'
import { Dispatch, SetStateAction } from 'react'
import {
  DocumentsDataType,
  DocumentType,
} from '../types/documentUploadModal.types'

export const getStatesForErrors = (documents: UploadDocType[]) => {
  return documents.map((doc) => ({ documentName: doc.documentType, error: '' }))
}

export const getStatesForData = (documents: UploadDocType[]) => {
  return documents.map((doc) => ({ documentName: doc.documentType, data: {} }))
}

export const getDocumentsStatesData = (documents: UploadDocType[]) => {
  return documents.map((doc) => ({
    name: doc.name,
    documentType: doc.documentType,
    placeHolder: doc.placeHolder,
    data: [] as DocumentType[],
    error: '',
  }))
}

type RemoveErrorDocumentHandlerType = {
  error: string
  documentType: string
  setFormData: Dispatch<SetStateAction<DocumentsDataType[]>>
}

type RemoveDocumentHandlerType = {
  documentName: string
  documentType: string
  setFormData: Dispatch<SetStateAction<DocumentsDataType[]>>
}

export const removeErrorDocumentHandler = ({
  error,
  documentType,
  setFormData,
}: RemoveErrorDocumentHandlerType) => {
  setFormData((prev) =>
    prev.map((currentDoc) =>
      currentDoc.name === documentType
        ? {
            ...currentDoc,
            data: currentDoc.data.filter((file) => file.error !== error),
          }
        : currentDoc
    )
  )
}

export const removeDocumentHandler = ({
  documentName,
  documentType,
  setFormData,
}: RemoveDocumentHandlerType) => {
  setFormData((prev) =>
    prev.map((currentDoc) =>
      currentDoc.name === documentType
        ? {
            ...currentDoc,
            data: currentDoc.data.filter(
              (file) => file.fileData.userFileDisplayName !== documentName
            ),
          }
        : currentDoc
    )
  )
}

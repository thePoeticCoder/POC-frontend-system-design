import { OrderStatus } from '../constants'
import { Docs, DocumentStatus } from '../types'

export const convertCommaSeparatedStringIntoArray = (inputString: string) =>
  inputString.split(';')

export const getAdditionalDocuments = (
  additionalComment: string | undefined
) => {
  const additionalDocuments = additionalComment
    ? convertCommaSeparatedStringIntoArray(additionalComment)
    : []
  return additionalDocuments
}

export const getStatusForIntimationDocuments = (
  intimationDocumentStatus: DocumentStatus | undefined
) => {
  const statusesForIntimationDocuments = intimationDocumentStatus
    ? intimationDocumentStatus
    : {}
  return statusesForIntimationDocuments
}

export const getStatusForDischargeDocuments = (
  dischargeDocumentStatus: DocumentStatus | undefined
) => {
  const statusesForDischargeDocuments = dischargeDocumentStatus
    ? dischargeDocumentStatus
    : {}
  return statusesForDischargeDocuments
}

export const getStatusesForAllDocuments = (
  intimationDocumentStatus: DocumentStatus | undefined,
  dischargeDocumentStatus: DocumentStatus | undefined
) => {
  const statusesForAllDocuments = {
    ...getStatusForIntimationDocuments(intimationDocumentStatus),
    ...getStatusForDischargeDocuments(dischargeDocumentStatus),
  }
  return statusesForAllDocuments
}

export type UploadedDocDisplayType = {
  url: string
  fileName: string
  documentType: string
  status: string | undefined
}

type GetUploadedDocsType = {
  intimationDocuments: Docs[]
  dischargeDocuments: Docs[]
  intimationDocStatus: DocumentStatus | undefined
  dischargeDocStatus: DocumentStatus | undefined
  isFinalPayoutDone: boolean
}

export const getUploadedDocuments = ({
  intimationDocuments,
  dischargeDocuments,
  intimationDocStatus,
  dischargeDocStatus,
  isFinalPayoutDone,
}: GetUploadedDocsType): UploadedDocDisplayType[] => {
  const intimationUploadedDocuments = intimationDocuments
    ? intimationDocuments?.map((doc) =>
        doc.userDocType === 'Additional Docs Intimation'
          ? {
              url: doc.url,
              fileName: doc.userFileDisplayName,
              documentType: doc.userDocType,
              status: '',
            }
          : {
              url: doc.url,
              documentType: doc.userDocType,
              fileName: doc.userFileDisplayName,
              status: intimationDocStatus
                ? intimationDocStatus[doc.userDocType]
                : 'PENDING',
            }
      )
    : []
  const dischargeUploadedDocuments = dischargeDocuments
    ? dischargeDocuments?.map((doc) =>
        doc.userDocType === 'Additional Docs Discharge'
          ? {
              url: doc.url,
              fileName: doc.userFileDisplayName,
              documentType: doc.userDocType,
              status: '',
            }
          : {
              url: doc.url,
              fileName: doc.userFileDisplayName,
              documentType: doc.userDocType,
              status: isFinalPayoutDone
                ? 'VALID'
                : dischargeDocStatus
                ? dischargeDocStatus[doc.userDocType]
                : 'PENDING',
            }
      )
    : []
  return [...intimationUploadedDocuments, ...dischargeUploadedDocuments]
}

export const makeUploadedDocFormat = (
  uploadedDocs: UploadedDocDisplayType[]
) => {
  const result = uploadedDocs.reduce((acc, cur) => {
    const temp = acc.find((item) => item.title === cur.documentType)
    return temp
      ? acc.map((file) =>
          file.title === temp.title
            ? { ...file, files: [...file.files, cur] }
            : file
        )
      : [...acc, { title: cur.documentType, files: [cur] }]
  }, [] as { title: string; files: UploadedDocDisplayType[] }[])
  return result
}
export const getInvalidDocuments = (
  documentStatus: DocumentStatus | undefined
) => {
  return documentStatus
    ? Object.keys(documentStatus).filter(
        (doc) =>
          documentStatus[doc] !== 'VALID' &&
          doc !== 'Additional Docs Discharge' &&
          doc !== 'Additional Docs Intimation'
      )
    : []
}

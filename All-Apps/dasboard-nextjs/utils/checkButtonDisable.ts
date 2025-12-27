import { DocumentsDataType } from '../types/documentUploadModal.types'

export const isButtonDisable = (formState: DocumentsDataType[]) => {
  const fileData = formState.map((file) => file.data)
  const isErrorsInFile = fileData.map((fileData) =>
    fileData.some((file) => file.error) ? false : true
  )
  const isFileUrl = fileData.map((fileData) =>
    fileData.some((file) => file.fileData.url) ? true : false
  )

  const isDisable =
    isErrorsInFile.length === formState.length &&
    !isErrorsInFile.includes(false) &&
    isFileUrl.length === formState.length &&
    !isFileUrl.includes(false)
      ? false
      : true
  return isDisable
}

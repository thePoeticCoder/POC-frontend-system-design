export const getUploadedDocumentExtension = (displayName: string) => {
  const docNameArr = displayName.split('.')
  return docNameArr[docNameArr.length - 1]
}

export type DocType = {
  userFileId: string
  userFileDisplayName: string
  userFileLongName: string
  userDocType: string
  directoryPath: string
  bucketId: string
  url: string
}

export type DocumentType = { error: string; fileData: ResDocType }

export type ResDocType = {
  userFileId: string
  userCollectionId: string
  userFileDisplayName: string
  userFileLongName: string
  userDocType: string
  directoryPath: string
  bucketId: string
  url: string
}

export type DocResponseType = {
  data: {
    data: ResDocType
  }
}

export type DocumentsDataType = {
  name: string
  documentType: string
  placeHolder: string
  data: DocumentType[]
  error: string
}

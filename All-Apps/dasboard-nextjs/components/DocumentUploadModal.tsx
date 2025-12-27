import styles from '../styles/documentUploadModal.module.css'
import Button from './Button'
import { ReactChangeEvent, voidFunctionType } from '../types'
import CrossIcon from './icons/CrossIcon'
import { useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { FileUploadInput } from './FileUploadInput'
import { getDocumentsStatesData } from '../utils/documentUpload'
import { RiDeleteBin6Line } from 'react-icons/ri'
import {
  discharge,
  DocumentInitialValue,
  intimation,
  UploadDocType,
} from '../constants/constants'
import { nanoid } from 'nanoid'
import {
  DocResponseType,
  DocType,
  DocumentsDataType,
  DocumentType,
  ResDocType,
} from '../types/documentUploadModal.types'
import { AddFile } from './AddFile'
import Input from './Input'
import { AxiosError } from 'axios'
import { FileView } from './FileView'
import { uploadDocService } from '../services/uploadDoc.service'
import { isAllowedFile, isFileTypeAllowed } from '../utils/utils'
import { isButtonDisable } from '../utils/checkButtonDisable'

export type InitiateDischargeModalType = {
  toggleModalDisplay: voidFunctionType
  submitHandler: (
    userId: string | string[] | undefined,
    dischargeDocuments: DocType[]
  ) => void
  documents: UploadDocType[]
  userId: string | undefined
  title: string
  isLoading: boolean
  error: unknown
}

const InitiateDischargeModal = ({
  toggleModalDisplay,
  submitHandler,
  documents,
  userId,
  title,
  isLoading,
  error,
}: InitiateDischargeModalType) => {
  const { hospitalId } = useAuth()
  const [documentsData, setDocumentsData] = useState<DocumentsDataType[]>(
    getDocumentsStatesData(documents)
  )

  const [isShowDocNameForm, setIsShowDocNameForm] = useState(false)
  const [dummyField, setDummyField] = useState(false)
  const [documentName, setDocumentName] = useState('')
  const fileInputData = documentsData
    .map(({ data: doc }) => doc.filter(({ fileData }) => fileData.url))
    .reduce((acc, cur) => [...acc, ...cur], [])
  const fileData = fileInputData.map((file) => file.fileData)

  const requiredDocuments = documents.filter((doc) =>
    [...intimation, ...discharge].includes(doc.name)
  )

  const fileHandler = async (e: ReactChangeEvent, docName: string) => {
    setDocumentsData((prev) =>
      prev.map((currentFile) =>
        currentFile.name === docName
          ? {
              ...currentFile,
              data: currentFile.data.filter((file) => file.error === ''),
            }
          : currentFile
      )
    )
    const requestPayload = {
      fileType: 'ORDER',
      userCollectionId: userId,
      userDocType:
        intimation.includes(e.target.name) || discharge.includes(e.target.name)
          ? e.target.name
          : `Additional Docs ${
              title === 'Initiate Discharge' ? 'Discharge' : 'Intimation'
            }`,
    }
    if (!e.target.files) return
    Object.values(e.target.files).forEach((file) => {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('request', JSON.stringify(requestPayload))
      isFileTypeAllowed(file.type)
        ? isAllowedFile(file.size)
          ? uploadDocService({
              fileName: e.target.name,
              formData,
              hospitalId,
              setFormData: setDocumentsData,
            })
          : setDocumentsData((prev) =>
              prev.map((doc) =>
                doc.name === e.target.name
                  ? {
                      ...doc,
                      data: [
                        ...doc.data,
                        {
                          error: `${file.name} file format not supported try PDF, Jpeg, PNG only`,
                          fileData: {} as ResDocType,
                        },
                      ],
                    }
                  : doc
              )
            )
        : setDocumentsData((prev) =>
            prev.map((doc) =>
              doc.name === e.target.name
                ? {
                    ...doc,
                    data: [
                      ...doc.data,
                      {
                        error: `${file.name} file format not supported try PDF, Jpeg, PNG only`,
                        fileData: {} as ResDocType,
                      },
                    ],
                  }
                : doc
            )
          )
    })
  }

  // const isButtonDisabled =
  //   documentsData.filter(
  //     (document) =>
  //       [...intimation, ...discharge].includes(document.name) &&
  //       documentsData.filter((document) => document.data. > 0)
  //     // document.data.userFileDisplayName
  //   ).length === requiredDocuments.length
  //     ? false
  //     : true

  const docNameSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setDocumentsData((prev) => [
      ...prev,
      {
        name: documentName,
        documentType: `Additional Docs ${
          title === 'Initiate Discharge' ? 'Discharge' : 'Intimation'
        }`,
        data: [] as DocumentType[],
        error: '',
        placeHolder: `Upload ${documentName}`,
      },
    ])
    setDocumentName('')
    setIsShowDocNameForm(false)
  }

  const removeDocumentNameFormHandler = () => {
    setIsShowDocNameForm(false)
    setDocumentName('')
  }

  const removeErrorDocumentHandler = (error: string, documentType: string) => {
    setDocumentsData((prev) =>
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

  const removeDocumentHandler = (
    documentName: string,
    documentType: string
  ) => {
    setDocumentsData((prev) =>
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

  const removeAdditionalFileInput = (documentName: string) => {
    setDocumentsData((prev) =>
      prev.filter((currentFile) => currentFile.name !== documentName)
    )
  }

  return (
    <div className='modal-bg'>
      {/* //TODO: Where is this class coming from, use styles.modalBg to keep it consistent */}
      <div className={styles.container}>
        {error instanceof AxiosError ? (
          <p className={styles.errorMsg}>{error.message}</p>
        ) : (
          <div className={styles.subContainer}>
            <p className={styles.heading}>{title}</p>
            {documentsData.map((doc) => (
              <div className={styles.fileInputContainer} key={nanoid()}>
                <div className={styles.documentNameFormContainer}>
                  <FileUploadInput
                    name={doc.name}
                    placeHolder={doc.placeHolder}
                    documentType={doc.documentType}
                    fileChangeHandler={(e) => fileHandler(e, doc.name)}
                    containerStyle={styles.modalFileInputContainer}
                  />
                  {doc.documentType === 'Additional Docs Intimation' ||
                  doc.documentType === 'Additional Docs Discharge' ? (
                    <RiDeleteBin6Line
                      onClick={() => removeAdditionalFileInput(doc.name)}
                      className={styles.deleteIcon}
                    />
                  ) : null}
                </div>
                {doc?.data?.map((file) =>
                  file.error ? (
                    <div key={crypto.randomUUID()} className={styles.errorContainer}>
                      <p className={styles.inputErrorMsg}>{file.error}</p>
                      <button
                        type='button'
                        onClick={() =>
                          removeErrorDocumentHandler(file.error, doc.name)
                        }
                        className={styles.crossBtn}
                      >
                        <CrossIcon height={12} width={12} color='#ff7056' />
                      </button>
                    </div>
                  ) : (
                    <FileView
                      removeDocumentHandler={() =>
                        removeDocumentHandler(
                          file.fileData.userFileDisplayName,
                          doc.name
                        )
                      }
                      fileName={file.fileData.userFileDisplayName}
                      fileViewContainerStyle={styles.fileViewContainer}
                    />
                  )
                )}
              </div>
            ))}
            {isShowDocNameForm ? (
              <form className={styles.form} onSubmit={docNameSubmitHandler}>
                <Input
                  type='text'
                  placeholder='Enter document name to be added:'
                  setChangeHandler={setDocumentName}
                  isError={setDummyField}
                  required={true}
                  backgroundColor='#f9eddc'
                />
                <Button
                  buttonType='submit'
                  content='Add'
                  className={styles.formAddBtn}
                />
                <Button
                  handleClick={removeDocumentNameFormHandler}
                  buttonType='button'
                  content='Cancel'
                  className={styles.formCancelBtn}
                />
              </form>
            ) : null}
            <AddFile
              clickHandler={() => setIsShowDocNameForm(true)}
              text='Additional Documents'
            />
            <Button
              isDisabled={isButtonDisable(documentsData)}
              // isDisabled={isButtonDisabled}
              className={styles.submitBtn}
              content='Submit'
              handleClick={() => submitHandler(userId, fileData)}
            />
          </div>
        )}
        <div className={styles.closeIcon} onClick={toggleModalDisplay}>
          <CrossIcon height={16} width={16} color='#F36F59' />
        </div>
      </div>
    </div>
  )
}

export default InitiateDischargeModal

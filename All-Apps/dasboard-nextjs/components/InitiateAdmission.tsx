import { useReducer, useState } from 'react'
import {
  admissionFormReducer,
  admissionInitialState,
} from '../reducers/admissionFormReducer'
import styles from '../styles/initiateAdmission.module.css'
import Button from './Button'
import DateInput from './DateInput'
import NewAdmissionSuccessModal from './NewAdmissionSuccessModal'
import { useRouter } from 'next/router'
import { FamilyDependantType } from '../types/newAdmission.types'
import { useAuth } from '../providers/AuthProvider'
import { useMutation } from '@tanstack/react-query'
import { createOrder } from '../hooks/useOrder'
import { getUploadedDocumentExtension } from '../utils/getDocumentType'
import { isButtonDisable } from '../utils/checkButtonDisable'
import Loader from './Loader'
import { AxiosError } from 'axios'
import { ErrorMessage } from './ErrorMessage'
import CloudImage from '../public/cloud.png'
import { isDateDisable } from '../utils/getFormattedDate'
import {
  isAllowedFile,
  isFamilyDependantSet,
  isFileTypeAllowed,
  isUserPlan,
} from '../utils/utils'
import { FileUploadInput } from './FileUploadInput'
import {
  DocumentsDataType,
  ResDocType,
} from '../types/documentUploadModal.types'
import { IntimationDocumentInitialValue } from '../constants/constants'
import { ReactChangeEvent } from '../types'
import { nanoid } from 'nanoid'
import { FileView } from './FileView'
import { uploadDocService } from '../services/uploadDoc.service'
import { UserDetailsType } from '../types/getUserDetails.types'
import CrossIcon from './icons/CrossIcon'
import {
  removeDocumentHandler,
  removeErrorDocumentHandler,
} from '../utils/documentUpload'

type InitiateAdmissionType = {
  user: UserDetailsType | undefined
  familyMember: FamilyDependantType | undefined
  userPlan: { userPlanCollectionId: string; userBasePlanName: string }
}

const InitiateAdmission = ({
  user,
  familyMember,
  userPlan,
}: InitiateAdmissionType) => {
  const { hospitalAddress, hospitalId, hospitalName } = useAuth()
  const router = useRouter()

  const familyDependant = {
    familyDependentsID: familyMember?._id,
    isActive: familyMember?.isActive,
    dependentHubspotContactId: '',
    masterUserId: familyMember?.masterUserId,
    dependentName: familyMember?.dependentName,
    dependentAge: familyMember?.dependentAge,
    dependentRelation: familyMember?.dependentRelation,
  }
  const {
    mutate: newOrderMutate,
    isLoading: isNewOrderLoading,
    isError: isNewOrderError,
    error: newOrderError,
    isSuccess: isNewOrderSuccess,
    data,
  } = useMutation({
    mutationFn: createOrder,
  })
  const {
    query: { userId },
  } = useRouter()
  const [admissionFormState, admissionFormDispatch] = useReducer(
    admissionFormReducer,
    admissionInitialState
  )
  const [intimationFormData, setIntimationFormData] = useState<
    DocumentsDataType[]
  >(IntimationDocumentInitialValue)

  const fileInputData = intimationFormData
    .map(({ data: doc }) => doc.filter(({ fileData }) => fileData.url))
    .reduce((acc, cur) => [...acc, ...cur], [])
  const fileData = fileInputData.map((file) => file.fileData)

  const fileHandler = async (e: ReactChangeEvent, docName: string) => {
    setIntimationFormData((prev) =>
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
      userDocType: e.target.name,
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
              setFormData: setIntimationFormData,
            })
          : setIntimationFormData((prev) =>
              prev.map((doc) =>
                doc.name === e.target.name
                  ? {
                      ...doc,
                      data: [
                        ...doc.data,
                        {
                          error: `${file.name} file size should be less than 1MB.`,
                          fileData: {} as ResDocType,
                        },
                      ],
                    }
                  : doc
              )
            )
        : setIntimationFormData((prev) =>
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

  const address =
    user?.addresses.length === 0
      ? {
          addressName: ' ',
          isPrimary: true,
          addressLine1: '   ',
          addressLine2: '   ',
          district: ' ',
          city: ' ',
          state: ' ',
          pincode: 123456,
          addressType: 'HOSPITAL',
          landmark: 'Not Available',
        }
      : user?.addresses[0]

  const formSubmitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const orderData = {
      orderFormData: {
        ipdOrder: {
          intimation: {
            address: {
              ...address,
            },
            cashless: {
              cashlessHospitalId: hospitalId,
              isCashless: true,
              orderCreatedByHospital: true,
            },
            admissionDate: admissionFormState.admissionDate
              ? new Date(admissionFormState.admissionDate).getTime() / 1000
              : 0,
            dischargeDate: admissionFormState.dischargeDate
              ? new Date(admissionFormState.dischargeDate).getTime() / 1000
              : 0,
            hospital: {
              active: true,
              address: {
                address: hospitalAddress.area,
                city: hospitalAddress.city,
                country: 'India',
                pincode: hospitalAddress.pincode,
              },
              id: hospitalId,
              name: hospitalName,
            },
            intimationDocuments: fileData.map((fileData) => ({
              ...fileData,
              tag: fileData.userDocType,
              userFileType: getUploadedDocumentExtension(
                fileData.userFileDisplayName
              ),
            })),
          },
        },
      },
      orderType: 'HOSPITAL_ADMISSION',
      ...isUserPlan(userPlan),
      userComment: '',
      userCollectionId: user?._id,
      ...isFamilyDependantSet(familyDependant),
    }
    newOrderMutate({ orderData, hospitalId })
    admissionFormDispatch({ type: 'RESET_FORM' })
  }

  const setAdmissionDate = (date: Date) => {
    admissionFormDispatch({
      type: 'SET_ADMISSION_DATE',
      payload: { admissionDate: date },
    })
  }
  const setDischargeDate = (date: Date) => {
    admissionFormDispatch({
      type: 'SET_DISCHARGE_DATE',
      payload: { dischargeDate: date },
    })
  }

  return (
    <div className={styles.container}>
      {isNewOrderSuccess ? (
        <NewAdmissionSuccessModal orderId={data?.data.data.data._id} />
      ) : null}
      <h2 className={styles.heading}>Initiate New Admission</h2>
      {isNewOrderLoading ? (
        <div className='m-auto loadingMsg'>
          <Loader />
        </div>
      ) : isNewOrderError ? (
        newOrderError instanceof AxiosError ? (
          <ErrorMessage
            title='Oops! Something went wrong!'
            buttonContent='Refresh'
            imageUrl={CloudImage}
            btnHandler={() => router.reload()}
            message={newOrderError?.response?.data?.message}
          />
        ) : null
      ) : (
        <form onSubmit={formSubmitHandler} className={styles.formContainer}>
          <div className={styles.inputsContainer}>
            {intimationFormData.map((doc) => (
              <div key={nanoid()}>
                <FileUploadInput
                  name={doc.name}
                  placeHolder={doc.placeHolder}
                  documentType={doc.documentType}
                  fileChangeHandler={(e) => fileHandler(e, doc.name)}
                  containerStyle={styles.formFileInputContainer}
                />
                {doc?.data?.map((file) =>
                  file.error ? (
                    <div key={crypto.randomUUID()} className={styles.errorContainer}>
                      <p className={styles.inputErrorMsg}>{file.error}</p>
                      <button
                        type='button'
                        onClick={() =>
                          removeErrorDocumentHandler({
                            documentType: doc.name,
                            error: file.error,
                            setFormData: setIntimationFormData,
                          })
                        }
                        className={styles.crossBtn}
                      >
                        <CrossIcon height={12} width={12} color='#ff7056' />
                      </button>
                    </div>
                  ) : (
                    <FileView
                      removeDocumentHandler={() =>
                        removeDocumentHandler({
                          documentName: file.fileData.userFileDisplayName,
                          documentType: doc.name,
                          setFormData: setIntimationFormData,
                        })
                      }
                      fileName={file.fileData.userFileDisplayName}
                      fileViewContainerStyle={styles.fileViewContainer}
                    />
                  )
                )}
              </div>
            ))}
            <DateInput
              isDateDisable={() => false}
              datePickerContainerStyle={styles.datePickerContainer}
              container={styles.dateInputContainer}
              placeholder='Date of admission'
              setDate={setAdmissionDate}
              date={admissionFormState.admissionDate}
              isDisableInput={false}
            />
            <DateInput
              isDateDisable={(date: Date) =>
                isDateDisable(date, admissionFormState.admissionDate)
              }
              isDisableInput={admissionFormState.admissionDate ? false : true}
              datePickerContainerStyle={styles.datePickerContainer}
              container={styles.dateInputContainer}
              placeholder='Tentative Discharge Date'
              setDate={setDischargeDate}
              date={admissionFormState.dischargeDate}
            />
          </div>
          <div className={styles.submitContainer}>
            <Button
              isDisabled={
                !isButtonDisable(intimationFormData) &&
                admissionFormState.admissionDate &&
                admissionFormState.dischargeDate
                  ? false
                  : true
              }
              content='Submit'
              className={styles.submitBtn}
              buttonType='submit'
            />
          </div>
        </form>
      )}
    </div>
  )
}

export default InitiateAdmission

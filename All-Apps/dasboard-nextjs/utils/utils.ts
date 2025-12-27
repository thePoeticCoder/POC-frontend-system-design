import { format } from 'date-fns'
import AWS from 'aws-sdk'
import { getPreviousDay } from './getFormattedDate'
import { PaymentsDataType, PaymentsRowType } from '../types/payments.types'
import { DocumentStatus, ReactInputChangeEvent } from '../types'
import { allowedFileTypes, UploadDocType } from '../constants/constants'
import { UserPlanDetailType } from '../types/getUserDetails.types'
import { FamilyMemberType } from '../types/docPayload.types'
import { FamilyDependantType } from '../types/newAdmission.types'
import { OrderStatus } from '../constants'
import { DocumentType, ResDocType } from '../types/documentUploadModal.types'

type IsClaimDetailsButtonDisableArgType = {
  initialAdmissionDate: Date | undefined
  initialDischargeDate: Date | undefined
  orderDates: {
    admissionDate: Date | undefined
    dischargeDate: Date | undefined
  }
}

export type calculateTotalPagesArgTypes = {
  // admissionCompleted: number
  totalOrdersCount: number | undefined
  pageSize: number | undefined
}

export const searchFilterForTables = (searchKey: string, searchQuery: string) =>
  searchQuery ? { [searchKey]: searchQuery } : {}

export const dateRangeFilterForCloseTickets = (
  startDate: Date | undefined,
  endDate: Date | undefined
) =>
  startDate && endDate
    ? {
        startDate: format(new Date(startDate), 'yyyy-MM-dd'),
        endDate: format(new Date(endDate), 'yyyy-MM-dd'),
      }
    : {}

export const calculateTotalPages = ({
  totalOrdersCount,
  pageSize,
}: calculateTotalPagesArgTypes) =>
  totalOrdersCount && pageSize ? Math.ceil(totalOrdersCount / pageSize) : 0

export const createPaginationRange = (totalPages: number) => {
  let data = []
  for (let i = 1; i <= totalPages; i++) {
    data.push(i)
  }
  return data
}

export const convertToNormalString = (str: string) =>
  Array.from(str)
    .reduce(
      (acc: string[], cur: string) =>
        cur === '_' ? [...acc, ' '] : [...acc, cur],
      []
    )
    .join('')

export const makePaymentsDataToShow = (data: PaymentsDataType[]) => {
  return data?.map((payment) => ({
    orderId: payment?._id,
    hubspotContactId: payment?.hubspotContactId,
    name: payment?.name,
    admissionDate: payment?.admissionDate,
    dischargeDate: payment?.dischargeDate,
    securityDeposit: payment?.securityDepositPayout?.amount,
    UTRN1: payment?.securityDepositPayout?.UTR,
    estimateAmount: payment?.reimbursementAmount,
    dischargeSettlement: payment?.finalPayout?.amount,
    UTRN2: payment?.finalPayout?.UTR,
    claimId: payment?.hubspotTicketId,
  }))
}

export const sendErrorMessage = (statusCode: number | undefined) => {
  switch (statusCode) {
    case 400:
      return 'Unexpected error occurred from the server side'
    case 404:
      return 'No order record was found for provided order id'
    case 500:
      return 'Internal server error'
    default:
      return 'Server Error'
  }
}

export const calculateTotalValueProcessed = (
  paymentsData: PaymentsDataType[]
) => {
  const totalSecurityDepositAmount = paymentsData.reduce(
    (acc, cur) =>
      cur.securityDepositPayout ? acc + cur.securityDepositPayout.amount : acc,
    0
  )
  const totalFinalPayoutAmount = paymentsData.reduce(
    (acc, cur) => (cur.finalPayout ? acc + cur.finalPayout.amount : acc),
    0
  )
  const totalValuesProcessed =
    totalSecurityDepositAmount + totalFinalPayoutAmount
  return totalValuesProcessed
}

export const FormatDate = (date: Date | null | undefined) => {
  if (date) {
    const splitedDate = new Date(date?.toString().split('T')[0])
      .toString()
      .split(' ')
    return {
      day: splitedDate[2],
      month: splitedDate[1],
      year: splitedDate[3],
    }
  }
}

export const getHoursAndMinutes = (date: Date | null | undefined) => {
  if (date) {
    const splitedDate = date?.toString().split('T')[1].split('.')[0].split(':')
    return {
      hours: splitedDate[0],
      minutes: splitedDate[1],
      seconds: splitedDate[2],
    }
  }
}

export const getPublicUrl = (value: string) => {
  AWS.config.region = 'ap-south-1'
  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_AWS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
  })

  const s3 = new AWS.S3()
  AWS.config.region = 'ap-south-1'

  const arr = value?.split('/')

  let k = ''
  let b = ''
  b = arr?.[2]?.split('.')?.[0]

  for (let i = 3; i < arr?.length - 1; i++) {
    k += arr[i] + '/'
  }
  k += arr && arr[arr?.length - 1]

  let url = ''
  url = s3.getSignedUrl('getObject', {
    Bucket: b,
    Key: k,
  })
  return url
}

export const isDateEditable = (admissionDate: Date, dischargeDate: Date) => {
  const todayDateTimeStamp = new Date().getTime()
  const admissionDateTimeStamp = new Date(admissionDate).getTime()
  const dischargeDateTimeStamp = new Date(dischargeDate).getTime()
  const isDateEditable =
    admissionDateTimeStamp > todayDateTimeStamp &&
    dischargeDateTimeStamp > todayDateTimeStamp
      ? true
      : false
  return isDateEditable
}

export const checkDateType = (date: Date | null | undefined) => {
  return date
    ? typeof date === 'string'
      ? new Date(date)
      : new Date(date)
    : undefined
}

export const isClaimDetailsButtonDisable = ({
  initialAdmissionDate,
  initialDischargeDate,
  orderDates,
}: IsClaimDetailsButtonDisableArgType) => {
  const isButtonDisable =
    initialAdmissionDate &&
    initialDischargeDate &&
    orderDates.admissionDate &&
    orderDates.dischargeDate
      ? getPreviousDay(initialAdmissionDate)?.getTime() ===
          checkDateType(orderDates.admissionDate)?.getTime() &&
        getPreviousDay(initialDischargeDate)?.getTime() ===
          checkDateType(orderDates.dischargeDate)?.getTime()
        ? true
        : false
      : false
  return isButtonDisable
}

export const rejectedDocsArray = (
  requestedObj:
    | {
        [name: string]: 'VALID' | 'INVALID'
      }
    | undefined
) => {
  const result = requestedObj
    ? Object.keys(requestedObj).filter((doc) => {
        return requestedObj[doc] === 'INVALID'
      })
    : []
  return result
}

export const formatDocuments = (rejectedDocsArray: string[]) => {
  const formattedArray = rejectedDocsArray.map((docName) => ({
    name: docName,
    placeHolder: `Upload ${docName}*`,
    documentType: docName,
  }))
  return formattedArray
}

export const formatAdditionalDocuments = (additionalDocsArray: string[]) => {
  const formattedArray = additionalDocsArray.map((docName) => {
    return {
      name: docName,
      placeHolder: `Upload ${docName}`,
      documentType: 'Additional Docs Intimation',
    }
  })
  return formattedArray
}

export const isRejectedDocumentsMoreThanZero = (
  docStatusObject: DocumentStatus | undefined
) => {
  const result = rejectedDocsArray(docStatusObject).length > 0
  return result
}

export const getRejectedDocuments = (
  intimationDocStatus: DocumentStatus | undefined,
  dischargeDocStatus: DocumentStatus | undefined
) => {
  const allRejectedDocs = { ...intimationDocStatus, ...dischargeDocStatus }
  const result = allRejectedDocs
    ? Object.keys(allRejectedDocs).filter((doc) => {
        return allRejectedDocs[doc] === 'INVALID'
      })
    : []
  return result
}

export const isUserAdmin = (userRole: string) => {
  return userRole === 'ADMIN' ? true : false
}

export const getFamilyMembers = (familyMembers: FamilyDependantType[]) => {
  const activeFamilyMembers = familyMembers
    ? familyMembers.filter((member) => member.isActive)
    : []
  const familyMembersList = activeFamilyMembers?.map((member) => ({
    id: member._id,
    option: member.dependentName,
    value: member.dependentName,
  }))
  return [...familyMembersList]
}

export const getFamilyPlans = (userCurrentPlans: UserPlanDetailType[]) => {
  const activePlans = userCurrentPlans?.filter(
    (plan) => plan.userPlanIsActive && plan.isOrderAllowed
  )
  const currentPlans =
    activePlans?.length >= 0
      ? activePlans.map((plan) => ({
          option: plan.userBasePlanName,
          value: plan.userBasePlanName,
        }))
      : []
  return [...currentPlans]
}

export const isFamilyDependantSet = (familyDependant: FamilyMemberType) => {
  return familyDependant?.familyDependentsID
    ? {
        targetFamilyDependentDetails: familyDependant,
      }
    : {}
}

export const getDocumentsName = (documents: UploadDocType[]) => {
  return documents.map((doc) => doc.documentType)
}

export const convertBytesToMb = (bytes: number) => {
  const temp: string = Math.pow(1024, 2).toFixed(2)
  const result = (bytes / Number(temp)) * 1
  return result
}

export const isAllowedFile = (size: number) => {
  const fileSize = size ? convertBytesToMb(size) : 0
  return fileSize < 1 ? true : false
}

export const isFileTypeAllowed = (fileType: string) => {
  return fileType ? allowedFileTypes.includes(fileType) : false
}

export const isUserPlan = (userPlan: {
  userPlanCollectionId: string
  userBasePlanName: string
}) => {
  return userPlan.userPlanCollectionId
    ? {
        userPlanCollectionId: userPlan.userPlanCollectionId,
        userPlanName: userPlan.userBasePlanName,
      }
    : ({} as {
        userPlanCollectionId: string
        userPlanName: string
      })
}

export const getPaymentTime = (date: Date | null | undefined) => {
  const time = getHoursAndMinutes(date)
  let isAmOrPm
  let modifiedHours
  isAmOrPm = Number(time?.hours) >= 12 ? 'PM' : 'AM'
  modifiedHours = Number(time?.hours) % 12
  modifiedHours = modifiedHours ? modifiedHours : 12
  const timeToShow = `${modifiedHours}:${time?.minutes} ${isAmOrPm}`
  return timeToShow
}

export const getNextOrderStatus = (status: OrderStatus | undefined) => {
  switch (status) {
    case OrderStatus.WAITING_FOR_INTIMATION_DOCUMENTS:
      return 'Upload Intimation Docs'
    case OrderStatus.WAITING_FOR_PRIMARY_APPROVAL:
      return 'Primary Approval'
    case OrderStatus.WAITING_FOR_ADMISSION_DOCUMENTS:
      return 'Upload Admission Docs'
    case OrderStatus.WAITING_FOR_DISCHARGE_DOCUMENTS:
      return 'Upload Discharge Docs'
    case OrderStatus.ADMISSION_DOCS_UPLOADED:
      return 'Waiting For SD'
    case OrderStatus.SD_PAYOUT_GENERATED:
      return 'Upload Discharge Docs'
    case OrderStatus.DISCHARGE_DOCUMENTS_RECEIVED:
      return 'Waiting For Final Payout'
    case OrderStatus.FINAL_PAYOUT_ACCEPTED:
      return 'CLOSED'
    case OrderStatus.CLOSED:
      return 'APPROVED'
    default:
      return 'Not determined'
  }
}

export const isUserAllowedToMakeAnOrder = (plans: UserPlanDetailType[]) => {
  const allowedPlans = plans?.filter((plan) => plan.isOrderAllowed)
  return allowedPlans?.length > 0 ? true : false
}

export const filterDuplicateFiles = (
  inputArray: DocumentType[],
  newFile: ResDocType
) => {
  const temp = inputArray.find(
    (file) => file.fileData.userFileDisplayName === newFile.userFileDisplayName
  )
  return temp ? inputArray : [...inputArray, { error: '', fileData: newFile }]
}

export const checkNullValue = (value: string | number) => (value ? value : '-')

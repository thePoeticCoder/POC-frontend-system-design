import { DocumentType, ResDocType } from '../types/documentUploadModal.types'

export const DEBOUNCE_DELAY_TIME = 700
export const ONE_DAY_SECONDS = 86400

export const SET_SEARCH_KEY = 'SET_SEARCH_KEY'
export const SET_PAGE = 'SET_PAGE'
export const RESET_PAGE = 'RESET_PAGE'
export const SET_NEXT_PAGE = 'SET_NEXT_PAGE'
export const SET_PREV_PAGE = 'SET_PREV_PAGE'
export const SET_SEARCH_FILTER_OPTION = 'SET_SEARCH_FILTER_OPTION'
export const SET_DATE_RANGE = 'SET_DATE_RANGE'

export const familyMemberOptions = [
  {
    option: 'Select family member',
    value: '',
  },
  {
    option: 'Family Member 1',
    value: 'familyMember1',
  },
  {
    option: 'Family Member 2',
    value: 'familyMember2',
  },
  {
    option: 'Family Member 3',
    value: 'familyMember3',
  },
]

export const openTicketsFiltersOptions = [
  {
    option: 'Customer Name',
    value: 'customerName',
  },
  {
    option: 'Status',
    value: 'orderStatus',
  },
  {
    option: 'Kenko ID',
    value: 'kenkoId',
  },
]

export const closeTicketsFiltersOptions = [
  {
    option: 'Customer Name',
    value: 'customerName',
  },
  {
    option: 'Customer Id',
    value: 'kenkoId',
  },
]

export const paymentsFiltersOptions = [
  { option: 'Customer Name', value: 'name' },
  { option: 'Customer Id', value: 'customerId' },
  { option: 'UTRN', value: 'utrn' },
]

export enum fileTypes {
  DOCTOR_ADVICE = 'Doctor Advice',
  LAB_REPORT = 'Lab Report',
  HOSPITAL_ESTIMATE = 'Hospital Estimate',

  // Admission
  ADMISSION_SELFIE = 'Admission Selfie',

  // Discharge
  SECURITY_DEPOSIT_RECEIPT = 'Security Deposit Receipt',
  FINAL_ITEMISED_BILL = 'Final Itemised Bill',
  DISCHARGE_SUMMARY = 'Discharge Summary',
  PRESCRIPTION = 'Prescription',
  PRESCRIPTION_BILL = 'Prescription Bill',
  ADDITIONAL_DOCS = 'Additional Docs',
}

export type UploadDocType = {
  name: string
  documentType: string
  placeHolder: string
}

export const rejectedIntimationDocs: UploadDocType[] = [
  {
    name: 'Doctor Advice',
    placeHolder: "Upload doctor's advice",
    documentType: 'Doctor Advice',
  },
  {
    name: 'lab report',
    placeHolder: 'Upload lab report',
    documentType: 'Lab Report',
  },
]

export const requiredDischargeDocuments: UploadDocType[] = [
  {
    name: 'Security Deposit Receipt',
    documentType: 'Security Deposit Receipt',
    placeHolder: 'Upload security deposit receipt*',
  },
  {
    name: 'Final Itemised Bill',
    documentType: 'Final Itemised Bill',
    placeHolder: 'Upload final itemised bill*',
  },
  {
    name: 'Discharge Summary',
    documentType: 'Discharge Summary',
    placeHolder: 'Upload discharge summary*',
  },
]

export const DocumentInitialValue = {
  userFileId: '',
  userCollectionId: '',
  userFileDisplayName: '',
  userFileLongName: '',
  userDocType: '',
  directoryPath: '',
  bucketId: '',
  url: '',
}

export const IntimationDocumentInitialValue = [
  {
    name: 'Doctor Advice',
    placeHolder: "Upload doctor's advice*",
    documentType: 'Doctor Advice',
    data: [] as DocumentType[],
    error: '',
  },
  {
    name: 'Hospital Estimate',
    placeHolder: 'Upload hospital estimate*',
    documentType: 'Hospital Estimate',

    data: [] as DocumentType[],
    error: '',
  },
  {
    name: 'Lab Report',
    placeHolder: 'Upload lab report*',
    documentType: 'Lab Report',
    data: [] as DocumentType[],
    error: '',
  },
]

export const intimation = ['Doctor Advice', 'Lab Report', 'Hospital Estimate']
export const discharge = [
  'Security Deposit Receipt',
  'Final Itemised Bill',
  'Discharge Summary',
]

export const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf']

export type UploadedDocType = {
  userFileId: string
  userCollectionId: string
  userFileDisplayName: string
  userFileLongName: string
  userDocType: string
  directoryPath: string
  bucketId: string
  url: string
}

export type AdmissionInitialStateType = {
  isLoading: boolean
  isErrorInDoctorAdvice: boolean
  isErrorInHospitalEstimate: boolean
  isErrorInLabReport: boolean
  intimationDocuments: UploadedDocType[]
  admissionDate: Date | null
  dischargeDate: Date | null
}

export type DocumentUploadLoadingType = {
  type: 'SET_LOADING'
  payload: {
    isLoading: boolean
  }
}

export type DoctorAdviceErrorType = {
  type: 'SET_ERROR_FOR_DOCTOR_ADVICE'
  payload: {
    isErrorInDoctorAdvice: boolean
  }
}

export type HospitalEstimateErrorType = {
  type: 'SET_ERROR_FOR_HOSPITAL_ESTIMATE'
  payload: {
    isErrorInHospitalEstimate: boolean
  }
}

export type LabReportErrorType = {
  type: 'SET_ERROR_FOR_LAB_REPORT'
  payload: {
    isErrorInLabReport: boolean
  }
}

export type UploadDocumentType = {
  type: 'SET_UPLOADED_DOCUMENT'
  payload: {
    intimationDocuments: UploadedDocType
  }
}

export type AdmissionDateType = {
  type: 'SET_ADMISSION_DATE'
  payload: {
    admissionDate: Date | null
  }
}

export type DischargeDateType = {
  type: 'SET_DISCHARGE_DATE'
  payload: {
    dischargeDate: Date | null
  }
}

export type RESET_FORM = {
  type: 'RESET_FORM'
}

export type AdmissionFormActionTypes =
  | DocumentUploadLoadingType
  | DoctorAdviceErrorType
  | HospitalEstimateErrorType
  | LabReportErrorType
  | UploadDocumentType
  | AdmissionDateType
  | DischargeDateType
  | RESET_FORM

import {
  AdmissionFormActionTypes,
  AdmissionInitialStateType,
} from '../types/admissionReducer.types'

export const admissionInitialState = {
  isLoading: false,
  isErrorInDoctorAdvice: false,
  isErrorInHospitalEstimate: false,
  isErrorInLabReport: false,
  intimationDocuments: [],
  admissionDate: null,
  dischargeDate: null,
}

export const admissionFormReducer = (
  state: AdmissionInitialStateType,
  action: AdmissionFormActionTypes
) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload.isLoading }

    case 'SET_ERROR_FOR_DOCTOR_ADVICE':
      return {
        ...state,
        isErrorInDoctorAdvice: action.payload.isErrorInDoctorAdvice,
      }

    case 'SET_ERROR_FOR_HOSPITAL_ESTIMATE':
      return {
        ...state,
        isErrorInHospitalEstimate: action.payload.isErrorInHospitalEstimate,
      }

    case 'SET_UPLOADED_DOCUMENT':
      return {
        ...state,
        intimationDocuments: [
          ...state.intimationDocuments,
          action.payload.intimationDocuments,
        ],
      }

    case 'SET_ADMISSION_DATE':
      return { ...state, admissionDate: action.payload.admissionDate }

    case 'SET_DISCHARGE_DATE':
      return { ...state, dischargeDate: action.payload.dischargeDate }

    case 'RESET_FORM':
      return admissionInitialState

    default:
      return state
  }
}

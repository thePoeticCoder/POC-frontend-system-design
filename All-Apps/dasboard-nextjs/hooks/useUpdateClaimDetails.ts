import { ONE_DAY_SECONDS } from '../constants/constants'
import authAxios from '../services/axios'
import {
  checkDateType,
  convertToDate,
  finalTimeStamp,
  getDateTimeStamp,
} from '../utils/getFormattedDate'

type UpdateClaimDetailArgType = {
  dates: {
    admissionDate: Date | undefined
    dischargeDate: Date | undefined
  }
  orderId: string | string[] | undefined
  hospitalId: string
}

const updateClaimDetailsService = ({
  dates: { admissionDate, dischargeDate },
  orderId,
  hospitalId,
}: UpdateClaimDetailArgType) => {
  const headers = {
    hospitalId,
  }
  const requestPayload = {
    orderId,
    admissionDate: admissionDate ? finalTimeStamp(admissionDate) : 0,
    dischargeDate: dischargeDate ? finalTimeStamp(dischargeDate) : 0,
  }

  return authAxios.post(
    '/cashless/update/admissionOrDischargeDate',
    requestPayload,
    { headers }
  )
}

export const updateClaimDetails = ({
  dates,
  orderId,
  hospitalId,
}: UpdateClaimDetailArgType) => {
  const apiData = updateClaimDetailsService({ dates, orderId, hospitalId })
  return apiData
}

import { CashlessServiceResponse } from '../types/CashlessServiceResponse.type'
import { UserType } from '../types/newAdmission.types'
import authAxios from './axios'

const stringMatcher = /^\d+$/

const calculateSearchKey = (searchKey: string) => {
  return stringMatcher.test(searchKey)
    ? { phoneNumber: searchKey }
    : { emailId: searchKey }
}

export type FetchUserResponse<UserType> = {
  data: UserType
  code: number
  dispMsg: string
  errMsg: null | string
  respId: string
}

export const getUserService = async (
  searchValue: string,
  hospitalId: string
) => {
  const headers = {
    hospitalId,
  }
  const config = {
    headers,
    params: calculateSearchKey(searchValue),
  }
  const { data } = await authAxios.get<
    CashlessServiceResponse<FetchUserResponse<UserType[]>>
  >(`/cashless/getUser`, config)
  return data.data.data
}

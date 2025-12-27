import {
  AddUserType,
  deleteUserType,
  EditUserType,
} from "./../types/userAccess.type";

import authAxios from "./axios";
import { User, UserDetails } from "../types/userAccess.type";
import { CashlessServiceResponse } from "../types/CashlessServiceResponse.type";
export const fetchAllUserList = async () => {
  const hospitalId = localStorage.getItem("hospitalId");
  if (!hospitalId) {
    return [] as User[];
  }
  const { data } = await authAxios.get<CashlessServiceResponse<User[]>>(
    `/user-access/get-all-user?hospitalId=${hospitalId}`
  );
  return data.data;
};
export const addUserOrAdmin = async (AddUserBody: AddUserType) => {
  const { data } = await authAxios.post<CashlessServiceResponse<any>>(
    `/user-access/add-user?hospitalId=${AddUserBody.hospitalId}`,
    AddUserBody
  );
  return data.code;
};

export const editExistingUser = async (EditUserBody: EditUserType) => {
  const { data } = await authAxios.post<CashlessServiceResponse<any>>(
    `/user-access/edit-user?hospitalId=${EditUserBody.hospitalId}`,
    EditUserBody
  );
  return data.data;
};
export const deleteUser = async (user: deleteUserType, hospitalId: string) => {
  const { data } = await authAxios.post<CashlessServiceResponse<any>>(
    `/user-access/delete-user?hospitalId=${hospitalId}`,
    { ...user }
  );

  return data.data;
};

export function mapUserBody(
  name: string,
  email: string,
  phone: string,

  role: string,
  designation: string,
  hospitalId: string
) {
  let addUserBody: AddUserType = {
    hospitalId: hospitalId,
    email: email,
    Designation: designation,
    name: name,
    phone: phone,
    role: role,
  };

  return addUserBody;
}
export function validatePhoneNumbers(numbers: string) {
  const PHONE_REGEX = /^[0]?(91)?[789]\d{9}$/;
    const phoneNumbers = numbers.split("/");
    var isPhoneCorrect = true;
    phoneNumbers.forEach((element) => {
      isPhoneCorrect = isPhoneCorrect && PHONE_REGEX.test(element);
    });
  return isPhoneCorrect;

}
export function validateEmailId(email:string,){
  const EMAIL_REGEX=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const res= EMAIL_REGEX.test(email)
  return res;

}
export function ValidateName(name:string){
  var NAME_REGEX = /^[a-zA-Z ]{2,30}$/;
  const res= NAME_REGEX.test(name);
  return res;
  
}

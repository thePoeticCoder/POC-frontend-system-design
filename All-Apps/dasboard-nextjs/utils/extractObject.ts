import {
  BedStrengthType,
  CareUnitCountType,
  ClinicalServices,
  ClinicalServiceType,
  ContactDetailType,
  FacilityType,
  HospitalContactDetails,
  HospitalDetails,
} from '../types/hospitalDetails.types'

export const extractContact = (
  inputArray: ContactDetailType[],
  key: string
) => {
  const obj = inputArray.find((person) => person.Designation === key)
  return obj ? obj : ({} as ContactDetailType)
}

export const extractRoom = (inputArray: BedStrengthType[], key: string) => {
  const obj = inputArray.find((room) => room.roomType === key)
  return obj ? obj : ({} as BedStrengthType)
}

export const extractCareUnit = (
  inputArray: CareUnitCountType[],
  key: string
) => {
  const obj = inputArray.find((unit) => unit.careUnitName === key)
  return obj ? obj : ({} as CareUnitCountType)
}

export const extractService = (
  inputArray: ClinicalServiceType[],
  key: string
) => {
  const obj = inputArray.find(({ service }) => service === key)
  return obj ? obj : ({} as ClinicalServiceType)
}

export const extractInfraStructure = (
  inputArray: FacilityType[],
  key: string
) => {
  const obj = inputArray.find((facility) => facility.name === key)
  return obj ? obj : ({} as FacilityType)
}

export const filterOutBasedOnId = (inputArray: HospitalContactDetails) => {
  return inputArray.filter((obj) => obj.id)
}

export const filterBasedOnName = (inputArray: FacilityType[]) => {
  return inputArray.filter((obj) => obj.name)
}

export const findIndex = (service: string, inputArray: ClinicalServices) => {
  const filteredService = inputArray?.find((item) => item.service === service)
  const result = filteredService ? inputArray.indexOf(filteredService) : 0
  return result
}

export const getUpdatedValues = (values: HospitalDetails) => {
  const temp = {
    ...values,
    facilities: {
      ...values.facilities,
      internalInfrastructure: values.facilities.internalInfrastructure.map(
        (item) => ({
          ...item,
          availability:
            typeof item.availability === 'string'
              ? !Boolean(item.availability)
              : item.availability,
        })
      ),
    },
  }
  return temp
}

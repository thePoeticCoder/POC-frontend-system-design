export type FacilityType = {
  name: string
  availability: boolean
}

export type CareUnitCountType = {
  id: number
  hospitalFacilitiesId: number
  careUnitType: string
  careUnitName: string
  count: number
}

export type YesNoEnumType = 'YES' | 'NO'

export type ClinicalServiceType = {
  id: number
  service: string
  serviceType: string
  ipd: YesNoEnumType
  opd: YesNoEnumType
  surgicalInterventions: YesNoEnumType
  availability: YesNoEnumType
}

export type BedStrengthType = {
  id: number
  roomType: string
  bedName: string
  count: number
}

export type ContactDetailType = {
  id: number
  email: string
  name: string
  phone: string
  Designation: string
}

export type BankDetails = {
  bankName: string
  bankBranch: string
  accountType: string
  accountNo: string
  ifscCode: string
  micrCode: string
  cancelChequeNo: string
  UpiID: string
  payeeName: string
  panCardHolder: string
  pan: string
}

export type Facilities = {
  id: number
  inPatientFacilities: string
  parkingFacility: string
  accessibility: YesNoEnumType
  codingAndBilling: YesNoEnumType
  otherCoding: string
  internalInfrastructure: FacilityType[]
}

export type HospitalBasicDetails = {
  id: string
  hospitalName: string
  address: string
  pincode: string
  city: string
  landmark: string
  state: string
  phoneNo: string
  website: string
  email: string
  hospitalNameAndPincode: string
  idGoogleLink: string
  GST: string
  TAN: string
  ownership: string
  fieldsOfMedicene: FacilityType[]
  accredition: FacilityType[]
}

export type HospitalRegistrationDetails = {
  id: number
  RegisteredNoOfBeds: number
  hospitalRegistrationNo: string
  nameOfRegisteringAuthority: string
  hubspotCustomObjectID: string
  rohiniId: string
  typesOfFacilities: FacilityType[]
}

export type HospitalStaffing = {
  noOfDoctors: number
  noOfQualifiedFullTimeDoctorsApprovedByMCI: number
  noOfSurgeonsOrInterventionists: number
  noOfDoctorsExclusivelyForICU: number
  totalNoOfQualifiedNurses: number
  noOfQualifiedNursesExclusivelyForICU: number
}

export type QualityParameters = {
  id: number
  hospitalStaffId: number
  doctorBedRatio: string
  nurseBedRatio: string
  doctorBedRatioInIcu: string
  nurseBedRatioInIcu: string
  averageAdmissionTimeMins: string
  averageDischargeTimeMins: string
}

export type CareUnitCounts = CareUnitCountType[]
export type ClinicalServices = ClinicalServiceType[]
export type DetailsToBedStrength = BedStrengthType[]
export type HospitalContactDetails = ContactDetailType[]

export type HospitalDetails = {
  bankDetails: BankDetails
  careUnitCounts: CareUnitCounts
  clinicalServices: ClinicalServices
  detailsToBedStrength: DetailsToBedStrength
  facilities: Facilities
  hospitalBasicDetails: HospitalBasicDetails
  hospitalContactDetails: HospitalContactDetails
  hospitalRegistrationDetails: HospitalRegistrationDetails
  hospitalStaffing: HospitalStaffing
  qualityParameters: QualityParameters
  uploadedFiles: []
}

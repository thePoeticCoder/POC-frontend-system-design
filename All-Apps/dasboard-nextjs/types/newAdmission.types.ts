export type UserAddressType = {
  isPrimary: boolean
  addressName: string
  addressLine1: string
  buildingOrFlatNo: string
  addressLine2: string
  district: string
  city: string
  state: string
  country: string
  pincode: number
  addressType: string
  landmark: string
  addressGeoLocation: string
}

export type FamilyDependantType = {
  _id: string
  isActive: boolean
  dependentName: string
  masterUserId: string
  masterHubspotContactId: string
  dependentAge: number
  dependentRelation: string
  __v: number
  createdAt: string
  updatedAt: string
}

export type UserType = {
  _id: string
  userID: string
  name: string
  emailId: string
  phoneNo: number
  createdBy: number
  dob: null
  gender: string
  pincode: number
  category: string
  userStatus: string
  userKenkoScore: null
  addresses: UserAddressType[]
  companyCollectionID: string
  age: number
  companyName: string
  hubspotContactId: string
  profilePictureUrl: string
  userCurrentPlans: []
  userKenkoCredits: number
  userMaritalStatus: null
  userProfession: null
  userPlanCollectionId: string
  userPlanName: string
  familyDependents: FamilyDependantType[]
}

export type DisplayUserType = {
  id: string
  name: string
  email: string
  phone: number
  profilePictureUrl: string
}

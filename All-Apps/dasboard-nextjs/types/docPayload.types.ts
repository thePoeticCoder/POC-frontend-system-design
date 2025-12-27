import { DocType } from './documentUploadModal.types'

export type FamilyMemberType = {
  familyDependentsID: string | undefined
  dependentHubspotContactId: string | undefined
  isActive: boolean | undefined
  dependentName: string | undefined
  masterUserId: string | undefined
  dependentAge: number | undefined
  dependentRelation: string | undefined
}

export type PayloadDocType = {
  tag: string
  userFileType: string
  userFileId: string
  userCollectionId: string
  userFileDisplayName: string
  userFileLongName: string
  userDocType: string
  directoryPath: string
  bucketId: string
  url: string
}

export type IntimationDocPayload = {
  orderId: string | string[] | undefined
  orderType: string
  userCollectionId: string | string[] | undefined
  orderFormData: {
    ipdOrder: {
      intimation: {
        intimationDocuments: DocType[]
        cashless: {
          cashlessHospitalId: string
          isCashless: boolean
          orderCreatedByHospital: boolean
        }
      }
    }
  }
}

export type DischargeDocPayload = {
  orderId: string | string[] | undefined
  orderType: string
  userCollectionId: string | string[] | undefined
  orderFormData: {
    ipdOrder: {
      discharge: {
        dischargeDocuments: DocType[]
        cashless: {
          cashlessHospitalId: string
          isCashless: boolean
          orderCreatedByHospital: boolean
        }
      }
    }
  }
}

export type CreateOrderData = {
  orderFormData: {
    ipdOrder: {
      intimation: {
        cashless: {
          cashlessHospitalId: string
          isCashless: boolean
          orderCreatedByHospital: boolean
        }
        admissionDate: number
        dischargeDate: number
        hospital: {
          active: boolean
          address: {
            address: string
            city: string
            country: string
            pincode: number
          }
          id: string
          name: string
        }
        intimationDocuments: PayloadDocType[]
      }
    }
  }
  orderType: string
  userPlanCollectionId: string | undefined
  userPlanName: string
  userComment: string
  userCollectionId: string | undefined
  targetFamilyDependentDetails?: FamilyMemberType
}

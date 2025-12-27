import { HospitalDetails } from '../types/hospitalDetails.types'
import {
  extractRoom,
  extractContact,
  extractService,
  filterBasedOnName,
  filterOutBasedOnId,
  extractCareUnit,
  extractInfraStructure,
} from './extractObject'
import { getMappedValue } from './hospitalBasicDetailMapping'

export const getHospitalDetailsMapping = (hospitalDetails: HospitalDetails) => {
  const data = hospitalDetails
  const careUnitsOT = data?.careUnitCounts?.filter(
    (careUnit) => careUnit.careUnitType === 'GENERAL_UNIT'
  )
  const careUnitsICU = data?.careUnitCounts?.filter(
    (careUnit) => careUnit.careUnitType === 'INTENSIVE_UNIT'
  )

  const initialValues: HospitalDetails = {
    hospitalBasicDetails: {
      ...data?.hospitalBasicDetails,
      hospitalName: data?.hospitalBasicDetails?.hospitalName || '',
      address: data?.hospitalBasicDetails?.address || '',
      landmark: data?.hospitalBasicDetails?.landmark || '',
      city: data?.hospitalBasicDetails?.city || '',
      pincode: data?.hospitalBasicDetails?.pincode || '',
      website: data?.hospitalBasicDetails?.website || '',
      idGoogleLink: data?.hospitalBasicDetails?.idGoogleLink || '',
      state: data?.hospitalBasicDetails?.state || '',
      phoneNo: data?.hospitalBasicDetails?.phoneNo || '',
      email: data?.hospitalBasicDetails?.email || '',
      ownership: data?.hospitalBasicDetails?.ownership || '',
      fieldsOfMedicene: data?.hospitalBasicDetails?.fieldsOfMedicene.map(
        (item: { name: string; availability: boolean }) => ({
          name: item.name,
          value: item.name,
          label: item.name,
          availability: item.availability,
        })
      ),
      accredition: data?.hospitalBasicDetails?.accredition.map(
        (item: { name: string; availability: boolean }) => ({
          name: item.name,
          value: item.name,
          label: getMappedValue(item.name),
          availability: item.availability,
        })
      ),
    },

    bankDetails: {
      bankName: data?.bankDetails?.bankName || '',
      bankBranch: data?.bankDetails?.bankBranch || '',
      accountType: data?.bankDetails?.accountType || '',
      accountNo: data?.bankDetails?.accountNo || '',
      ifscCode: data?.bankDetails?.ifscCode || '',
      micrCode: data?.bankDetails?.micrCode || '',
      cancelChequeNo: data?.bankDetails?.cancelChequeNo || '',
      UpiID: data?.bankDetails?.UpiID || '',
      payeeName: data?.bankDetails?.payeeName || '',
      pan: data?.bankDetails?.pan || '',
      panCardHolder: data?.bankDetails?.panCardHolder || '',
    },
    // // section E:
    hospitalRegistrationDetails: {
      id: data?.hospitalRegistrationDetails?.id,
      RegisteredNoOfBeds: data?.hospitalRegistrationDetails?.RegisteredNoOfBeds,
      hospitalRegistrationNo:
        data?.hospitalRegistrationDetails?.hospitalRegistrationNo,
      nameOfRegisteringAuthority:
        data?.hospitalRegistrationDetails?.nameOfRegisteringAuthority,
      hubspotCustomObjectID:
        data?.hospitalRegistrationDetails?.hubspotCustomObjectID,
      rohiniId: data?.hospitalRegistrationDetails?.rohiniId,
      typesOfFacilities:
        data?.hospitalRegistrationDetails?.typesOfFacilities?.map(
          (item: { name: string; availability: boolean }) => ({
            name: item.name,
            value: item.name,
            label: item.name,
            availability: item.availability,
          })
        ),
    },

    hospitalStaffing: {
      noOfQualifiedFullTimeDoctorsApprovedByMCI:
        data?.hospitalStaffing?.noOfQualifiedFullTimeDoctorsApprovedByMCI,
      noOfDoctors: data?.hospitalStaffing?.noOfDoctors,
      noOfSurgeonsOrInterventionists:
        data?.hospitalStaffing?.noOfSurgeonsOrInterventionists,
      noOfDoctorsExclusivelyForICU:
        data?.hospitalStaffing?.noOfDoctorsExclusivelyForICU,
      totalNoOfQualifiedNurses:
        data?.hospitalStaffing?.totalNoOfQualifiedNurses,
      noOfQualifiedNursesExclusivelyForICU:
        data?.hospitalStaffing?.noOfQualifiedNursesExclusivelyForICU,
    },

    qualityParameters: {
      id: data?.qualityParameters?.id,
      hospitalStaffId: data?.qualityParameters?.hospitalStaffId,
      doctorBedRatio: data?.qualityParameters?.doctorBedRatio,
      nurseBedRatio: data?.qualityParameters?.nurseBedRatio,
      doctorBedRatioInIcu: data?.qualityParameters?.doctorBedRatioInIcu,
      nurseBedRatioInIcu: data?.qualityParameters?.nurseBedRatioInIcu,
      averageAdmissionTimeMins:
        data?.qualityParameters?.averageAdmissionTimeMins,
      averageDischargeTimeMins:
        data?.qualityParameters?.averageDischargeTimeMins,
    },

    facilities: {
      id: data?.facilities?.id,
      inPatientFacilities: data?.facilities?.inPatientFacilities,
      parkingFacility: data?.facilities?.parkingFacility,
      accessibility: data?.facilities?.accessibility,
      codingAndBilling: data?.facilities?.codingAndBilling,
      otherCoding: data?.facilities?.otherCoding,
      internalInfrastructure: filterBasedOnName([
        {
          ...extractInfraStructure(
            data?.facilities?.internalInfrastructure,
            'WAITING_ROOM'
          ),
        },
        {
          ...extractInfraStructure(
            data?.facilities?.internalInfrastructure,
            'CANTEEN'
          ),
        },
        {
          ...extractInfraStructure(
            data?.facilities?.internalInfrastructure,
            'COMPUTERIZED_BILLING'
          ),
        },
        {
          ...extractInfraStructure(
            data?.facilities?.internalInfrastructure,
            'PATIENT_FOOD_INCLUDED_IN_ACCOMMODATION'
          ),
        },
        {
          ...extractInfraStructure(
            data?.facilities?.internalInfrastructure,
            'STD_OR_FAX_OR_PHOTOCOPY'
          ),
        },
        {
          ...extractInfraStructure(
            data?.facilities?.internalInfrastructure,
            'DIRECT_TELEPHONE_ACCESS_TO_WARDS_AND_ICU'
          ),
        },
      ]),
    },

    hospitalContactDetails: filterOutBasedOnId([
      {
        ...extractContact(
          data?.hospitalContactDetails,
          'Insurance DeskORMediclaim'
        ),
      },
      {
        ...extractContact(data?.hospitalContactDetails, 'AccountsORBilling'),
      },
      {
        ...extractContact(data?.hospitalContactDetails, 'Marketing Head'),
      },
      {
        ...extractContact(data?.hospitalContactDetails, 'Medical Director'),
      },
      {
        ...extractContact(data?.hospitalContactDetails, 'Kenko Spoc'),
      },
      {
        ...extractContact(data?.hospitalContactDetails, 'Admin Head'),
      },
    ]),

    detailsToBedStrength: [
      {
        ...extractRoom(data?.detailsToBedStrength, 'AC_SUITE'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'AC_SINGLE'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'NON_AC_SINGLE'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'AC_TWIN_SHARING'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'NON_AC_TWIN_SHARING'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'MULTI_SHARING_3_4_BEDS'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'GENERAL_WARD_AC_NON_AC'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'ICU'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'ICCU'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'MICU'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'SICU'),
      },
      {
        ...extractRoom(data?.detailsToBedStrength, 'PICU'),
      },
    ],
    uploadedFiles: [],

    careUnitCounts: [
      {
        ...extractCareUnit(careUnitsOT, 'GENERAL'),
      },
      {
        ...extractCareUnit(careUnitsOT, 'MATERNITY_OR_LABOUR_ROOM'),
      },
      {
        ...extractCareUnit(careUnitsOT, 'SPECIALIZED'),
      },
      {
        ...extractCareUnit(careUnitsICU, 'INTENSIVE_CARE_UNIT'),
      },
      {
        ...extractCareUnit(careUnitsICU, 'INTENSIVE_CRITICAL_CARE_UNIT'),
      },
      {
        ...extractCareUnit(careUnitsICU, 'MEDICAL_ICU'),
      },
      {
        ...extractCareUnit(careUnitsICU, 'PEDIATRIC_ICU'),
      },
      {
        ...extractCareUnit(careUnitsICU, 'SURGICAL_ICU'),
      },
    ],

    clinicalServices: [
      {
        ...extractService(data?.clinicalServices, 'GENERAL_MEDICINE'),
      },
      {
        ...extractService(data?.clinicalServices, 'GENERAL_SURGERY'),
      },
      { ...extractService(data?.clinicalServices, 'PEDIATRICS') },
      { ...extractService(data?.clinicalServices, 'OPHTHALMOLOGY') },
      { ...extractService(data?.clinicalServices, 'ORTHOPEDIC') },
      { ...extractService(data?.clinicalServices, 'UROLOGY') },
      { ...extractService(data?.clinicalServices, 'ENT') },
      {
        ...extractService(data?.clinicalServices, 'GYNECOLOGY_AND_OBSTETRICS'),
      },
      { ...extractService(data?.clinicalServices, 'CARDIAC') },
      { ...extractService(data?.clinicalServices, 'ONCOLOGY') },
      { ...extractService(data?.clinicalServices, 'NEPHROLOGY') },
      { ...extractService(data?.clinicalServices, 'NEUROLOGY') },
      {
        ...extractService(
          data?.clinicalServices,
          'PLASTIC_OR_RECONSTRUCTION_SURGERY'
        ),
      },
      { ...extractService(data?.clinicalServices, 'BURNS') },
      { ...extractService(data?.clinicalServices, 'HEMATOLOGY') },
      {
        ...extractService(data?.clinicalServices, 'ORGAN_TRANSPLANTS'),
      },
      {
        ...extractService(data?.clinicalServices, 'RADIATION_THERAPY'),
      },
      {
        ...extractService(data?.clinicalServices, 'AUTOCLAVING'),
      },
      { ...extractService(data?.clinicalServices, 'FUMIGATION') },
      {
        ...extractService(
          data?.clinicalServices,
          'LONIZING_OR_NON_LONIZING_UV_RADIATIONS'
        ),
      },
      {
        ...extractService(data?.clinicalServices, 'OTHERS_PLEASE_SPECIFY'),
      },

      // In-House services:
      {
        ...extractService(data?.clinicalServices, 'BLOOD_BANK'),
      },
      {
        ...extractService(data?.clinicalServices, 'CATH_LAB'),
      },
      {
        ...extractService(data?.clinicalServices, 'DIALYSIS'),
      },
      {
        ...extractService(data?.clinicalServices, 'EMERGENCY_OR_MAINTENANCE'),
      },
      {
        ...extractService(data?.clinicalServices, 'FULL_TIME_DOCTORS'),
      },
      {
        ...extractService(data?.clinicalServices, 'HOUSEKEEPING'),
      },
      {
        ...extractService(data?.clinicalServices, 'LAUNDRY'),
      },
      {
        ...extractService(data?.clinicalServices, 'MORTUARY'),
      },
      {
        ...extractService(data?.clinicalServices, 'NURSING'),
      },
      {
        ...extractService(data?.clinicalServices, 'PATHOLOGY'),
      },
      {
        ...extractService(data?.clinicalServices, 'PHARMACY'),
      },
      {
        ...extractService(data?.clinicalServices, 'RMOS'),
      },
      {
        ...extractService(data?.clinicalServices, 'SECURITY'),
      },
      {
        ...extractService(data?.clinicalServices, 'CARM_OR_BOYLES'),
      },
      {
        ...extractService(
          data?.clinicalServices,
          'OT_TABLE_HYDRAULIC_OR_MANUAL'
        ),
      },
      {
        ...extractService(data?.clinicalServices, 'SUCTION'),
      },
      {
        ...extractService(data?.clinicalServices, 'CARDIAC_DEFIBRILLATOR'),
      },
      {
        ...extractService(data?.clinicalServices, 'LAMINAR_AIR_FLOW'),
      },
      {
        ...extractService(data?.clinicalServices, 'CARDIAC_MONITOR'),
      },
      {
        ...extractService(data?.clinicalServices, 'ELECTROCAUTERY'),
      },
      {
        ...extractService(data?.clinicalServices, 'CARDIAC_AMB'),
      },
      {
        ...extractService(data?.clinicalServices, 'DOCTOR_ACCOMPANYING_AMB'),
      },
      {
        ...extractService(data?.clinicalServices, 'GENERAL_AMB'),
      },
      {
        ...extractService(data?.clinicalServices, 'NEONATAL_AMB'),
      },
      {
        ...extractService(data?.clinicalServices, 'VENTILATOR_SUPPORT_AMB'),
      },
    ],
  }

  return initialValues
}

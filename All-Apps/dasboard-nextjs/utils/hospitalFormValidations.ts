import * as Yup from 'yup'

export const hospitalBasicDetailsValidations = {
  hospitalBasicDetails: Yup.object().shape({
    hospitalName: Yup.string().matches(/^[A-Za-z ]*$/, 'Enter valid name'),
    landmark: Yup.string().matches(/^[A-Za-z ]*$/, 'Enter valid landmark'),
    city: Yup.string().matches(/^[A-Za-z]*$/, 'Enter valid city name'),
    pincode: Yup.string().test(
      'len',
      'Pincode should be of 6 digits',
      (val: string | undefined) => (val ? val.length === 6 : true)
    ),
    phoneNo: Yup.string().test(
      'phone',
      'Enter valid 10 digit phone number',
      (val: string | undefined) => (val ? val.length === 10 : false)
    ),
    email: Yup.string().email('Enter valid email'),
    idGoogleLink: Yup.string()
      .url('Enter valid url')
      .required('Google link is required'),
  }),
}

export const hospitalRegistrationDetailsValidations = {
  hospitalRegistrationDetails: Yup.object().shape({
    RegisteredNoOfBeds: Yup.string().test(
      'Bed no',
      'No of beds should be positive number',
      (val: string | undefined) => (val ? Number(val) >= 0 : true)
    ),
    nameOfRegisteringAuthority: Yup.string().matches(
      /^[A-Za-z ]*$/,
      'Enter valid name of registry authority'
    ),
    hospitalRegistrationNo: Yup.string().matches(
      /^[a-z0-9]+$/i,
      'Enter valid hospital registration no'
    ),
  }),
}

export const hospitalStaffing = {
  hospitalStaffing: Yup.object().shape({
    noOfQualifiedFullTimeDoctorsApprovedByMCI: Yup.string()
      .required('Field is required')
      .test(
        'Qualified doctors no',
        'Enter positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      )
      .max(3, 'Enter value till 3 digits'),
    noOfDoctors: Yup.string()
      .required('Field is required')
      .test('Doctors no', 'Enter positive number', (val: string | undefined) =>
        val ? Number(val) >= 0 : true
      )
      .max(3, 'Enter value till 3 digits'),
    noOfSurgeonsOrInterventionists: Yup.string()
      .required('Field is required')
      .test('Surgeons no', 'Enter positive number', (val: string | undefined) =>
        val ? Number(val) >= 0 : true
      )
      .max(3, 'Enter value till 3 digits'),
    totalNoOfQualifiedNurses: Yup.string()
      .required('Field is required')
      .test('Nurses no', 'Enter positive number', (val: string | undefined) =>
        val ? Number(val) >= 0 : true
      )
      .max(3, 'Enter value till 3 digits'),
    noOfQualifiedNursesExclusivelyForICU: Yup.string()
      .required('Field is required')
      .test(
        'ICU nurses no',
        'Enter positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      )
      .max(3, 'Enter value till 3 digits'),
    noOfDoctorsExclusivelyForICU: Yup.string()
      .required('Field is required')
      .test(
        'ICU doctors no',
        'Enter positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      )
      .max(3, 'Enter value till 3 digits'),
  }),
}

export const hospitalContactDetails = {
  hospitalContactDetails: Yup.array(
    Yup.object({
      name: Yup.string().matches(/^[A-Za-z ]*$/, 'Enter valid name'),
      email: Yup.string().email('Enter valid email'),
      phone: Yup.string().test(
        'phone',
        'Enter valid 10 digit phone number',
        (val: string | undefined) => (val ? val.length === 10 : false)
      ),
    })
  ),
}

export const detailsToBedStrength = {
  detailsToBedStrength: Yup.array(
    Yup.object({
      bedName: Yup.string().matches(/^[a-z0-9]+$/i, 'Enter valid bed name'),
      count: Yup.string()
        .required('Count is required')
        .test(
          'Bed count',
          'Bed count should be positive number',
          (val: string | undefined) => (val ? Number(val) >= 0 : true)
        )
        .max(3, 'Enter value till 3 digits'),
    })
  ),
}

export const careUnitCount = {
  careUnitCount: Yup.array(
    Yup.object({
      count: Yup.string().test(
        'Care unit count',
        'Should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      ),
    })
  ),
}

export const bankDetails = {
  bankDetails: Yup.object().shape({
    bankBranch: Yup.string().matches(/^[A-Za-z ]*$/, 'Enter valid branch name'),
    UpiID: Yup.string().matches(
      /^[\w\.\-_]{3,}@[a-zA-Z]{3,}/,
      'Enter valid Upi Id'
    ),
    payeeName: Yup.string().matches(/^[A-Za-z ]*$/, 'Enter valid name'),
    panCardHolder: Yup.string().matches(/^[A-Za-z ]*$/, 'Enter valid name'),
  }),
}

export const qualityParameters = {
  qualityParameters: Yup.object().shape({
    averageAdmissionTimeMins: Yup.string()
      .required('Field is required')
      .test(
        'Admission time',
        'Admission Time should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      )
      .max(8, 'Enter value till 8 digits'),
    averageDischargeTimeMins: Yup.string()
      .required('Count is required')
      .test(
        'Discharge time',
        'Discharge Time should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      )
      .max(8, 'Enter value till 8 digits'),
    doctorBedRatio: Yup.string()
      .required('Count is required')
      .test(
        'Doctor bed ratio',
        'Ratio should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      ),
    // .max(9, 'Enter value till 9 digits'),
    doctorBedRatioInIcu: Yup.string()
      .required('Count is required')
      .test(
        'Doctor bed ratio icu',
        'Ratio should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      ),
    // .max(9, 'Enter value till 9 digits'),
    nurseBedRatio: Yup.string()
      .required('Count is required')
      .test(
        'Nurse bed ratio',
        'Ratio should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      ),
    // .max(9, 'Enter value till 9 digits'),
    nurseBedRatioInIcu: Yup.string()
      .required('Count is required')
      .test(
        'Nurse bed ratio icu',
        'Ratio should be positive number',
        (val: string | undefined) => (val ? Number(val) >= 0 : true)
      ),
    // .max(9, 'Enter value till  9 digits'),
  }),
}

export const sectionFormBValidations = {
  insurancePersonPhoneNo: Yup.string().test(
    'phone',
    'Phone no should be of 10 digits',
    (val: string | undefined) => (val ? val.length === 10 : false)
  ),
  // accountsPersonName: Yup.string().required('Accounts person name is required'),
  // accountsPersonEmail: Yup.string().email('Invalid email format'),
  // .required('Accounts person email required'),
  // accountsPersonPhoneNo: Yup.string().test(
  //   'phone',
  //   'Phone no should be of 10 digits',
  //   (val: string | undefined) => (val ? val.length === 10 : false)
  // ),
  // marketingHeadName: Yup.string().required('Marketing head name is required'),
  // marketingHeadEmail: Yup.string().email('Invalid email format'),
  // .required('Marketing head email is required'),
  // marketingHeadPhoneNo: Yup.string().test(
  //   'phone',
  //   'Phone no should be of 10 digits',
  //   (val: string | undefined) => (val ? val.length === 10 : false)
  // ),
  // medicalDirectorName: Yup.string().required(
  //   'Medical director name is required'
  // ),
  // medicalDirectorEmail: Yup.string().email('Invalid email format'),
  // .required('Medical director email is required'),
  // medicalDirectorPhoneNo: Yup.string().test(
  //   'phone',
  //   'Phone no should be of 10 digits',
  //   (val: string | undefined) => (val ? val.length === 10 : false)
  // ),
  // kenkoSPOCName: Yup.string().required('Kenko SPOC name is required'),
  // kenkoSPOCEmail: Yup.string().email('Invalid email format'),
  // .required('Kenko SPOC email is required'),
  // kenkoSPOCPhoneNo: Yup.string().test(
  //   'phone',
  //   'Phone no should be of 10 digits',
  //   (val: string | undefined) => (val ? val.length === 10 : false)
  // ),
  // adminHeadName: Yup.string().required('Admin head name is required'),
  // adminHeadEmail: Yup.string().email('Invalid email format'),
  // .required('Admin head email is required'),
  // adminHeadPhoneNo: Yup.string().test(
  //   'phone',
  //   'Phone no should be of 10 of digits',
  //   (val: string | undefined) => (val ? val.length === 10 : false)
  // ),
}

export const sectionFormCValidations = {
  // bankName: Yup.string().required('Bank name is required'),
  // bankBranch: Yup.string().required('Branch name is required'),
  // accountType: Yup.string().required('Account type is required'),
  accountNo: Yup.string().test(
    'acc no',
    'Account number should be positive',
    (val: string | undefined) => (val ? Number(val) > 0 : true)
  ),
  // ifscCode: Yup.string().required('IFSC code is required'),
  // micrCode: Yup.string().required('MICR code is required'),
  cancelChequeNo: Yup.string().test(
    'acc no',
    'Cancel cheque number should be positive',
    (val: string | undefined) => (val ? Number(val) > 0 : true)
  ),
  // upiId: Yup.string().required('UPI ID is required'),
  // Section D validations
}

export const sectionFormDValidations = {
  // payeeHospitalName: Yup.string().required('Hospital name is required'),
  // payeeName: Yup.string().required('Payee name is required'),
  // panNo: Yup.string().test(
  //   'pan no',
  //   'PAN no should be of 10 digits',
  //   (val: string | undefined) => (val ? val.length === 10 : true)
  // ),
  // panHolderName: Yup.string().required('Pan holder name is required'),
}

export const sectionFormEValidations = {
  noOfBeds: Yup.string().test(
    'Bed no',
    'No of beds should be positive',
    (val: string | undefined) => (val ? Number(val) > 0 : false)
  ),
  hospitalRegistrationNo: Yup.string().required(
    'Hospital registration no is required'
  ),
  registeringAuthorityName: Yup.string().required(
    'Name of registering authority is required'
  ),
  facilityType: Yup.string().required('Facility type is required'),
  rohiniId: Yup.string().required('Rohini id is required'),
  general: Yup.string().required('General is required'),
  maternityRoom: Yup.string().required('Maternity/Labour room is required'),
  specialized: Yup.string().required('Specialized is required'),
  intensiveCareUnit: Yup.string().required('Intensive care unit is required'),
  intensiveCriticalCareUnit: Yup.string().required(
    'Intensive critical care unit is required'
  ),
  medicalIcu: Yup.string().required('Medical ICU is required'),
  pediatricIcu: Yup.string().required('Pediatric ICU is required'),
  surgicalIcu: Yup.string().required('Surgical ICU is required'),
  parkingFacility: Yup.string().required('Parking facility is required'),
  accessibility: Yup.string().required('Accessibility is required'),
  codingAndBilling: Yup.string().required('Coding and billing is required'),
  waitingRoom: Yup.string().required('Waiting room is required'),
  canteen: Yup.string().required('Canteen is required'),
  computerizedBilling: Yup.string().required(
    'Computerized billing is required'
  ),
  patientFoodIncludedInAccommodation: Yup.string().required(
    'Patient food included in accommodation is required'
  ),
  std: Yup.string().required('STD/FAX/Photocopy is required'),
  telephoneAccessToWards: Yup.string().required(
    'Direct Telephone access to wards & ICU: is required'
  ),
}

export const sectionFormFValidations = {
  acBedName: Yup.string().required('Bed name is required'),
  acBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  acSingleBedName: Yup.string().required('Bed name is required'),
  acSingleBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  nonAcSingleBedName: Yup.string().required('Bed name is required'),
  nonAcSIngleBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  acTwinSharingBedName: Yup.string().required('Bed name is required'),
  acTwinSharingBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  nonAcTwinSharingBedName: Yup.string().required('Bed name is required'),
  nonAcTwinSharingBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  multiSharingBedName: Yup.string().required('Bed name is required'),
  multiSharingBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  generalWardBedName: Yup.string().required('Bed name is required'),
  generalWardBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    )
    .required(),
  icuBedName: Yup.string().required('Bed name is required'),
  icuBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  iccuBedName: Yup.string().required('Bed name is required'),
  iccuBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  micuBedName: Yup.string().required('Bed name is required'),
  micuBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  sicuBedName: Yup.string().required('Bed name is required'),
  sicuBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
  picuBedName: Yup.string().required('Bed name is required'),
  picuBedCount: Yup.string()
    .required('Bed count is required')
    .test(
      'Bed no',
      'No of beds should be positive',
      (val: string | undefined) => (val ? Number(val) >= 0 : false)
    ),
}

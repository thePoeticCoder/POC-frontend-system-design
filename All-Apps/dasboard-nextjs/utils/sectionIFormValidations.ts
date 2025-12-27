import * as Yup from 'yup'

export const sectionFormIValidations = {
  generalMedicineOpd: Yup.string().required('OPD is required'),
  generalMedicineIpd: Yup.string().required('IPD is required'),
  generalMedicineSI: Yup.string().required(
    'Surgical Interventions is required'
  ),
  generalSurgeryOpd: Yup.string().required('OPD is required'),
  generalSurgeryIpd: Yup.string().required('IPD is required'),
  generalSurgerySI: Yup.string().required('Surgical Interventions is required'),
  pediatricsOpd: Yup.string().required('OPD is required'),
  pediatricsIpd: Yup.string().required('IPD is required'),
  pediatricsSI: Yup.string().required('Surgical Interventions is required'),
  orthopedicOpd: Yup.string().required('OPD is required'),
  orthopedicIpd: Yup.string().required('IPD is required'),
  orthopedicSI: Yup.string().required('Surgical Interventions is required'),
  ophthalmologyOpd: Yup.string().required('OPD is required'),
  ophthalmologyIpd: Yup.string().required('IPD is required'),
  ophthalmologySI: Yup.string().required('Surgical Interventions is required'),
  earNoseAndThroatOpd: Yup.string().required('OPD is required'),
  earNoseAndThroatIpd: Yup.string().required('IPD is required'),
  earNoseAndThroatSI: Yup.string().required(
    'Surgical Interventions is required'
  ),
  gynecologyAndObstetricsOpd: Yup.string().required('OPD is required'),
  gynecologyAndObstetricsIpd: Yup.string().required('IPD is required'),
  gynecologyAndObstetricsSI: Yup.string().required(
    'Surgical Interventions is required'
  ),
  cardiacOpd: Yup.string().required('OPD is required'),
  cardiacIpd: Yup.string().required('IPD is required'),
  cardiacSI: Yup.string().required('Surgical Interventions is required'),
  neurologyOpd: Yup.string().required('OPD is required'),
  neurologyIpd: Yup.string().required('IPD is required'),
  neurologySI: Yup.string().required('Surgical Interventions is required'),
  urologyOpd: Yup.string().required('OPD is required'),
  urologyIpd: Yup.string().required('IPD is required'),
  urologySI: Yup.string().required('Surgical Interventions is required'),
  oncologyOpd: Yup.string().required('OPD is required'),
  oncologyIpd: Yup.string().required('IPD is required'),
  oncologySI: Yup.string().required('Surgical Interventions is required'),
  nephrologyOpd: Yup.string().required('OPD is required'),
  nephrologyIpd: Yup.string().required('IPD is required'),
  nephrologySI: Yup.string().required('Surgical Interventions is required'),
  plasticSurgeryOpd: Yup.string().required('OPD is required'),
  plasticSurgeryIpd: Yup.string().required('IPD is required'),
  plasticSurgerySI: Yup.string().required('Surgical Interventions is required'),
  burnsOpd: Yup.string().required('OPD is required'),
  burnsIpd: Yup.string().required('IPD is required'),
  burnsSI: Yup.string().required('Surgical Interventions is required'),
  hematologyOpd: Yup.string().required('OPD is required'),
  hematologyIpd: Yup.string().required('IPD is required'),
  hematologySI: Yup.string().required('Surgical Interventions is required'),
  organTransplantOpd: Yup.string().required('OPD is required'),
  organTransplantIpd: Yup.string().required('IPD is required'),
  organTransplantSI: Yup.string().required(
    'Surgical Interventions is required'
  ),
  radiationTherapyOpd: Yup.string().required('OPD is required'),
  radiationTherapyIpd: Yup.string().required('IPD is required'),
  radiationTherapySI: Yup.string().required(
    'Surgical Interventions is required'
  ),
  autoClaving: Yup.string().required('Auto claving is required'),
  ionizingRadiations: Yup.string().required(
    'Ionizing/Non-Ionizing (UV) Radiations: is required'
  ),
  fumigation: Yup.string().required('Fumigation is required'),
  others: Yup.string().required('Others is required'),
  pharmacy: Yup.string().required('Pharmacy is required'),
  rmo: Yup.string().required("RMO's is required"),
  pathology: Yup.string().required('Pathology is required'),
  nursing: Yup.string().required('Nursing is required'),
  fullTimeDoctors: Yup.string().required('Full time doctors is required'),
  houseKeeping: Yup.string().required('House keeping is required'),
  emergency: Yup.string().required('Emergency/Maintenance is required'),
  laundry: Yup.string().required('Laundry is required'),
  security: Yup.string().required('Security is required'),
  ambulance: Yup.string().required('Ambulance is required'),
  cathLab: Yup.string().required('Cath lab is required'),
  generalAmbulance: Yup.string().required('General is required'),
  cardiacAmbulance: Yup.string().required('Cardiac is required'),
  neonatalAmbulance: Yup.string().required('Neonatal is required'),
  ventilatorAmbulance: Yup.string().required('Ventilator is required'),
  doctorAccompanyingAmbulance: Yup.string().required(
    'Doctor accompanying is required'
  ),
  bloodBank: Yup.string().required('Blood bank is required'),
  mortuary: Yup.string().required('Mortuary is required'),
  dialysis: Yup.string().required('Dialysis is required'),
  otTable: Yup.string().required('OT table is required'),
  laminarAirFlow: Yup.string().required('Laminar air flow is required'),
  cardiacDefibrillator: Yup.string().required(
    'Cardiac defibrillator is required'
  ),
  electrocautery: Yup.string().required('Electrocautery is required'),
  suction: Yup.string().required('Suction is required'),
  cArm: Yup.string().required("C-Arm/Boyle's is required"),
  cardiacMonitor: Yup.string().required('Cardiac monitor is required'),
}

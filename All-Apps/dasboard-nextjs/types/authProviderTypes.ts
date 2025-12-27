export type HospitalAddressType = {
  area: string;
  city: string;
  state: string;
};

export type AuthContextProps = {
  hospitalId: string;
  hospitalName: string;
  hospitalAddress: HospitalAddressType;
  setHospitalAddress: React.Dispatch<React.SetStateAction<HospitalAddressType>>;
  setHospitalName: React.Dispatch<React.SetStateAction<string>>;
  setHospitalId: React.Dispatch<React.SetStateAction<string>>;
};

export type AuthProviderPropType = {
  children: JSX.Element;
  auth: boolean;
};

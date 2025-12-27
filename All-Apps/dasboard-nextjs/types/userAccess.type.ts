export type User<> = {
  name: string;
  role: string;
  email: string;
  Designation:string;
  phone:string;
};

export type UserDetails<> = {
  users: User[];
};

export type AddUserType<> = {
  hospitalId: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  Designation: string;
};

export type EditUserType<> = {
  hospitalId: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  Designation: string;
};

export type deleteUserType<> = {
  name: string;
  email: string;
};

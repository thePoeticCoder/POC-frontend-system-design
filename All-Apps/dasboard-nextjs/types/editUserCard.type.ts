import { voidFunctionType } from "./common.types";
import { deleteUserType } from "./userAccess.type";
import { User } from "./userAccess.type"

type editUserCard = {
  isEditAccess:boolean;
  userDetails:User;
  toggleModalDisplay: (userDelete:deleteUserType)=>void;
};

export type { editUserCard };

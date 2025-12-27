import { Dispatch } from "react";
import {
  CloseTicketsActionTypes,
  CloseTicketsStateType,
} from "./closeTicketsTable.types";
import {
  OpenTicketsActionType,
  OpenTicketsStateType,
} from "./openTicketsTable.types";

export type TicketsStatesContextTypes = {
  openTicketsState: OpenTicketsStateType;
  openTicketsDispatch: Dispatch<OpenTicketsActionType>;
  closeTicketsState: CloseTicketsStateType;
  closeTicketsDispatch: Dispatch<CloseTicketsActionTypes>;
};

import { CloseTicketsActionTypes } from "./closeTicketsTable.types";
import { OptionType } from "./dropDown.type";
import { OpenTicketsActionType } from "./openTicketsTable.types";

export type AccordionFilterType = {
  isOpen: boolean;
  searchFilter: OptionType;
  searchValue: string;
  ticketsDispatch:
    | ((arg: OpenTicketsActionType) => void)
    | ((arg: CloseTicketsActionTypes) => void);
  filterOptions: OptionType[];
};

export type OpenTicketsStateType = {
  searchKey: string;
  pageNo: number;
  searchOption: {
    option: string;
    value: string;
  };
};

export type OpenTicketsSearchKeyActionType = {
  type: "SET_SEARCH_KEY";
  payload: {
    searchKey: string;
  };
};

export type OpenTicketsSearchOptionActionType = {
  type: "SET_SEARCH_FILTER_OPTION";
  payload: {
    option: string;
    value: string;
  };
};

export type OpenTicketsPageActionTypes = {
  type: "SET_PAGE" | "SET_NEXT_PAGE" | "SET_PREV_PAGE" | "RESET_PAGE";
  payload: {
    pageNo: number;
  };
};

export type OpenTicketsActionType =
  | OpenTicketsPageActionTypes
  | OpenTicketsSearchKeyActionType
  | OpenTicketsSearchOptionActionType;

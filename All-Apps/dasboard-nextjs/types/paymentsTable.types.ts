export type paymentsTableRowType = {
  hubspotContactId: number;
  name: string;
  claimId: number;
  admissionDate: Date;
  dischargeDate: Date;
  securityDeposit: number;
  UTRN1: string;
  estimateAmount: number;
  dischargeSettlement: number;
  UTRN2: string;
};
export type PaymentsStateType = {
  searchKey: string;
  pageNo: number;
  searchOption: {
    option: string;
    value: string;
  };
};

export type PaymentsSearchKeyActionTypes = {
  type: "SET_SEARCH_KEY";
  payload: {
    searchKey: string;
  };
};

export type PaymentsSearchOptionActionTypes = {
  type: "SET_SEARCH_FILTER_OPTION";
  payload: {
    option: string;
    value: string;
  };
};

export type PaymentsPageActionTypes = {
  type: "SET_PAGE" | "SET_NEXT_PAGE" | "SET_PREV_PAGE" | "RESET_PAGE";
  payload: {
    pageNo: number;
  };
};

export type PaymentsActionTypes =
  | PaymentsPageActionTypes
  | PaymentsSearchKeyActionTypes
  | PaymentsSearchOptionActionTypes;

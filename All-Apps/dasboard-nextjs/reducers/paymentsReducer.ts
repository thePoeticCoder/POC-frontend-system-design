import {
  PaymentsActionTypes,
  PaymentsStateType,
} from "../types/paymentsTable.types";
import {
  SET_PAGE,
  RESET_PAGE,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
  SET_SEARCH_KEY,
  SET_SEARCH_FILTER_OPTION,
} from "../constants/constants";

export const paymentsInitialState = {
  searchKey: "",
  pageNo: 1,
  searchOption: {
    option: "Customer Name",
    value: "name",
  },
};

export const paymentsTableReducer = (
  state: PaymentsStateType,
  action: PaymentsActionTypes
) => {
  switch (action.type) {
    case SET_SEARCH_KEY:
      return { ...state, searchKey: action.payload.searchKey };

    case SET_PAGE:
      return { ...state, pageNo: action.payload.pageNo };

    case RESET_PAGE:
      return { ...state, pageNo: action.payload.pageNo };

    case SET_NEXT_PAGE:
      return { ...state, pageNo: state.pageNo + action.payload.pageNo };

    case SET_PREV_PAGE:
      return { ...state, pageNo: state.pageNo - action.payload.pageNo };

    case SET_SEARCH_FILTER_OPTION:
      return {
        ...state,
        searchOption: {
          option: action.payload.option,
          value: action.payload.value,
        },
      };

    default:
      return state;
  }
};

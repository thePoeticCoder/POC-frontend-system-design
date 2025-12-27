import {
  CloseTicketsActionTypes,
  CloseTicketsStateType,
} from '../types/closeTicketsTable.types'
import {
  SET_NEXT_PAGE,
  SET_PAGE,
  SET_PREV_PAGE,
  SET_SEARCH_FILTER_OPTION,
  SET_SEARCH_KEY,
  RESET_PAGE,
  SET_DATE_RANGE,
} from '../constants/constants'

export const closeTicketsInitialState = {
  searchKey: '',
  pageNo: 1,
  searchOption: {
    option: 'Customer Name',
    value: 'customerName',
  },
  dateRange: {
    from: undefined,
    to: undefined,
  },
}

export const closeTicketsTableReducer = (
  state: CloseTicketsStateType,
  action: CloseTicketsActionTypes
) => {
  switch (action.type) {
    case SET_SEARCH_KEY:
      return { ...state, searchKey: action.payload.searchKey }

    case SET_PAGE:
      return { ...state, pageNo: action.payload.pageNo }

    case RESET_PAGE:
      return { ...state, pageNo: action.payload.pageNo }

    case SET_NEXT_PAGE:
      return { ...state, pageNo: state.pageNo + action.payload.pageNo }

    case SET_PREV_PAGE:
      return { ...state, pageNo: state.pageNo - action.payload.pageNo }

    case SET_SEARCH_FILTER_OPTION:
      return {
        ...state,
        searchOption: {
          option: action.payload.option,
          value: action.payload.value,
        },
      }

    case SET_DATE_RANGE:
      return {
        ...state,
        dateRange: {
          from:
            action.payload.from === action.payload.to
              ? undefined
              : action.payload.from,
          to:
            action.payload.to === action.payload.from
              ? undefined
              : action.payload.to,
        },
      }

    default:
      return state
  }
}

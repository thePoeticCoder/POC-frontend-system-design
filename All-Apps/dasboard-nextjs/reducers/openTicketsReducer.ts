import {
  OpenTicketsActionType,
  OpenTicketsStateType,
} from '../types/openTicketsTable.types'
import {
  SET_NEXT_PAGE,
  SET_PAGE,
  SET_PREV_PAGE,
  SET_SEARCH_FILTER_OPTION,
  SET_SEARCH_KEY,
  RESET_PAGE,
} from '../constants/constants'

export const openTicketsInitialState = {
  searchKey: '',
  pageNo: 1,
  searchOption: {
    option: 'Customer Name',
    value: 'customerName',
  },
}
export const openTicketsTableReducer = (
  state: OpenTicketsStateType,
  action: OpenTicketsActionType
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

    default:
      return state
  }
}

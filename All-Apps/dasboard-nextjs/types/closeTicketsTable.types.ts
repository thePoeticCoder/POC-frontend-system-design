export type SearchOptionType = {
  option: string
  value: string
}
export type DateRangeType = {
  from: Date | undefined
  to: Date | undefined
}

export type CloseTicketsStateType = {
  searchKey: string
  pageNo: number
  searchOption: SearchOptionType
  dateRange: DateRangeType
}

export type CloseTicketsSearchKeyActionType = {
  type: 'SET_SEARCH_KEY'
  payload: {
    searchKey: string
  }
}

export type CloseTicketsSearchOptionActionType = {
  type: 'SET_SEARCH_FILTER_OPTION'
  payload: SearchOptionType
}

export type CloseTicketsPageActionTypes = {
  type: 'SET_PAGE' | 'SET_NEXT_PAGE' | 'SET_PREV_PAGE' | 'RESET_PAGE'
  payload: {
    pageNo: number
  }
}

export type CloseTicketsDateRangeType = {
  type: 'SET_DATE_RANGE'
  payload: DateRangeType
}

export type CloseTicketsActionTypes =
  | CloseTicketsPageActionTypes
  | CloseTicketsSearchKeyActionType
  | CloseTicketsSearchOptionActionType
  | CloseTicketsDateRangeType

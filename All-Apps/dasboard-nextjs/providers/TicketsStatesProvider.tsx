import { createContext, useContext, useReducer } from 'react'
import {
  closeTicketsInitialState,
  closeTicketsTableReducer,
  openTicketsInitialState,
  openTicketsTableReducer,
} from '../reducers'
import { ReactChildren } from '../types'
import { TicketsStatesContextTypes } from '../types/ticketsStatesContextType'

const TicketsStatesContext = createContext({} as TicketsStatesContextTypes)

const TicketsStatesProvider = ({ children }: ReactChildren) => {
  const [openTicketsState, openTicketsDispatch] = useReducer(
    openTicketsTableReducer,
    openTicketsInitialState
  )

  const [closeTicketsState, closeTicketsDispatch] = useReducer(
    closeTicketsTableReducer,
    closeTicketsInitialState
  )

  return (
    <TicketsStatesContext.Provider
      value={{
        openTicketsState,
        openTicketsDispatch,
        closeTicketsState,
        closeTicketsDispatch,
      }}
    >
      {children}
    </TicketsStatesContext.Provider>
  )
}

const useTicketsStates = () => useContext(TicketsStatesContext)

export { TicketsStatesProvider, useTicketsStates }

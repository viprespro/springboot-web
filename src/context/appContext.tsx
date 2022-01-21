import React, { createContext, FC, useContext, useReducer } from 'react'
import ApplicationReducer from './appReducer'
import initialState, { IState } from './initialState'

const AppContext = createContext([{} as IState])

interface Props {}

export const AppProvider: FC<Props> = ({ children }) => {
  const [appState, dispatch] = useReducer(ApplicationReducer, initialState())
  return (
    <AppContext.Provider value={[appState, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export const useApplicationState = () => useContext(AppContext)

export default AppContext

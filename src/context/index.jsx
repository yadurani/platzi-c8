import { createContext } from 'react'
import useInitialState from '../hooks/useInitialState'

export const ContextApp = createContext({})

const AppState = ({ children }) => {
  const initialState = useInitialState()

  return (
    <ContextApp.Provider value={initialState}>
      {children}
    </ContextApp.Provider>
  )
}

export default AppState
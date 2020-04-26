import React, { useReducer, useContext, useEffect } from 'react'
import tr from './tr'
import en from './en'
const LocalizationStateContext = React.createContext()
const LocalizationDispatchContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'tr':
      return {
        ...state,
        ...tr,
      }
    case 'en':
      return {
        ...state,
        ...en,
      }
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const LocalizationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, en)
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage
    browserLang == 'tr-TR' && dispatch({ type: 'tr' })
  }, [])

  return (
    <LocalizationDispatchContext.Provider value={dispatch}>
      <LocalizationStateContext.Provider value={state}>
        {children}
      </LocalizationStateContext.Provider>
    </LocalizationDispatchContext.Provider>
  )
}

export const useLocalization = () => useContext(LocalizationStateContext)
export const useDispatchLocalization = () =>
  useContext(LocalizationDispatchContext)

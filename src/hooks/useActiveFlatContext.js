import { createContext, useContext } from 'react'

export const ActiveFlatContext = createContext({
  activeFlat: null,
  setActiveFlat: () => {},
})

export const useActiveFlatContext = () => {
  return useContext(ActiveFlatContext)
}

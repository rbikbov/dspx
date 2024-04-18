import { useState } from 'react'
import PropTypes from 'prop-types'

import { ActiveFlatContext } from '@/hooks/useActiveFlatContext'

export const ActiveFlatContextProvider = ({ children }) => {
  const [activeFlat, setActiveFlat] = useState(null)

  return (
    <ActiveFlatContext.Provider value={{ activeFlat, setActiveFlat }}>
      {children}
    </ActiveFlatContext.Provider>
  )
}

ActiveFlatContextProvider.propTypes = {
  children: PropTypes.node,
}

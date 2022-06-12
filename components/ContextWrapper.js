import HeaderContext from '../contexts/HeaderContext'
import { useState, useEffect } from 'react'

const ContextWrapper = ({ children }) => {
  const [userFirstName, setUserFirstName] = useState('')

  return (
    <>
      <HeaderContext.Provider
        value={{
          userFirstName,
          setUserFirstName,
        }}
      >
        {children}
      </HeaderContext.Provider>
    </>
  )
}

export default ContextWrapper

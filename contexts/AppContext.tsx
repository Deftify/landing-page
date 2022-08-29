import React, { useState, useEffect, useContext, createContext } from 'react'

export interface Props {
  isLargeScreen: boolean
  setIsLargeScreen: (isLargeScreen: boolean) => void
}

const AppContext = createContext<Props | null>(null)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setIsLargeScreen(true)
        return
      }
      return setIsLargeScreen(false)
    }

    document.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      document.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLargeScreen,
        setIsLargeScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

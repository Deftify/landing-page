import React, { useState, useEffect, useContext, createContext } from 'react'

export interface Props {
  isLargeScreen: boolean
  setIsLargeScreen: (isLargeScreen: boolean) => void
  hideModal?: any
  setHideModal?: (showModal: any) => void
}

const AppContext = createContext<Props | null>(null)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hideModal, setHideModal] = useState<boolean | null>(null)
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)
  // console.log(win)

  useEffect(() => {
    const userSubscribed = window.localStorage.getItem('subscribed') === 'true'
    if (!userSubscribed) {
      const timeout = setTimeout(() => {
        setHideModal(false)
      }, 4000)
      return () => {
        clearTimeout(timeout)
      }
    }

    setHideModal(userSubscribed)
  }, [])

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
        hideModal,
        setHideModal,
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

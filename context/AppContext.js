import React, { useContext, createContext } from 'react'

//Context
export const AppContext = createContext(null)

//Provider
export const AppContextProvider = ({ children }) => {
  const [currentExample, setCurrentExample] = React.useState({
    title: '',
    url: '',
    sound: '',
  })

  React.useEffect(() => {}, [])

  const values = React.useMemo(
    () => ({
      currentExample: currentExample, // States que seran visibles en el contexto.
      setCurrentExample: setCurrentExample, // Funciones que son exportadas para manejo externo.
    }),
    [currentExample]
  ) // States que serán visibles en el contexto.

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

//
export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    console.error('Error deploying App Context')
  }

  return context
}

export default useAppContext
